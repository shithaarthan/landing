/**
 * Pricing Configuration
 * 
 * Change this file to update pricing across the app.
 * After changes, redeploy the backend with: npm run deploy
 */

// Plan types
export type PlanId = 'free' | 'starter' | 'essentials' | 'pro' | 'enterprise';

export interface PricingPlan {
    id: PlanId;
    name: string;
    price: number;           // Monthly price in USD
    yearlyPrice?: number;    // Yearly price (usually discounted)
    apiCalls: number;        // Monthly API call limit (-1 for unlimited)
    features: string[];
    limitations: string[];
    popular: boolean;
    cta: string;
    gradient: string;
}

/**
 * PRICING TIERS - Edit here to change pricing
 * 
 * To update pricing:
 * 1. Change the values below
 * 2. Update backend/src/routes/virtualTryOn.ts limits
 * 3. Update backend/src/routes/outfitSuggestion.ts limits
 * 4. Redeploy: cd backend && npm run deploy
 */
export const PRICING_PLANS: PricingPlan[] = [
    {
        id: 'free',
        name: 'Free',
        price: 0,
        apiCalls: 100,        // 100 free API calls/month
        features: [
            '100 try-ons per month',
            'Basic AI suggestions',
            'Standard support',
            'Mobile app access',
        ],
        limitations: [
            'Limited try-ons',
            'Basic features only',
        ],
        popular: false,
        cta: 'Start Free',
        gradient: 'from-gray-500 to-gray-600',
    },
    {
        id: 'starter',
        name: 'Starter',
        price: 9,
        yearlyPrice: 90,     // $7.50/mo when paid yearly
        apiCalls: 1000,
        features: [
            '1,000 try-ons per month',
            'HD quality results',
            'Priority support',
            'Style recommendations',
            'Wardrobe sync',
        ],
        limitations: [],
        popular: true,
        cta: 'Start Free Trial',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        id: 'essentials',
        name: 'Essentials',
        price: 29,
        yearlyPrice: 290,    // $24/mo when paid yearly
        apiCalls: 5000,
        features: [
            '5,000 try-ons per month',
            'Advanced AI suggestions',
            'Instant processing',
            'Style analytics',
            'Trend insights',
            'API access',
        ],
        limitations: [],
        popular: false,
        cta: 'Go Essentials',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 99,
        yearlyPrice: 990,    // $82.50/mo when paid yearly
        apiCalls: 50000,
        features: [
            '50,000 try-ons per month',
            'Commercial use rights',
            'Priority support',
            'Full API access',
            'Custom integrations',
            'Advanced analytics',
            'White-label options',
        ],
        limitations: [],
        popular: false,
        cta: 'Go Pro',
        gradient: 'from-indigo-500 to-purple-500',
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: -1,           // Custom pricing
        apiCalls: -1,        // Unlimited
        features: [
            'Unlimited try-ons',
            'Dedicated support',
            'Custom SLA',
            'On-premise options',
            'Custom AI training',
        ],
        limitations: [],
        popular: false,
        cta: 'Contact Sales',
        gradient: 'from-slate-700 to-slate-900',
    },
];

/**
 * Get plan by ID
 */
export function getPlan(id: PlanId): PricingPlan | undefined {
    return PRICING_PLANS.find(p => p.id === id);
}

/**
 * Get API call limit for a plan
 */
export function getPlanLimit(id: PlanId): number {
    const plan = getPlan(id);
    return plan?.apiCalls ?? 100;
}
