import { useNavigate } from 'react-router-dom'

const BlockIndustry = () => {
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
        <h1 className="text-3xl font-bold mb-6">Block Industry Services</h1>
        
        <div className="mb-8">
          <img 
            src="/images/block-industry.jpg" 
            alt="Block Manufacturing" 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Premium Quality Concrete Blocks</h2>
          <p className="mb-4">
            Our block industry produces high-strength concrete blocks using quality materials and modern techniques,
            ensuring durability and consistency for all your construction projects.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Our Products:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>9-inch hollow blocks</li>
            <li>6-inch hollow blocks</li>
            <li>4-inch solid blocks</li>
            <li>Interlocking paving stones</li>
            <li>Decorative blocks</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Production Advantages:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Computerized batching for precise mix ratios</li>
            <li>Vibration technology for maximum compaction</li>
            <li>Proper curing process for strength</li>
            <li>Quality control at every production stage</li>
            <li>Custom block production available</li>
          </ul>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Get Quality Blocks Today</h3>
            <p className="mb-4">
              Place your order for high-quality concrete blocks delivered to your site.
            </p>
            <button 
              onClick={handlePlaceOrder} 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded inline-block"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockIndustry