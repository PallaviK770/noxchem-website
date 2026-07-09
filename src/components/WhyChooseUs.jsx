import {
  FaShieldAlt,
  FaCheckCircle,
  FaTruck,
  FaLeaf,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={40} />,
    title: "High Purity",
    description:
      "Manufactured using high-purity urea and demineralized water for reliable SCR performance.",
  },
  {
    icon: <FaCheckCircle size={40} />,
    title: "ISO 22241 Standard",
    description:
      "Produced in compliance with internationally recognized Diesel Exhaust Fluid quality standards.",
  },
  {
    icon: <FaTruck size={40} />,
    title: "Reliable Supply",
    description:
      "Consistent availability and timely delivery to transport fleets and industries.",
  },
  {
    icon: <FaLeaf size={40} />,
    title: "Eco Friendly",
    description:
      "Reduces harmful NOx emissions and supports cleaner diesel engine operation.",
  },
];

function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-[#0A4DA3]">
          Why Choose NOxchem
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          We are committed to delivering premium-quality Diesel Exhaust Fluid
          that ensures efficiency, environmental responsibility, and dependable
          performance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >
              <div className="text-[#0A4DA3] flex justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;