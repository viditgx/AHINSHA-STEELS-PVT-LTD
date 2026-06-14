import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/lib/models/Inquiry";

// Simple password-based auth via header
function isAuthorized(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  return password === process.env.ADMIN_PASSWORD;
}

// GET — fetch all inquiries
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const type = searchParams.get("type");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "50");

  const filter: Record<string, string> = {};
  if (status) filter.status = status;
  if (type) filter.type = type;

  const total = await Inquiry.countDocuments(filter);
  const inquiries = await Inquiry.find(filter)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  return NextResponse.json({ success: true, total, page, inquiries });
}

// PATCH — update inquiry status
export async function PATCH(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { id, status } = body;

  if (!id || !status) {
    return NextResponse.json({ error: "id and status required" }, { status: 400 });
  }

  await connectDB();
  const updated = await Inquiry.findByIdAndUpdate(id, { status }, { new: true });

  return NextResponse.json({ success: true, inquiry: updated });
}

// DELETE — delete an inquiry
export async function DELETE(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { id } = body;

  await connectDB();
  await Inquiry.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}
