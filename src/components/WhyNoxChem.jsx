import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import whyImage from "../assets/images/why-noxchem.png";

const features = [
  {
    title: "Premium Quality",
    description:
      "Manufactured with a strong focus on consistency, purity, and dependable performance.",
  },
  {
    title: "Customer-Centric",
    description:
      "We understand customer requirements and provide practical chemical solutions.",
  },
  {
    title: "Sustainable Approach",
    description:
      "Supporting responsible manufacturing with consideration for the environment.",
  },
  {
    title: "Reliable Partnership",
    description:
      "Building long-term relationships through trust, transparency, and service.",
  },
];

export default function WhyNoxChem() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side Image */}

        <div className="flex justify-center">

          <img
            src={whyImage}
            alt="NOx Chem Industries"
            className="w-full max-w-lg rounded-3xl shadow-2xl scale-120"
          />

        </div>

        {/* Right Side */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A4DA3]">
            Why NOxchem?
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0A4DA3]">
            Delivering Solutions Built on Quality & Trust
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At NOxchem Industries, we are committed to delivering dependable
             DEF (Diesel Exhaust Fluid) while focusing on quality, innovation, and
            long-term customer relationships.
          </p>

          <div className="mt-10 space-y-6">

            {features.map((item, index) => (

              <div key={index} className="flex gap-4">

                <FaCheckCircle className="mt-1 text-xl text-[#0A4DA3]" />

                <div>

                  <h3 className="font-semibold text-xl text-[#0A4DA3]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}