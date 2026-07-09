import scrImage from "../assets/images/scr-technology.jpeg";

export default function SCRTechnology() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0A4DA3]">
            About SCR Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0A4DA3]">
            Cleaner Emissions Through Advanced SCR Technology
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Selective Catalytic Reduction (SCR) is an advanced emission control
            technology used in modern diesel engines to significantly reduce
            nitrogen oxide (NOx) emissions. It works by injecting Diesel
            Exhaust Fluid (DEF), such as <strong>NxBlue</strong>, into the
            exhaust stream before it enters the SCR catalyst.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            Inside the catalyst, the DEF converts into ammonia, which reacts
            with harmful NOx gases. This chemical process transforms pollutants
            into harmless nitrogen, water vapor, and trace amounts of carbon
            dioxide—natural components already present in the atmosphere.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            When paired with high-quality DEF that complies with ISO 22241,
            SCR systems can reduce NOx emissions by up to <strong>90%</strong>,
            helping diesel engines meet stringent environmental standards.
          </p>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src={scrImage}
            alt="SCR Technology Process"
            className="w-full max-w-xl rounded-3xl shadow-xl"
          />

        </div>

      </div>

    </section>
  );
}