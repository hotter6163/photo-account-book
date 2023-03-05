import { NextResponse } from 'next/server';
import { detectText } from '@/domain/services/aws/rekognition';

export async function GET() {
  const res = await detectText();
  const data = JSON.stringify(res.TextDetections);

  return NextResponse.json({ data });
}
