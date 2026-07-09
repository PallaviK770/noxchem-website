import {
  FaTruck,
  FaTools,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTruck size={38} />,
    title: "NxBlue Supply",
    description:
      "Reliable supply of premium Diesel Exhaust Fluid (NxBlue) manufactured to support SCR-equipped diesel vehicles and industrial machinery.",
  },
  {
    icon: <FaTools size={38} />,
    title: "SCR Technical Support",
    description:
      "Expert guidance for SCR systems, proper DEF usage, storage recommendations, and operational best practices.",
  },
  {
    icon: <FaCogs size={38} />,
    title: "Annual Maintenance Contracts",
    description:
      "Comprehensive AMC services to help customers maintain efficient SCR system performance with timely support and maintenance.",
  },
  {
    icon: <FaHeadset size={38} />,
    title: "After-Sales Support",
    description:
      "Dedicated customer assistance for technical queries, product guidance, and long-term operational support.",
  },
];

function ServicesList() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[3px] text-[#43B02A] font-semibold">
            What We Offer
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A4DA3] mt-4">
            Professional Industrial Services
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Beyond manufacturing high-quality NxBlue, we provide dependable
            technical services and customer support to ensure efficient
            operation of SCR systems across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-[#0A4DA3] mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0A4DA3] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ServicesList;