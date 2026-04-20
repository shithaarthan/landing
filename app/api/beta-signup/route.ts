import { NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'beta-signups.json');

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

async function getSignups(): Promise<{ email: string; timestamp: string }[]> {
  await ensureDataDir();
  try {
    const data = await readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSignups(signups: { email: string; timestamp: string }[]) {
  await ensureDataDir();
  await writeFile(DATA_FILE, JSON.stringify(signups, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, timestamp } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const signups = await getSignups();

    if (signups.some(s => s.email === email)) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist!' },
        { status: 409 }
      );
    }

    signups.push({ email, timestamp: timestamp || new Date().toISOString() });
    await saveSignups(signups);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Beta signup error:', error);
    return NextResponse.json(
      { error: 'Failed to save signup' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const signups = await getSignups();
    return NextResponse.json({ signups });
  } catch {
    return NextResponse.json({ signups: [] });
  }
}