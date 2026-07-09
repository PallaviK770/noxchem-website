import { Link } from "react-router-dom";

export default function OrderCTA() {
  return (
    <section className="bg-[#0A4DA3] py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          Ready to Order NxBlue?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Whether you need product information, pricing, bulk orders,
          or distribution support, our team is ready to help.
        </p>

        <Link
          to="/contact#contact-form"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#0A4DA3] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
}