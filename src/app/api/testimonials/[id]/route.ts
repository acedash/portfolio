import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src", "data");
const filePath = path.join(dataDir, "testimonials.json");

// GET /api/testimonials/[id] - Get a specific testimonial
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Testimonials not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const testimonials = JSON.parse(data);
    const testimonial = testimonials.find((t: any) => t.id === params.id);

    if (!testimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }

    return NextResponse.json(testimonial);
  } catch (error) {
    console.error("Error reading testimonial:", error);
    return NextResponse.json({ error: "Failed to read testimonial" }, { status: 500 });
  }
}

// PUT /api/testimonials/[id] - Update a specific testimonial
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Testimonials not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const testimonials = JSON.parse(data);
    
    const testimonialIndex = testimonials.findIndex((t: any) => t.id === params.id);
    if (testimonialIndex === -1) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }

    // Update the testimonial
    testimonials[testimonialIndex] = { ...testimonials[testimonialIndex], ...body, id: params.id };
    
    fs.writeFileSync(filePath, JSON.stringify(testimonials, null, 2));
    
    return NextResponse.json(testimonials[testimonialIndex]);
  } catch (error) {
    console.error("Error updating testimonial:", error);
    return NextResponse.json({ error: "Failed to update testimonial" }, { status: 500 });
  }
}

// DELETE /api/testimonials/[id] - Delete a specific testimonial
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Testimonials not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const testimonials = JSON.parse(data);
    
    const filteredTestimonials = testimonials.filter((t: any) => t.id !== params.id);
    
    if (filteredTestimonials.length === testimonials.length) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(filteredTestimonials, null, 2));
    
    return NextResponse.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return NextResponse.json({ error: "Failed to delete testimonial" }, { status: 500 });
  }
}
