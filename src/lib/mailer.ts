import nodemailer from "nodemailer";

export function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

interface InquiryData {
  name: string;
  phone: string;
  email?: string;
  product?: string;
  subject?: string;
  message?: string;
  type: string;
}

export async function sendInquiryNotification(data: InquiryData) {
  // Skip if email not configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) return;

  const transporter = createTransporter();

  const typeLabel =
    data.type === "quote"
      ? "Quote Request"
      : data.type === "product"
      ? "Product Inquiry"
      : "Contact Form";

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px; border-radius: 12px;">
      <div style="background: #1e3a5f; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0; font-size: 20px;">🔔 New ${typeLabel}</h2>
        <p style="margin: 4px 0 0; opacity: 0.8; font-size: 13px;">Ahinsha Steels Pvt. Ltd. — Website</p>
      </div>
      <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1e3a5f; width: 130px;">Name</td>
            <td style="padding: 8px 0; color: #334155;">${data.name}</td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 8px 0; font-weight: bold; color: #1e3a5f;">Phone</td>
            <td style="padding: 8px 0; color: #334155;"><a href="tel:${data.phone}" style="color: #f97316;">${data.phone}</a></td>
          </tr>
          ${data.email ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #1e3a5f;">Email</td><td style="padding: 8px 0; color: #334155;">${data.email}</td></tr>` : ""}
          ${data.product ? `<tr style="background: #f8fafc;"><td style="padding: 8px 0; font-weight: bold; color: #1e3a5f;">Product</td><td style="padding: 8px 0; color: #334155;">${data.product}</td></tr>` : ""}
          ${data.subject ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #1e3a5f;">Subject</td><td style="padding: 8px 0; color: #334155;">${data.subject}</td></tr>` : ""}
          ${data.message ? `<tr style="background: #f8fafc;"><td style="padding: 8px 0; font-weight: bold; color: #1e3a5f; vertical-align: top;">Message</td><td style="padding: 8px 0; color: #334155;">${data.message}</td></tr>` : ""}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1e3a5f;">Received</td>
            <td style="padding: 8px 0; color: #334155;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 12px; background: #fff7ed; border-left: 4px solid #f97316; border-radius: 4px;">
          <p style="margin: 0; font-size: 13px; color: #92400e;">⚡ Reply quickly! Login to your <a href="${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/admin" style="color: #f97316;">Admin Dashboard</a> to manage inquiries.</p>
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Ahinsha Steels Website" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
    subject: `🔔 New ${typeLabel} from ${data.name} — Ahinsha Steels`,
    html,
  });
}
