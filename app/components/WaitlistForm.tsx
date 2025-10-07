'use client';

import { useState, FormEvent } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Thanks for joining the waitlist!');
        setEmail('');
        setName('');
      } else {
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 items-center">
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-2 rounded border border-[var(--color-muted)] bg-[var(--color-surface)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      />
      <input
        type="text"
        placeholder="Name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 rounded border border-[var(--color-muted)] bg-[var(--color-surface)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      />
      <button
        type="submit"
        disabled={loading}
        className="relative px-6 py-3 rounded bg-[var(--color-accent)] text-[var(--color-surface)] font-semibold hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] disabled:opacity-50 overflow-hidden group/button"
      >
        <span className="group-hover/button:translate-x-24 text-center transition duration-500 inline-block">
          {loading ? 'Joining...' : 'Join Waitlist'}
        </span>
        <div className="-translate-x-24 group-hover/button:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-[var(--color-surface)] z-20">
          <PlusIcon className="h-5 w-5" />
        </div>
      </button>
      {message && <p className="text-center text-[var(--color-foreground)]">{message}</p>}
    </form>
  );
}

const PlusIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
};
