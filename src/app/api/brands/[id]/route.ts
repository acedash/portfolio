import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src", "data");
const filePath = path.join(dataDir, "brands.json");

// GET /api/brands/[id] - Get a specific brand
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Brands not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const brands = JSON.parse(data);
    const brand = brands.find((b: any) => b.id === params.id);

    if (!brand) {
      return NextResponse.json({ error: "Brand not found" }, { status: 404 });
    }

    return NextResponse.json(brand);
  } catch (error) {
    console.error("Error reading brand:", error);
    return NextResponse.json({ error: "Failed to read brand" }, { status: 500 });
  }
}

// PUT /api/brands/[id] - Update a specific brand
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Brands not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const brands = JSON.parse(data);
    
    const brandIndex = brands.findIndex((b: any) => b.id === params.id);
    if (brandIndex === -1) {
      return NextResponse.json({ error: "Brand not found" }, { status: 404 });
    }

    // Update the brand
    brands[brandIndex] = { ...brands[brandIndex], ...body, id: params.id };
    
    fs.writeFileSync(filePath, JSON.stringify(brands, null, 2));
    
    return NextResponse.json(brands[brandIndex]);
  } catch (error) {
    console.error("Error updating brand:", error);
    return NextResponse.json({ error: "Failed to update brand" }, { status: 500 });
  }
}

// DELETE /api/brands/[id] - Delete a specific brand
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Brands not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const brands = JSON.parse(data);
    
    const filteredBrands = brands.filter((b: any) => b.id !== params.id);
    
    if (filteredBrands.length === brands.length) {
      return NextResponse.json({ error: "Brand not found" }, { status: 404 });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(filteredBrands, null, 2));
    
    return NextResponse.json({ message: "Brand deleted successfully" });
  } catch (error) {
    console.error("Error deleting brand:", error);
    return NextResponse.json({ error: "Failed to delete brand" }, { status: 500 });
  }
}
