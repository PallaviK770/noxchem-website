import truck from "../assets/images/truck.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-white via-blue-50 to-cyan-100">

      <div className="max-w-7xl mx-auto px-8 py-12 grid lg:grid-cols-[1.15fr_0.85fr] items-start gap-12">
        {/* Left */}

        <div className="flex flex-col gap-8 pt-1">

  <span className="text-[#43B02A] font-semibold uppercase tracking-[2px] text-sm">
    Premium Diesel Exhaust Fluid
  </span>

  <h1 className="text-7xl font-extrabold mt-4 text-[#0A4DA3] leading-none">
    NxBlue
  </h1>

  <p className="mt-2 text-xl text-gray-700 leading-8 max-w-2xl">
    High-purity AUS 32 Diesel Exhaust Fluid manufactured to support
    SCR-equipped diesel engines with reduced NOx emissions,
    improved efficiency, and dependable performance.
  </p>

  {/* Buttons */}

<div className="flex gap-6 mt-10">

<Link
  to="/products"
  className="rounded-xl bg-[#0A4DA3] px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
>
  Explore Products
</Link>

  <a
  href="/brochures/NxBlue-Brochure.pdf"
  download
  className="rounded-xl border-2 border-[#0A4DA3] px-8 py-4 font-semibold text-[#0A4DA3] transition hover:bg-[#0A4DA3] hover:text-white"
>
  Download Brochure
</a>

</div>

  {/* Cards */}

  <div className="grid grid-cols-3 gap-4 mt-1 my-1">

    <div className="bg-white shadow-lg rounded-xl py-4 text-center">
      <h3 className="text-[#0A4DA3] font-bold">
        ISO 22241
      </h3>
    </div>

    <div className="bg-white shadow-lg rounded-xl py-4 text-center">
      <h3 className="text-[#0A4DA3] font-bold">
        High Purity
      </h3>
    </div>

    <div className="bg-white shadow-lg rounded-xl py-4 text-center">
      <h3 className="text-[#0A4DA3] font-bold">
        SCR Safe
      </h3>
    </div>

  </div>

</div>

        {/* Right */}

        <div className="flex justify-right scale-120 translate-x-14 translate-y-18">

          <img
            src={truck}
            alt="NxBlue Truck"
            className="w-full max-w-xl drop-shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;