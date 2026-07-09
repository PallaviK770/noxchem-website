import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0A4DA3] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold">
              NOx Chem Industries
            </h3>

            <p className="mt-5 text-blue-100 leading-7">
              Delivering premium Diesel Exhaust Fluid (NxBlue) and
              dependable industrial solutions with a commitment to
              quality, reliability, and environmental responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/products">Products</Link></li>

              <li><Link to="/applications">Applications</Link></li>

              <li><Link to="/services">Services</Link></li>

              <li><Link to="/career">Career</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-blue-100">

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1" />
                <span>+91 9770016729/9511789818</span>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1" />
                <span>Noxchemindustries@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Indore, Madhyapradesh, India
                </span>
              </div>

            </div>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Leadership
            </h3>

            <div className="space-y-5 text-blue-100">

              <div>
                <h4 className="font-semibold text-white">
                  Mayur Parmar & Ganesh sonawane 
                </h4>

                <p>Co-Founder & Partner</p>
              </div>


            </div>

          </div>

        </div>

        <hr className="border-blue-400 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-blue-100 text-sm">
            
            Committed to Cleaner Diesel Emissions Through Quality DEF Solutions
          </p>
           <p className="text-blue-100 text-sm">
            
            © 2026 NOxchem Industries. All Rights Reserved.
          </p>


        </div>

      </div>
    </footer>
  );
}

export default Footer;