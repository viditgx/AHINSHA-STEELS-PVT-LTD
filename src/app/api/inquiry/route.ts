import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/lib/models/Inquiry";
import { sendInquiryNotification } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, product, message, type } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const inquiry = await Inquiry.create({
      name: name.trim(),
      email: email?.trim() || undefined,
      phone: phone.trim(),
      subject: subject?.trim() || undefined,
      product: product?.trim() || undefined,
      message: message?.trim() || undefined,
      type: type || "contact",
      status: "new",
    });

    // Send email notification (non-blocking — don't fail if email fails)
    sendInquiryNotification({ name, phone, email, product, subject, message, type }).catch(
      (err) => console.error("Email notification failed:", err)
    );

    return NextResponse.json(
      { success: true, id: inquiry._id.toString() },
      { status: 201 }
    );
  } catch (error) {
    console.error("Inquiry API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
