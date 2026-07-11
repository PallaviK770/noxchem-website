import {
  FaFlask,
  FaIndustry,
  FaLeaf,
  FaTint,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaFlask size={34} />,
    title: "Industrial Chemicals",
    description:
      "High-quality industrial chemicals manufactured for consistent performance and reliability.",
  },
  {
    icon: <FaTint size={34} />,
    title: "Water Treatment",
    description:
      "Effective chemical solutions designed to improve water quality and treatment efficiency.",
  },
  {
    icon: <FaLeaf size={34} />,
    title: "Environmental Solutions",
    description:
      "Eco-conscious products supporting sustainable industrial operations.",
  },
  {
    icon: <FaIndustry size={34} />,
    title: "Specialty Chemicals",
    description:
      "Custom chemical formulations developed to meet diverse industrial requirements.",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#0A4DA3]">
            Categories
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0A4DA3]">
            Our Product Range
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            We provide innovative  DEF (Diesel Exhaust Fluid) products designed to serve multiple
            industrial sectors while maintaining the highest quality standards.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-[#0A4DA3]">

                {category.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#0A4DA3]">

                {category.title}

              </h3>

              <p className="mt-5 leading-7 text-gray-600">

                {category.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}