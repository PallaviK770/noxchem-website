import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";

function AMCSection() {
  return (
    <section className="bg-[#0A4DA3] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="uppercase tracking-[3px] text-[#43B02A] font-semibold">
              Annual Maintenance Contract
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
              Keep Your SCR Systems Running Efficiently
            </h2>

            <p className="mt-8 text-blue-100 text-lg leading-8">
              Our Annual Maintenance Contract (AMC) services are designed
              to provide customers with reliable technical support,
              scheduled inspections, maintenance guidance, and prompt
              assistance whenever required. We help ensure uninterrupted
              SCR system performance while maximizing operational
              efficiency.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-10 bg-white text-[#0A4DA3] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Request AMC
            </Link>

          </div>

          {/* Right Side */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">

            <div className="text-[#0A4DA3] mb-6">
              <FaTools size={55} />
            </div>

            <h3 className="text-2xl font-bold text-[#0A4DA3] mb-6">
              What's Included?
            </h3>

            <ul className="space-y-5 text-gray-700 leading-7">

              <li>✔ Scheduled maintenance support</li>

              <li>✔ Technical guidance for SCR systems</li>

              <li>✔ Product usage recommendations</li>

              <li>✔ Storage and handling assistance</li>

              <li>✔ Customer support whenever required</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AMCSection;