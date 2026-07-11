import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="bg-[#F8FAFC] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A4DA3]">
            Mission & Vision
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0A4DA3]">
            Driving Innovation with Purpose
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Our mission and vision define who we are, guide our decisions,
            and inspire us to deliver excellence in every DEF solution we provide.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Mission */}

          <div className="rounded-3xl bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:-translate-y-2
hover:shadow-2xl
transition-all
duration-300">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">

              <FaBullseye
                size={30}
                className="text-[#0A4DA3]"
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#0A4DA3]">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              To deliver high-quality DEF (Diesel Exhaust Fluid) through innovation,
              advanced technology, and exceptional customer service while
              maintaining the highest standards of quality, safety,
              and sustainability.
            </p>

          </div>

          {/* Vision */}

          <div className="rounded-3xl bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:-translate-y-2
hover:shadow-2xl
transition-all
duration-300">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">

              <FaEye
                size={30}
                className="text-[#0A4DA3]"
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#0A4DA3]">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              To become a globally recognized leader in the chemical industry
              by continuously developing innovative, sustainable, and reliable
              DEF solutions that create lasting value for our customers and society.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}