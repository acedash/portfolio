import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { testimonials as fallback } from "@/lib/data";

const dataDir = path.join(process.cwd(), "src", "data");
const filePath = path.join(dataDir, "testimonials.json");

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
    
    let testimonials = [];
    try {
      const data = await fs.readFile(filePath, "utf8");
      testimonials = JSON.parse(data);
    } catch (e) {
      // File doesn't exist, start with empty array
      testimonials = [];
    }
    
    const newTestimonial = {
      id: Date.now().toString(),
      order: testimonials.length,
      featured: false,
      rating: 5,
      ...body,
      createdAt: new Date().toISOString(),
    };
    
    testimonials.push(newTestimonial);
    await fs.writeFile(filePath, JSON.stringify(testimonials, null, 2));
    
    return NextResponse.json(newTestimonial);
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}