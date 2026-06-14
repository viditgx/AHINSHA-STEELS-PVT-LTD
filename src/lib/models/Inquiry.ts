import mongoose, { Schema, Document, models } from "mongoose";

export interface IInquiry extends Document {
  name: string;
  email?: string;
  phone: string;
  subject?: string;
  product?: string;
  message?: string;
  type: "contact" | "quote" | "product";
  status: "new" | "read" | "replied";
  createdAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    subject: { type: String, trim: true },
    product: { type: String, trim: true },
    message: { type: String, trim: true },
    type: {
      type: String,
      enum: ["contact", "quote", "product"],
      default: "contact",
    },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
  },
  { timestamps: true }
);

// Prevent model re-compilation on hot reload
const Inquiry = models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);
export default Inquiry;
