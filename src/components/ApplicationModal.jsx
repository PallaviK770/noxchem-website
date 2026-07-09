import { useState } from "react";

export default function ApplicationModal({
  show,
  job,
  closeModal,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    qualification: "",
    experience: "",
    skills: "",
    about: "",
    resume: null,
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!show) return null;

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  }

  function handleSubmit(e) {
  e.preventDefault();

  setSubmitted(true);
}

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">

        <button type="button"
        onClick={() => {
        setSubmitted(false);
        closeModal();
        }}
          className="absolute right-6 top-5 text-4xl text-gray-400 transition hover:text-red-500">
          &times;
        </button>

        <div className="border-b border-gray-200 px-10 py-8">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A4DA3]">
            Careers
          </p>

          <h2 className="mt-2 text-4xl font-bold text-[#0A4DA3]">
            Apply for {job}
          </h2>

          <p className="mt-3 text-gray-500">
            Complete the application form below. Our HR team will review your application and contact shortlisted candidates.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 p-10"
        >

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Position */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Position
              </label>

              <input
                type="text"
                value={job}
                readOnly
                className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3"
              />
            </div>

            {/* Full Name */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Mobile */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* City */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your City"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Qualification */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Highest Qualification
              </label>

              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select Qualification</option>
                <option>Diploma</option>
                <option>B.Sc</option>
                <option>B.Tech</option>
                <option>B.E</option>
                <option>M.Sc</option>
                <option>M.Tech</option>
                <option>MBA</option>
                <option>Ph.D</option>
                <option>Other</option>
              </select>
            </div>

            {/* Experience */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Experience (Years)
              </label>

              <input
                type="number"
                min="0"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="0"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Resume */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Upload Resume
              </label>

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="block w-full rounded-xl border border-gray-300 file:mr-4 file:border-0 file:bg-[#0A4DA3] file:px-5 file:py-3 file:font-semibold file:text-white hover:file:bg-blue-700"
              />
            </div>

          </div>

          {/* Technical Skills */}

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Technical Skills
            </label>

            <textarea
              rows={4}
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="React, SAP ABAP, AutoCAD, Excel..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Why Join */}

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Why do you want to join NOxchem?
            </label>

            <textarea
              rows={5}
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-[#0A4DA3] focus:ring-4 focus:ring-blue-100"
            />
          </div>
                    {/* Declaration */}

          <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">

            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              className="mt-1 h-5 w-5 accent-[#0A4DA3]"
            />

            <p className="text-sm text-gray-600">
              I certify that the information provided above is true and complete
              to the best of my knowledge.
            </p>

          </div>

          {/* Buttons */}

          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={closeModal}
              className="rounded-xl border border-gray-300 px-8 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#0A4DA3] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Submit Application
            </button>

          </div>

        </form>

      </div>
      {submitted && (
  <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 backdrop-blur-sm">

    <div className="w-[430px] rounded-3xl bg-white p-10 text-center shadow-2xl">

      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

        <svg
          className="h-10 w-10 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>

      </div>

      <h3 className="text-3xl font-bold text-[#0A4DA3]">
        Application Submitted!
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        Thank you for applying for
        <span className="font-semibold text-[#0A4DA3]">
          {" "}
          {job}
        </span>.
        <br />
        Our HR team will review your application and contact you if you're shortlisted.
      </p>

      <button
        onClick={() => {
          setSubmitted(false);
          closeModal();
        }}
        className="mt-8 rounded-xl bg-[#0A4DA3] px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
      >
        Done
      </button>

    </div>

  </div>
)}

    </div>

  );
}