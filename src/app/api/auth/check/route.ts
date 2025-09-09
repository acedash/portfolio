import { NextResponse } from "next/server";

export async function GET() {
  try {
    // For now, always return false to force login
    // In production, implement proper session management
    return NextResponse.json({ authenticated: false });
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.json({ authenticated: false });
  }
}
