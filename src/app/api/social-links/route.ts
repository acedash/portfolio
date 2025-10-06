import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { socialLinks as fallback } from "@/lib/data";

const dataDir = path.join(process.cwd(), "src", "data");
const filePath = path.join(dataDir, "social-links.json");

export async function GET() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (e) {
    return NextResponse.json(fallback);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });
    
    let socialLinks = [];
    try {
      const data = await fs.readFile(filePath, "utf8");
      socialLinks = JSON.parse(data);
    } catch (e) {
      // File doesn't exist, start with empty array
      socialLinks = [];
    }
    
    const newSocialLink = {
      id: Date.now().toString(),
      order: socialLinks.length,
      ...body,
      createdAt: new Date().toISOString(),
    };
    
    socialLinks.push(newSocialLink);
    await fs.writeFile(filePath, JSON.stringify(socialLinks, null, 2));
    
    return NextResponse.json(newSocialLink);
  } catch (error) {
    console.error("Error creating social link:", error);
    return NextResponse.json({ error: "Failed to create social link" }, { status: 500 });
  }
}