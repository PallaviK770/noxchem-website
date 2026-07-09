import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-0 py-0">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="NOxchem Industries"
            className="h-30 w-auto"
          />

          <div>
            <h2 className="font-bold text-2xl text-[#0A4DA3]">
             
            </h2>

            <p className="text-xs tracking-[4px] text-gray-500">
            
            </p>
          </div>
        </div>

        {/* Navigation */}

        {/* Navigation */}

<nav className="hidden lg:flex items-center gap-10 text-[16px] font-medium">

  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "text-[#0A4DA3] font-semibold"
        : "text-gray-700 hover:text-[#0A4DA3] transition"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive
        ? "text-[#0A4DA3] font-semibold"
        : "text-gray-700 hover:text-[#0A4DA3] transition"
    }
  >
    About
  </NavLink>

  <NavLink
    to="/products"
    className={({ isActive }) =>
      isActive
        ? "text-[#0A4DA3] font-semibold"
        : "text-gray-700 hover:text-[#0A4DA3] transition"
    }
  >
    Products
  </NavLink>

  <NavLink
    to="/applications"
    className={({ isActive }) =>
      isActive
        ? "text-[#0A4DA3] font-semibold"
        : "text-gray-700 hover:text-[#0A4DA3] transition"
    }
  >
    Applications
  </NavLink>

  <NavLink
    to="/services"
    className={({ isActive }) =>
      isActive
        ? "text-[#0A4DA3] font-semibold"
        : "text-gray-700 hover:text-[#0A4DA3] transition"
    }
  >
    Services
  </NavLink>

  <NavLink
    to="/career"
    className={({ isActive }) =>
      isActive
        ? "text-[#0A4DA3] font-semibold"
        : "text-gray-700 hover:text-[#0A4DA3] transition"
    }
  >
    Career
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive
        ? "text-[#0A4DA3] font-semibold"
        : "text-gray-700 hover:text-[#0A4DA3] transition"
    }
  >
    Contact
  </NavLink>

</nav>

        {/* Button */}
<div className="flex items-center gap-4">

  <Link
    to="/contact#contact-form"
    className="hidden lg:block rounded-xl bg-[#0A4DA3] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#369122] hover:-translate-y-1 hover:shadow-lg"
  >
    Request Quote
  </Link>

  {/* Mobile Menu Button */}
  <button
    className="lg:hidden text-[#0A4DA3] text-2xl"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>

</div>
</div>
{menuOpen && (
  <div className="lg:hidden bg-white shadow-md">

    <nav className="flex flex-col px-6 py-4 space-y-5">

      <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>

      <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>

      <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>

      <NavLink to="/applications" onClick={() => setMenuOpen(false)}>Applications</NavLink>

      <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>

      <NavLink to="/career" onClick={() => setMenuOpen(false)}>Career</NavLink>

      <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

      <Link
        to="/contact#contact-form"
        onClick={() => setMenuOpen(false)}
        className="bg-[#0A4DA3] text-white text-center py-3 rounded-xl font-semibold"
      >
        Request Quote
      </Link>

    </nav>

  </div>
)}

</header>
)}

export default Navbar;