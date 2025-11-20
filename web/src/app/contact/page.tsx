"use client";

import { MdMessage } from "react-icons/md";
import { useState } from "react";
import Notification from "@/components/Notification";
import { Pattern } from "../../../public/Pattern";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ email?: string }>({});
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
      setErrors({ email: emailValid ? "" : "Invalid email address" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://us-central1-ericklzweb.cloudfunctions.net/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setNotification({ message: "✅ E-mail sent successfully!", type: "success" });
        setForm({ name: "", email: "", subject: "", message: "" }); // clear form
      } else {
        setNotification({
          message: "❌ Failed to send message: " + (data.message || "Unknown error"),
          type: "error",
        });
      }
    } catch (error) {
      console.error(error);
      setNotification({
        message: "❌ Network error — please try again later.",
        type: "error",
      });
    }
  };



  return (
    <section className="bg-[#0E0E0E] py-12 flex justify-center">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 p-6 lg:p-12 rounded-3xl mt-20">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div className="flex items-center gap-3 text-white text-3xl font-bold">
            <MdMessage className="text-[#5B2333]" />
            <span>Let&apos;s Talk</span>
          </div>
          <p className="text-gray-400 text-lg">I&apos;ll contact you within 24hrs</p>
          <div className="w-40 md:w-50 flex-shrink-0">
            <Pattern/>
          </div>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-[#333333] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B2333]"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-[#333333] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B2333]"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-[#333333] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B2333]"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="bg-[#333333] rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B2333]"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-[#5B2333] hover:bg-[#492932] text-white rounded-lg p-4 font-bold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
