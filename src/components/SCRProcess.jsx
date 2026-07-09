import {
  FaTruck,
  FaTint,
  FaCogs,
  FaLeaf,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaTruck size={40} />,
    title: "Diesel Engine",
    description: "The diesel engine produces exhaust gases containing nitrogen oxides (NOx).",
  },
  {
    icon: <FaTint size={40} />,
    title: "NxBlue Injection",
    description: "NxBlue Diesel Exhaust Fluid is injected into the exhaust stream.",
  },
  {
    icon: <FaCogs size={40} />,
    title: "SCR Catalyst",
    description: "Inside the SCR catalyst, the DEF reacts with NOx gases and converts them.",
  },
  {
    icon: <FaLeaf size={40} />,
    title: "Clean Emissions",
    description: "The harmful gases become nitrogen, water vapor and trace amounts of CO₂.",
  },
];

export default function SCRProcess() {
  return (
    <section className="bg-blue-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0A4DA3]">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0A4DA3]">
            The SCR Process in Four Simple Steps
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Modern SCR technology uses NxBlue Diesel Exhaust Fluid to transform
            harmful emissions into cleaner exhaust gases through a controlled
            chemical reaction.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center text-[#0A4DA3]">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0A4DA3]">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}