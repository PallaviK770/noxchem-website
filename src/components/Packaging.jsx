
import bucket20 from "../assets/images/bucket20.jpeg";
import can10 from "../assets/images/can10.jpeg";
import drum210 from "../assets/images/drum210.jpeg";
import ibc1000 from "../assets/images/ibc1000.jpeg";
import "../styles/Packaging.css";

const products = [
  {
    image: can10,
    title: "10L Capacity",
    description:
      "Compact packaging ideal for workshops, service centers, and small fleet operators requiring convenient handling.",
  },
  {
    image: bucket20,
    title: "20L Bucket",
    description:
      "Our most popular packaging solution designed for commercial vehicle operators and medium-scale consumption.",
  },
  {
    image: drum210,
    title: "210L Drum",
    description:
      "High-capacity packaging suitable for distributors, transport companies, and industrial applications.",
  },
  {
    image: ibc1000,
    title: "1000L IBC Tank",
    description:
      "Bulk storage solution for large fleets, manufacturing facilities, and continuous DEF supply requirements.",
  },
];

export default function Packaging() {
  return (
    <section className="packaging-section">
      <div className="container">

        <span className="section-tag">
          OUR PACKAGING SOLUTIONS
        </span>

        <h2>
          Available Packaging Options
        </h2>

        <p className="section-description">
          NxBlue Diesel Exhaust Fluid is available in multiple packaging
          capacities to meet the needs of workshops, transport companies,
          industries, distributors, and large commercial fleets.
        </p>

        <div className="product-grid">
  {products.map((product, index) => (
    <div className="product-card" key={index}>

      <div className="capacity-badge">
        {product.capacity}
      </div>

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>{product.description}</p>


    </div>
  ))}
</div>

      </div>
    </section>
  );
}