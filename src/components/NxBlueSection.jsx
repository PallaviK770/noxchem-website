import { FaCheck } from "react-icons/fa";
import bucketImage from "../assets/images/bucket.jpeg";

export default function NxBlueSection() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <div className="flex justify-center">

          <img
            src={bucketImage}
            alt="bucket"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />

        </div>

        {/* Content */}

        <div>

          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#0A4DA3]">
            About NxBlue
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0A4DA3]">
            High Purity Diesel Exhaust Fluid
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            NxBlue is a premium Diesel Exhaust Fluid (DEF / AUS32)
            manufactured according to ISO 22241 standards. It helps
            reduce harmful NOx emissions while improving SCR system
            efficiency and engine performance.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            {[
              "ISO 22241 Certified",
              "High Purity Formula",
              "SCR Safe",
              "Reduces NOx Emissions",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 shadow"
              >

                <FaCheck className="text-[#0A4DA3]" />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}