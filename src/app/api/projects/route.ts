import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { projects as fallback } from "@/lib/data";

const dataDir = path.join(process.cwd(), "src", "data");
const filePath = path.join(dataDir, "projects.json");

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
    
    let projects = [];
    try {
      const data = await fs.readFile(filePath, "utf8");
      projects = JSON.parse(data);
    } catch (e) {
      // File doesn't exist, start with empty array
      projects = [];
    }
    
    const newProject = {
      id: Date.now().toString(),
      order: projects.length,
      featured: false,
      ...body,
      createdAt: new Date().toISOString(),
    };
    
    projects.push(newProject);
    await fs.writeFile(filePath, JSON.stringify(projects, null, 2));
    
    return NextResponse.json(newProject);
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}