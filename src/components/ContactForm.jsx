import emailjs from "@emailjs/browser";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const { error } = await supabase
    .from("contact_messages")
    .insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      },
    ]);

  setLoading(false);

  if (error) {
    alert("Something went wrong.");
    console.error(error);
  } else {

  await emailjs.send(
    "service_u4sia7u",
    "template_6r849ms",
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      subject: formData.subject,
      message: formData.message,
    },
    "r-WMPwGDXU-mSd9XG"
  );

  alert("Message sent successfully!");

  setFormData({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

}
};
  return (
    <div id="contact-form" className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-3xl font-bold text-[#0A4DA3]">
        Send Us a Message
      </h2>

      <p className="mt-2 text-gray-500">
        Fill in the form below and our team will get back to you shortly.
      </p>

      <form className="mt-8 space-y-6"
      onSubmit={handleSubmit}>
        

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Full Name
            </label>

            <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Jay Agrawal"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
  required
/>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Email Address
            </label>

            <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="jay@email.com"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
  required
/>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Phone Number
            </label>

            <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="+91 XXXXX XXXXX"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
  required
/>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Company Name
            </label>

            <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="ABC Pvt. Ltd."
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
/>
          </div>

        </div>

        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            Subject
          </label>

         <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Request for Product Quotation"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
  required
/>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-gray-700">
            Message
          </label>

          <textarea
  rows={6}
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Write your message..."
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none transition focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
/>
        </div>

        <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-[#0A4DA3] py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
>
  {loading ? "Sending..." : "Send Message"}
</button>

      </form>

    </div>
  );
}