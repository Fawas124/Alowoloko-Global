import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom' // Add this import

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" }
  ]

  const services = [
    { name: "Granite & Sand Supply", href: "/services/granite-sand" },
    { name: "Land & Property Agent", href: "/services/land-property" },
    { name: "Block Industry", href: "/services/block-industry" },
    { name: "Cement Distribution", href: "/services/cement-distribution" }
  ]

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-orange-500">Alowoloko</span> Global
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for quality construction materials and property services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <a href={link.href} className="text-gray-400 hover:text-orange-500 transition">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-gray-400 hover:text-orange-500 transition">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.href} className="text-gray-400 hover:text-orange-500 transition">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>43, Omu Aleku Road</p>
              <p>Omu Isoko, Mowe</p>
              <p>Ogun State</p>
              <p>Phone: +234 803 810 5698</p>
              <p>Email: alowolokoglobalcompany@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alowoloko Global Company Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer