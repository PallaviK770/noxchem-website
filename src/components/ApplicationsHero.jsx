import { Link } from "react-router-dom";

export default function ApplicationsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0A4DA3] to-[#0D5DBD] py-18">

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative mx-auto max-w-7xl px-6 text-center text-white">


        <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
          Powering Cleaner Diesel Engines
          <br />
          Across Every Industry
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          NxBlue Diesel Exhaust Fluid is designed for SCR-equipped diesel
          engines across transportation, construction, agriculture,
          manufacturing, and power generation industries.
        </p>

      </div>

    </section>
  );
}