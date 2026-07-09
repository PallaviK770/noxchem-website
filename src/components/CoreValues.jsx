import {
  FaShieldAlt,
  FaGem,
  FaUsers,
  FaSeedling,
} from "react-icons/fa";

const values = [
  {
    icon: <FaShieldAlt />,
    title: "Integrity",
    description:
      "We believe in conducting business with honesty, transparency, and accountability.",
  },
  {
    icon: <FaGem />,
    title: "Excellence",
    description:
      "We continuously strive to improve our products, processes, and standards.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    description:
      "Strong partnerships with customers, suppliers, and our team drive long-term success.",
  },
  {
    icon: <FaSeedling />,
    title: "Responsibility",
    description:
      "We support safe operations and environmentally responsible manufacturing practices.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-blue-50 py-24">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#0A4DA3]">
            Our Core Values
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0A4DA3]">
            The Principles That Guide Us
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Every decision we make is guided by values that help us build
            lasting relationships and deliver dependable chemical solutions.
          </p>

        </div>

        <div className="mt-16 space-y-10">

          {values.map((value, index) => (

            <div
              key={index}
              className="flex gap-6 border-b border-blue-100 pb-8 last:border-none"
            >

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-[#0A4DA3] shadow-md">

                {value.icon}

              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#0A4DA3]">
                  {value.title}
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  {value.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}