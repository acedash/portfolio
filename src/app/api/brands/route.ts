import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src", "data");
const filePath = path.join(dataDir, "brands.json");

export async function GET() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (e) {
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });
    
    let brands = [];
    try {
      const data = await fs.readFile(filePath, "utf8");
      brands = JSON.parse(data);
    } catch (e) {
      // File doesn't exist, start with empty array
      brands = [];
    }
    
    const newBrand = {
      id: Date.now().toString(),
      order: brands.length,
      featured: false,
      ...body,
      createdAt: new Date().toISOString(),
    };
    
    brands.push(newBrand);
    await fs.writeFile(filePath, JSON.stringify(brands, null, 2));
    
    return NextResponse.json(newBrand);
  } catch (error) {
    console.error("Error creating brand:", error);
    return NextResponse.json({ error: "Failed to create brand" }, { status: 500 });
  }
}