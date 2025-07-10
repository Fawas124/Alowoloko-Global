import { Link } from 'react-router-dom'

const LandProperty = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Land & Property Agent Services</h1>
        
        <div className="mb-8">
          <img 
            src="/images/land-property.jpg" 
            alt="Land and Property Services" 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Expert Property Solutions</h2>
          <p className="mb-4">
            Alowoloko Global offers comprehensive land and property services, connecting buyers with prime properties
            and helping sellers get the best value for their assets in Ogun State and surrounding areas.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Our Services:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Land acquisition and sales</li>
            <li>Property valuation and appraisal</li>
            <li>Real estate investment consulting</li>
            <li>Title documentation and processing</li>
            <li>Property management services</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Extensive local market knowledge</li>
            <li>Verified and dispute-free properties</li>
            <li>Transparent transactions</li>
            <li>Legal documentation support</li>
            <li>Competitive commission rates</li>
          </ul>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Start Your Property Journey</h3>
            <p className="mb-4">
              Whether you're buying or selling, our experienced agents are ready to assist you.
            </p>
            <Link 
              to="/agent-contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded inline-block"
            >
              Contact Our Agents
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandProperty