import { NextResponse } from 'next/server';
import { detectText } from '@/infrastructure/google/vision';

export async function GET() {
  const data = await detectText('S__21086211.jpg');
  return NextResponse.json({ data });
}
