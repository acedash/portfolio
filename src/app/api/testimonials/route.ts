import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { testimonials as fallback } from "@/lib/data";

const filePath = path.join(process.cwd(), "src", "data", "testimonials.json");

export async function GET() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (e) {
    return NextResponse.json(fallback);
  }
}

export async function POST(request: Request) {
  try {
    // For now, allow all requests - in production, add proper authentication
    const body = await request.json();
    if (!Array.isArray(body)) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(body, null, 2), "utf8");
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to save" }, { status: 500 });
  }
}
