import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const dir = path.join(process.cwd(), 'public/wpaint-gallery');
  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.jpg'));
  return NextResponse.json({ files });
}
