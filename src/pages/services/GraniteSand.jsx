import { useNavigate } from 'react-router-dom'

const GraniteSand = () => {
  const navigate = useNavigate()

  const handleGetQuote = () => {
    // Navigate to home page first
    navigate('/')
    // Then scroll to contact section after a small delay to allow page transition
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // Small delay to ensure the home page has loaded
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Granite & Sand Supply</h1>
        
        <div className="mb-8">
          <img 
            src="/images/granite-sand.jpg" 
            alt="Granite and Sand Supply" 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Premium Construction Aggregates</h2>
          <p className="mb-4">
            We supply high-quality granite stones and various grades of sand for all construction applications,
            from small residential projects to large-scale commercial developments.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Material Specifications:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Granite (1/2", 3/4", 1", and 2" sizes)</li>
            <li>Sharp sand (plastering grade)</li>
            <li>River sand (concrete grade)</li>
            <li>Stone base (0-3/4" for road construction)</li>
            <li>Laterite (filling material)</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Supply Advantages:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Direct from quarry pricing</li>
            <li>Quality tested materials</li>
            <li>Multiple truck sizes available</li>
            <li>Same-day delivery options</li>
            <li>Large volume discounts</li>
          </ul>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Request Materials</h3>
            <p className="mb-4">
              Get a quote for your granite and sand requirements today.
            </p>
            <button
              onClick={handleGetQuote}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded inline-block"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraniteSand