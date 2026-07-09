import {
  FaUsers,
  FaGraduationCap,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaUsers size={38} />,
    title: "Collaborative Culture",
    description:
      "Work with experienced professionals in a supportive environment.",
  },
  {
    icon: <FaGraduationCap size={38} />,
    title: "Career Growth",
    description:
      "Continuous learning and opportunities to develop your skills.",
  },
  {
    icon: <FaChartLine size={38} />,
    title: "Innovation",
    description:
      "Contribute to advanced industrial solutions and sustainable products.",
  },
  {
    icon: <FaHandshake size={38} />,
    title: "Integrity",
    description:
      "We value teamwork, transparency and long-term relationships.",
  },
];

export default function WhyJoin() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-[#0A4DA3]">
          Why Join NOxchem
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Build your future with a company committed to innovation,
          quality and employee growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >
              <div className="text-[#0A4DA3] flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}