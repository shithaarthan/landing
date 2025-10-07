import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, name, utm } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  // TODO: validate email format
  if (!email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const timestamp = new Date().toISOString();
  console.log('Waitlist signup:', { email, name, utm, timestamp });

  // TODO: save to DB (Supabase/Mailchimp)
  // Example: await saveToSupabase({ email, name, utm, timestamp });

  return NextResponse.json({ ok: true });
}
