import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-[#0A4DA3]">
          Get In Touch
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Reach out to us through any of the following channels.
          We'd be delighted to assist you.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {/* Address */}

          <div className="flex h-full flex-col items-center rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">

              <FaMapMarkerAlt
                size={28}
                className="text-[#0A4DA3]"
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#0A4DA3]">
              Address
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Survey Number 44/4/4
              <br />
              Cat Road Rau
              <br />
              Indore (MP) – 453331
            </p>

          </div>

          {/* Phone */}

          <div className="flex h-full flex-col items-center rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">

              <FaPhoneAlt
                size={26}
                className="text-[#0A4DA3]"
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#0A4DA3]">
              Phone
            </h3>

            <p className="mt-4 text-gray-600">
              +91 92747 89818
            </p>

          </div>

          {/* Email */}

          <div className="flex h-full flex-col items-center rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">

              <FaEnvelope
                size={26}
                className="text-[#0A4DA3]"
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#0A4DA3]">
              Email
            </h3>

            <p className="mt-4 text-gray-600">
              Noxchemindustries@gmail.com
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}