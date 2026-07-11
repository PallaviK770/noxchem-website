import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import ContactInfo from "../components/ContactInfo";


export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-gray-50 py-20">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

          <ContactForm />

          <ContactMap />

        </div>

      </section>

       <ContactInfo />

    </>
  );
}