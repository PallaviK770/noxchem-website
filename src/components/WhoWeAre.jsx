import factory from "../assets/images/about-factory.jpeg";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <div>

          <img
            src={factory}
            alt="NOx Chem Industries"
            className="h-[500px] w-full rounded-3xl object-cover shadow-2xl  hover:scale-105 transition duration-500"
          />

        </div>

        {/* Content */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A4DA3]">
            Who We Are
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0A4DA3]">
            Your Trusted Partner in Chemical Innovation
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            NOxchem Industries is committed to delivering high-quality
            chemical solutions that meet the evolving needs of industries.
            Through continuous innovation, advanced manufacturing, and strict
            quality standards, we strive to provide products that create
            long-term value for our customers.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our dedication to excellence, customer satisfaction, and sustainable
            practices has made us a trusted name across multiple industrial
            sectors. Every solution we develop is driven by reliability,
            performance, and a commitment to building lasting partnerships.
          </p>

        </div>

      </div>

    </section>
  );
}