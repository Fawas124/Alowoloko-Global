import { FaBuilding, FaTruck, FaHome, FaIndustry } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: <FaBuilding className="text-4xl text-orange-500" />,
      title: "Granite & Sand Supply",
      description: "High-quality granite and sand for all your construction needs.",
      link: "/services/granite-sand"
    },
    {
      icon: <FaHome className="text-4xl text-orange-500" />,
      title: "Land & Property Agent",
      description: "Expert property services including land acquisition and sales.",
      link: "/services/land-property"
    },
    {
      icon: <FaIndustry className="text-4xl text-orange-500" />,
      title: "Block Industry",
      description: "Production of high-quality concrete blocks.",
      link: "/services/block-industry"
    },
    {
      icon: <FaTruck className="text-4xl text-orange-500" />,
      title: "Cement Distribution",
      description: "Reliable cement supply from trusted manufacturers.",
      link: "/services/cement-distribution"
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive construction material solutions and property services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              to={service.link} 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 block"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
              <div className="text-center mt-4">
                <span className="text-orange-500 font-medium">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services