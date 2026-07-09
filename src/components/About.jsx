import bucket from "../assets/images/bucket.jpeg";

import "../styles/About.css";

export default function About() {
  return (
    <section className="about">

      <div className="about-image">

        <img
          src={bucket}
          alt="NxBlue DEF"
        />

      </div>

      <div className="about-content">

        <span className="section-tag">
          ABOUT NXBLUE
        </span>

        <h2>
          High Purity Diesel Exhaust Fluid
          for Modern SCR Engines
        </h2>

        <p>
          NxBlue is a premium Diesel Exhaust Fluid (AUS 32)
          manufactured in compliance with ISO 22241 standards.
          Designed for modern diesel engines equipped with
          Selective Catalytic Reduction (SCR) technology,
          NxBlue helps reduce harmful NOx emissions while
          improving engine efficiency and ensuring reliable
          long-term performance.
        </p>

        <div className="about-features">

          <div>✓ ISO 22241 Certified</div>

          <div>✓ High Purity Formula</div>

          <div>✓ Reduces NOx Emissions</div>

          <div>✓ SCR System Safe</div>

        </div>

      </div>

    </section>
  );
}