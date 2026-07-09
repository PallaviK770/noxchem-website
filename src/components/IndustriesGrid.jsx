import {
  FaTruck,
  FaBus,
  FaTractor,
  FaIndustry,
  FaBolt,
  FaHardHat,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaTruck size={36} />,
    title: "Commercial Transport",
    description:
      "Suitable for heavy-duty trucks and long-haul transportation vehicles equipped with SCR technology.",
  },
  {
    icon: <FaBus size={36} />,
    title: "Public Transportation",
    description:
      "Ideal for buses and fleet vehicles operating with modern diesel emission systems.",
  },
  {
    icon: <FaTractor size={36} />,
    title: "Agriculture",
    description:
      "Supports tractors, harvesters, and agricultural machinery using SCR engines.",
  },
  {
    icon: <FaHardHat size={36} />,
    title: "Construction",
    description:
      "Designed for excavators, loaders, cranes, and other heavy construction equipment.",
  },
  {
    icon: <FaIndustry size={36} />,
    title: "Manufacturing",
    description:
      "Used in industrial diesel-powered equipment and manufacturing operations.",
  },
  {
    icon: <FaBolt size={36} />,
    title: "Power Generation",
    description:
      "Suitable for diesel generators and backup power systems equipped with SCR technology.",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0A4DA3]">
            Industries We Serve
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0A4DA3]">
            Supporting Diverse Industrial Applications
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            NxBlue is designed for a wide range of industries that rely on
            SCR-equipped diesel engines for cleaner and more efficient operation.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry, index) => (

            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 text-[#0A4DA3]">

                {industry.icon}

              </div>

              <h3 className="text-2xl font-semibold text-[#0A4DA3]">
                {industry.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {industry.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}