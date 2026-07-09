export default function ContactForm() {
  return (
    <div id="contact-form" className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-3xl font-bold text-[#0A4DA3]">
        Send Us a Message
      </h2>

      <p className="mt-2 text-gray-500">
        Fill in the form below and our team will get back to you shortly.
      </p>

      <form className="mt-8 space-y-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="jay agrawal"
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
            placeholder="Write your message..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none transition focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#0A4DA3] py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}