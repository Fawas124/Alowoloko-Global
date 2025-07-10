import { useNavigate } from 'react-router-dom'

const CementDistribution = () => {
  const navigate = useNavigate()

  const handlePlaceOrder = () => {
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
        <h1 className="text-3xl font-bold mb-6">Cement Distribution Services</h1>
        
        <div className="mb-8">
          <img 
            src="/images/cement-distribution.jpg" 
            alt="Cement Distribution" 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Reliable Cement Supply</h2>
          <p className="mb-4">
            As authorized distributors of major cement brands, we provide consistent supply of high-quality cement
            for construction projects of all sizes across Ogun State.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Our Products:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Dangote Cement (42.5R & 32.5R)</li>
            <li>Lafarge Cement</li>
            <li>BUA Cement</li>
            <li>Elephant Cement</li>
            <li>Specialty cements for specific applications</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Distribution Benefits:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Guaranteed product authenticity</li>
            <li>Competitive wholesale prices</li>
            <li>Bulk delivery available</li>
            <li>Flexible payment options</li>
            <li>Emergency supply services</li>
          </ul>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Order Cement Now</h3>
            <p className="mb-4">
              Get reliable cement supply delivered to your construction site or warehouse.
            </p>
            <button
              onClick={handlePlaceOrder}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded inline-block"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CementDistribution