import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // Simple password check - in production, use proper authentication
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
    
    if (password !== adminPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }
    
    // For now, just return success without setting cookies
    // In production, implement proper session management
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
