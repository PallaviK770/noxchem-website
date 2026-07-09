import {
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaLeaf,
} from "react-icons/fa";

const commitments = [
  {
    icon: <FaAward size={30} />,
    title: "Quality Assurance",
    description:
      "We are committed to delivering chemical solutions with consistent quality, reliability, and performance.",
  },
  {
    icon: <FaLightbulb size={30} />,
    title: "Innovation",
    description:
      "We continuously explore better technologies and smarter solutions to meet evolving industrial needs.",
  },
  {
    icon: <FaHandshake size={30} />,
    title: "Customer Focus",
    description:
      "Understanding our customers' requirements is at the heart of everything we do.",
  },
  {
    icon: <FaLeaf size={30} />,
    title: "Sustainability",
    description:
      "We strive to support environmentally responsible practices through thoughtful product development.",
  },
];

export default function OurCommitment() {
  return (
    <section className="bg-[#F8FAFC] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A4DA3]">
            Our Commitment
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0A4DA3]">
            Built on Trust, Quality & Innovation
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            At NOx Chem Industries, we are dedicated to providing dependable
            chemical solutions while building lasting relationships through
            quality, innovation, and customer-focused service.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {commitments.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-[#0A4DA3]">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#0A4DA3]">

                {item.title}

              </h3>

              <p className="mt-5 leading-7 text-gray-600">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}