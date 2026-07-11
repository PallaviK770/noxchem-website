import { Link } from "react-router-dom";

function ServicesHero() {
  return (
    <section className="bg-gradient-to-r from-white via-blue-50 to-cyan-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <span className="uppercase tracking-[3px] text-[#43B02A] font-semibold">
          Our Services
        </span>

        <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0A4DA3] mt-4 leading-tight">
          Reliable Support Beyond Products
        </h1>

        <p className="mt-8 text-lg text-gray-700 leading-8 max-w-3xl">
          NOxchem Industries provides more than premium Diesel Exhaust
          Fluid. We deliver technical support, Annual Maintenance
          Contracts (AMC), and dependable after-sales assistance to help
          customers maintain efficient SCR system performance and
          regulatory compliance.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">

          <Link
            to="/contact"
            className="bg-[#0A4DA3] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#083d82] transition"
          >
            Contact Our Team
          </Link>

          <Link
            to="/products"
            className="border-2 border-[#0A4DA3] text-[#0A4DA3] px-8 py-4 rounded-xl font-semibold hover:bg-[#0A4DA3] hover:text-white transition"
          >
            View Products
          </Link>

        </div>

      </div>
    </section>
  );
}

export default ServicesHero;