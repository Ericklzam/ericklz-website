import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import type { Request, Response } from "express";
import { Resend } from "resend";

const RESEND_API_KEY = defineSecret("RESEND_API_KEY");
const CONTACT_RECEIVER_EMAIL = defineSecret("CONTACT_RECEIVER_EMAIL");

// Allow requests only from your site (add localhost for dev)
const allowedOrigins = [
  "https://ericklz.com",
  "http://localhost:3000",
];

export const sendEmail = onRequest(
  {
    region: "us-central1",
    cors: allowedOrigins, // built-in CORS in Functions v2
    secrets: [RESEND_API_KEY, CONTACT_RECEIVER_EMAIL],
  },
  async (req: Request, res: Response) => {
    if (req.method !== "POST") {
      res.status(405).json({ message: "Method not allowed" });
      return;
    }

    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !subject || !message) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    try {
      const resend = new Resend(RESEND_API_KEY.value());
      const to = CONTACT_RECEIVER_EMAIL.value();

      const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to,
        subject: `Contact Form: ${subject}`,
        replyTo: email,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email", error });
        return;
      }

      res.status(200).json({ message: "Email sent successfully", id: data?.id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);
