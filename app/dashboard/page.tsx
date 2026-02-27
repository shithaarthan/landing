'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { tintyApi } from '../../lib/api';
import { useAuth } from '../../lib/auth-context';

interface ApiKey {
    id: string;
    key?: string;
    key_preview?: string;
    name: string;
    created_at: string;
    last_used_at?: string;
}

export default function DashboardPage() {
    const router = useRouter();
    const { user, loading, signOut } = useAuth();

    const [activeTab, setActiveTab] = useState<'overview' | 'api' | 'usage'>('overview');
    const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
    const [isCreatingKey, setIsCreatingKey] = useState(false);
    const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);
    const [newKeyName, setNewKeyName] = useState('');
    const [showNameInput, setShowNameInput] = useState(false);
    const [newlyCreatedKey, setNewlyCreatedKey] = useState<string | null>(null);
    const [isLoadingData, setIsLoadingData] = useState(true);

    const [usage, setUsage] = useState({
        total_calls: 0,
        limit: 100,
        remaining: 100,
        plan: 'free'
    });

    const [activityLog, setActivityLog] = useState<Array<{
        id: number;
        endpoint: string;
        platform: string;
        success: boolean;
        processing_time_ms: number;
        created_at: string;
    }>>([]);

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    // Fetch keys and usage on mount
    useEffect(() => {
        if (!user) return;

        const fetchData = async () => {
            setIsLoadingData(true);

            // Fetch API keys
            const keysResponse = await tintyApi.listApiKeys();
            if (keysResponse.success && keysResponse.data) {
                setApiKeys(keysResponse.data.keys);
            }

            // Fetch usage
            const usageResponse = await tintyApi.getUsage();
            if (usageResponse.success && usageResponse.data) {
                setUsage(usageResponse.data);
            }

            // Fetch activity log
            const activityResponse = await tintyApi.getActivityLog(10);
            if (activityResponse.success && activityResponse.data) {
                setActivityLog(activityResponse.data.logs);
            }

            setIsLoadingData(false);
        };
        fetchData();
    }, [user]);

    // Show loading while checking auth
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[var(--color-bg)] via-slate-50 to-violet-50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[var(--color-primary-purple)] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!user) {
        return null;
    }

    const createApiKey = async () => {
        if (!newKeyName.trim()) return;
        setIsCreatingKey(true);

        const response = await tintyApi.createApiKey(newKeyName.trim());

        if (response.success && response.data) {
            const newKey = response.data.key;
            setApiKeys([...apiKeys, newKey]);
            setNewlyCreatedKey(newKey.key || null);
            setNewKeyName('');
            setShowNameInput(false);
        }

        setIsCreatingKey(false);
    };

    const copyApiKey = (key: string) => {
        navigator.clipboard.writeText(key);
        setCopiedKeyId(key);
        setTimeout(() => setCopiedKeyId(null), 2000);
    };

    const deleteKey = async (id: string) => {
        if (confirm('Delete this API key? This cannot be undone.')) {
            const response = await tintyApi.deleteApiKey(id);
            if (response.success) {
                setApiKeys(apiKeys.filter(k => k.id !== id));
            } else {
                alert('Failed to delete API key: ' + (response.error || 'Unknown error'));
            }
        }
    };

    // Account component with user info
    const AccountIcon = () => (
        <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--color-darkmuted)] hidden md:block">
                {user.name || user.email}
            </span>
            {user.image ? (
                <img
                    src={user.image}
                    alt={user.name || 'User'}
                    className="w-10 h-10 rounded-full"
                />
            ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] flex items-center justify-center text-white font-semibold text-sm">
                    {(user.name || user.email || 'U')[0].toUpperCase()}
                </div>
            )}
            <button
                onClick={() => signOut()}
                className="text-sm text-[var(--color-muted)] hover:text-red-500 hidden md:block"
            >
                Sign Out
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-bg)] via-slate-50 to-violet-50">
            {/* Header */}
            <header className="bg-white/95 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <Link href="/" className="flex items-center gap-3">
                            <img src="/icon.png" alt="Tinty" className="w-10 h-10 rounded-xl" />
                            <span className="text-xl font-display font-bold text-[var(--color-charcoal)]">
                                Tinty <span className="text-sm font-normal text-[var(--color-primary-purple)]">Developer</span>
                            </span>
                        </Link>

                        <nav className="flex items-center gap-2">
                            {[
                                { id: 'overview', label: 'Overview' },
                                { id: 'api', label: 'API Keys' },
                                { id: 'usage', label: 'Usage' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] text-white'
                                        : 'text-[var(--color-charcoal)] hover:bg-gray-100'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>

                        <AccountIcon />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">

                {/* OVERVIEW TAB */}
                {activeTab === 'overview' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h1 className="text-3xl font-display font-bold text-[var(--color-charcoal)] mb-2">
                            Developer Dashboard
                        </h1>
                        <p className="text-[var(--color-darkmuted)] mb-8">
                            Integrate virtual try-on into your app with our API
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <p className="text-sm text-[var(--color-darkmuted)]">API Keys</p>
                                <p className="text-2xl font-bold text-[var(--color-charcoal)]">{apiKeys.length}</p>
                                <p className="text-xs text-[var(--color-muted)]">Active keys</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <p className="text-sm text-[var(--color-darkmuted)]">API Calls</p>
                                <p className="text-2xl font-bold text-[var(--color-charcoal)]">{usage.total_calls}</p>
                                <p className="text-xs text-[var(--color-muted)]">of {usage.limit} limit</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <p className="text-sm text-[var(--color-darkmuted)]">Plan</p>
                                <p className="text-2xl font-bold text-[var(--color-charcoal)] capitalize">{usage.plan}</p>
                                <p className="text-xs text-[var(--color-muted)]">{usage.limit.toLocaleString()} calls/month</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <p className="text-sm text-[var(--color-darkmuted)]">Remaining</p>
                                <p className="text-2xl font-bold text-[var(--color-charcoal)]">{usage.limit - usage.total_calls}</p>
                                <p className="text-xs text-[var(--color-muted)]">Credits left</p>
                            </div>
                        </div>

                        {/* Quick Start */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <h2 className="text-lg font-bold text-[var(--color-charcoal)] mb-4">Quick Start</h2>
                            <div className="space-y-3">
                                {[
                                    { step: '1', title: 'Create an API Key', done: apiKeys.length > 0 },
                                    { step: '2', title: 'Make your first API call', done: usage.total_calls > 0 },
                                    { step: '3', title: 'Integrate into your app', done: false },
                                ].map((item) => (
                                    <div key={item.step} className={`flex items-center gap-3 p-3 rounded-xl ${item.done ? 'bg-green-50' : 'bg-gray-50'}`}>
                                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${item.done ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                            {item.done ? '✓' : item.step}
                                        </span>
                                        <span className={item.done ? 'text-green-700' : 'text-[var(--color-charcoal)]'}>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* API KEYS TAB */}
                {activeTab === 'api' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-display font-bold text-[var(--color-charcoal)]">API Keys</h1>
                                <p className="text-[var(--color-darkmuted)]">Manage your API keys</p>
                            </div>
                            {!showNameInput && (
                                <button
                                    onClick={() => setShowNameInput(true)}
                                    className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] text-white rounded-xl font-semibold text-sm"
                                >
                                    + Create Key
                                </button>
                            )}
                        </div>

                        {/* Create Key Input */}
                        {showNameInput && (
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                                <h3 className="font-semibold text-[var(--color-charcoal)] mb-4">Create New API Key</h3>
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        placeholder="Key name (e.g., Production, Testing)"
                                        value={newKeyName}
                                        onChange={(e) => setNewKeyName(e.target.value)}
                                        className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-primary-purple)]"
                                    />
                                    <button
                                        onClick={createApiKey}
                                        disabled={isCreatingKey || !newKeyName.trim()}
                                        className="px-6 py-3 bg-[var(--color-primary-purple)] text-white rounded-xl font-semibold disabled:opacity-50"
                                    >
                                        {isCreatingKey ? 'Creating...' : 'Create'}
                                    </button>
                                    <button
                                        onClick={() => { setShowNameInput(false); setNewKeyName(''); }}
                                        className="px-4 py-3 text-gray-500 hover:text-gray-700"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Keys List */}
                        {apiKeys.length === 0 ? (
                            <div className="bg-white rounded-2xl p-12 border border-gray-100 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">No API Keys</h3>
                                <p className="text-[var(--color-muted)] mb-4">Create your first API key to get started</p>
                                <button
                                    onClick={() => setShowNameInput(true)}
                                    className="px-6 py-3 bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] text-white rounded-xl font-semibold"
                                >
                                    + Create API Key
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {apiKeys.map((keyObj) => (
                                    <div key={keyObj.id} className="bg-white rounded-2xl p-6 border border-gray-100">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                                    <span className="text-green-600">🔑</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-[var(--color-charcoal)]">{keyObj.name}</p>
                                                    <p className="text-xs text-[var(--color-muted)]">Created {keyObj.created_at}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => deleteKey(keyObj.id)}
                                                className="text-red-500 hover:text-red-700 text-sm"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                                            <code className="flex-1 font-mono text-sm text-gray-600 truncate">{keyObj.key || keyObj.key_preview}</code>
                                            {keyObj.key ? (
                                                <button
                                                    onClick={() => copyApiKey(keyObj.key!)}
                                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${copiedKeyId === keyObj.key ? 'bg-green-500 text-white' : 'bg-white border border-gray-200 text-gray-600'
                                                        }`}
                                                >
                                                    {copiedKeyId === keyObj.key ? '✓ Copied' : 'Copy'}
                                                </button>
                                            ) : (
                                                <span className="text-xs text-[var(--color-muted)] bg-gray-200 px-2 py-1 rounded">
                                                    Key hidden
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}

                {/* USAGE TAB */}
                {activeTab === 'usage' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h1 className="text-3xl font-display font-bold text-[var(--color-charcoal)] mb-2">Usage</h1>
                        <p className="text-[var(--color-darkmuted)] mb-8">Monitor your API usage</p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                                <h3 className="text-sm text-[var(--color-darkmuted)] mb-2">API Calls This Month</h3>
                                <div className="flex items-end gap-2 mb-4">
                                    <span className="text-4xl font-bold text-[var(--color-charcoal)]">{usage.total_calls}</span>
                                    <span className="text-[var(--color-muted)] mb-1">/ {usage.limit}</span>
                                </div>
                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] rounded-full"
                                        style={{ width: `${Math.max((usage.total_calls / usage.limit) * 100, 2)}%` }}
                                    />
                                </div>
                                <p className="text-xs text-[var(--color-muted)] mt-2">{usage.limit - usage.total_calls} calls remaining</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                                <h3 className="text-sm text-[var(--color-darkmuted)] mb-2">Current Plan</h3>
                                <p className="text-2xl font-bold text-[var(--color-charcoal)] mb-2 capitalize">{usage.plan} Tier</p>
                                <p className="text-sm text-[var(--color-muted)] mb-4">{usage.limit.toLocaleString()} API calls per month</p>
                                <Link href="/pricing" className="text-sm text-[var(--color-primary-purple)] hover:underline">
                                    Upgrade for more →
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-[var(--color-charcoal)] mb-4">Recent API Calls</h3>
                            {activityLog.length === 0 ? (
                                <div className="text-center py-8 text-[var(--color-muted)]">
                                    <p>No API calls yet</p>
                                    <p className="text-sm mt-1">Make your first call to see activity here</p>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {activityLog.map((log) => (
                                        <div key={log.id} className={`flex items-center justify-between p-3 rounded-lg ${log.success ? 'bg-green-50' : 'bg-red-50'}`}>
                                            <div className="flex items-center gap-3">
                                                <span className={`w-2 h-2 rounded-full ${log.success ? 'bg-green-500' : 'bg-red-500'}`} />
                                                <div>
                                                    <p className="text-sm font-medium text-[var(--color-charcoal)]">{log.endpoint}</p>
                                                    <p className="text-xs text-[var(--color-muted)]">
                                                        {log.platform} • {log.processing_time_ms}ms • {new Date(log.created_at).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className={`text-xs font-medium px-2 py-1 rounded ${log.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                {log.success ? 'Success' : 'Failed'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </main>
        </div>
    );
}

