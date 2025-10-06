import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src", "data");
const filePath = path.join(dataDir, "projects.json");

// GET /api/projects/[id] - Get a specific project
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Projects not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const projects = JSON.parse(data);
    const project = projects.find((p: any) => p.id === params.id);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error reading project:", error);
    return NextResponse.json({ error: "Failed to read project" }, { status: 500 });
  }
}

// PUT /api/projects/[id] - Update a specific project
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Projects not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const projects = JSON.parse(data);
    
    const projectIndex = projects.findIndex((p: any) => p.id === params.id);
    if (projectIndex === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Update the project
    projects[projectIndex] = { ...projects[projectIndex], ...body, id: params.id };
    
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
    
    return NextResponse.json(projects[projectIndex]);
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

// DELETE /api/projects/[id] - Delete a specific project
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Projects not found" }, { status: 404 });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const projects = JSON.parse(data);
    
    const filteredProjects = projects.filter((p: any) => p.id !== params.id);
    
    if (filteredProjects.length === projects.length) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(filteredProjects, null, 2));
    
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
