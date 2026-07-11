import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A4DA3] py-24">

      {/* Decorative Circles */}

      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-[2rem] border border-white/20 bg-white/10 p-10 backdrop-blur-md md:p-16">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
              Let's Build Together
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready to Partner with NOxchem Industries?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Whether you're looking for dependable chemical solutions,
              exploring partnership opportunities, or have questions about our
              products, our team is ready to assist you.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            

              <Link
                to="/contact"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0A4DA3]"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}