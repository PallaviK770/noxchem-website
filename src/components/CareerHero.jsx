import careerBanner from "../assets/images/career-banner.jpeg";

export default function CareerHero() {
  return (
    <section className="bg-[#F8FAFC] py-14">
      <div className="max-w-7xl mx-auto px-2">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="mt-5 text-5xl lg:text-6xl font-bold leading-tight text-[#0A4DA3]">
              Build Your Career
              <br />
              With NOxchem Industries
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Join a team that believes in innovation, quality,
              sustainability and continuous growth. Together we create
              cleaner solutions for tomorrow.
            </p>

            <a
              href="#jobs"
              className="inline-block mt-10 bg-[#0A4DA3] hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-lg transition duration-300"
            >
              View Openings
            </a>

          </div>

          <div className="flex justify-center">

            <img
              src={careerBanner}
              alt="Career"
              className="w-full max-w-lg rounded-2xl shadow-2xl hover:scale-90 transition duration-300"
            />

          </div>

        </div>

      </div>
    </section>
  );
}