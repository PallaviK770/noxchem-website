export default function ContactMap() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

      <div className="border-b border-gray-200 px-8 py-8">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A4DA3]">
          Visit Our Office
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#0A4DA3]">
          NOxchem Industries
        </h2>

        <div className="mt-6 space-y-3 text-gray-600 leading-7">

          <p>
            <span className="font-semibold text-[#0A4DA3]">
              Address
            </span>
          </p>

          <p>
            Survey Number 44/4/4,
            <br />
            Ward Number 13,
            <br />
            Sanjay Gandhi Ward,
            <br />
            Sukhniwas,
            <br />
            Cat Road Rau,
            <br />
            District Indore (MP) – 453331
          </p>

        </div>

      </div>

      <iframe
        title="NOx Chem Industries Location"
        src="https://maps.google.com/maps?q=NOx%20Chem%20Industries%2C%20Survey%20Number%2044%2F4%2F4%2C%20Ward%20Number%2013%2C%20Sanjay%20Gandhi%20Ward%2C%20Sukhniwas%2C%20Cat%20Road%20Rau%2C%20District%20Indore%20MP%20453331&t=&z=15&ie=UTF8&iwloc=&output=embed"
        className="h-[420px] w-full border-0"
        loading="lazy"
        allowFullScreen
      />

    </div>
  );
}