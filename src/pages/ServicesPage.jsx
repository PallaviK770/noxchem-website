import ServicesHero from "../components/ServicesHero";
import ServicesList from "../components/ServicesList";
import AMCSection from "../components/AMCSection";
import IndiaServiceMap from "../components/IndiaServiceMap";

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <AMCSection />
      <IndiaServiceMap />
    </>
  );
}

export default ServicesPage;