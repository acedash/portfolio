import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src", "data");
const filePath = path.join(dataDir, "social-links.json");

// GET /api/social-links/[id] - Get a specific social link
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Social links not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const socialLinks = JSON.parse(data);
    const socialLink = socialLinks.find((s: any) => s.id === params.id);

    if (!socialLink) {
      return NextResponse.json({ error: "Social link not found" }, { status: 404 });
    }

    return NextResponse.json(socialLink);
  } catch (error) {
    console.error("Error reading social link:", error);
    return NextResponse.json({ error: "Failed to read social link" }, { status: 500 });
  }
}

// PUT /api/social-links/[id] - Update a specific social link
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Social links not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const socialLinks = JSON.parse(data);
    
    const socialLinkIndex = socialLinks.findIndex((s: any) => s.id === params.id);
    if (socialLinkIndex === -1) {
      return NextResponse.json({ error: "Social link not found" }, { status: 404 });
    }

    // Update the social link
    socialLinks[socialLinkIndex] = { ...socialLinks[socialLinkIndex], ...body, id: params.id };
    
    fs.writeFileSync(filePath, JSON.stringify(socialLinks, null, 2));
    
    return NextResponse.json(socialLinks[socialLinkIndex]);
  } catch (error) {
    console.error("Error updating social link:", error);
    return NextResponse.json({ error: "Failed to update social link" }, { status: 500 });
  }
}

// DELETE /api/social-links/[id] - Delete a specific social link
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Social links not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const socialLinks = JSON.parse(data);
    
    const filteredSocialLinks = socialLinks.filter((s: any) => s.id !== params.id);
    
    if (filteredSocialLinks.length === socialLinks.length) {
      return NextResponse.json({ error: "Social link not found" }, { status: 404 });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(filteredSocialLinks, null, 2));
    
    return NextResponse.json({ message: "Social link deleted successfully" });
  } catch (error) {
    console.error("Error deleting social link:", error);
    return NextResponse.json({ error: "Failed to delete social link" }, { status: 500 });
  }
}
