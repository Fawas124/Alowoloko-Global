import { useState } from "react";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.location.href = "tel:+2348038105698";
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=alowolokoglobalcompany@gmail.com&su=Inquiry from Alowoloko Website&body=Dear Alowoloko Global Team,",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-orange-500">Alowoloko</span> Global
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6 items-center">
                <li>
                  <Link to="/" className="hover:text-orange-500 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-orange-500 transition"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-orange-500 transition"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="hover:text-orange-500 transition"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-orange-500 transition"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4 ml-6">
              <a
                href="tel:+2348038105698"
                onClick={handlePhoneClick}
                className="flex items-center hover:text-orange-500"
              >
                <FaPhone className="mr-2" /> +234 803 810 5698
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-orange-500 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="block hover:text-orange-500 transition w-full text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block hover:text-orange-500 transition w-full text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block hover:text-orange-500 transition w-full text-left"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block hover:text-orange-500 transition w-full text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <a
                href="tel:+2348038105698"
                onClick={handlePhoneClick}
                className="flex items-center hover:text-orange-500"
              >
                <FaPhone className="mr-2" /> +234 803 810 5698
              </a>
              <a
                href="mailto:alowolokoglobalcompany@gmail.com"
                onClick={handleEmailClick}
                className="flex items-center mt-2 hover:text-orange-500"
              >
                <FaEnvelope className="mr-2" /> alowolokoglobalcompany@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
