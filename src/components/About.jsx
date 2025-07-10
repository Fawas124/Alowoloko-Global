const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="/images/about-img2.png" 
              alt="Alowoloko Global Company" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Alowoloko Global</h2>
            <p className="text-gray-600 mb-4">
              Established in 2010, Alowoloko Global Company Ltd has grown to become a leading supplier of construction materials and property services in Ogun State and beyond.
            </p>
            <p className="text-gray-600 mb-4">
              Our company is built on a foundation of integrity, quality, and customer satisfaction. We take pride in providing only the best materials and services to our clients.
            </p>
            <p className="text-gray-600 mb-6">
              With our team of experienced professionals, we ensure timely delivery, competitive pricing, and exceptional service for all your construction needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-orange-500 mb-2">10+ Years</h3>
                <p className="text-gray-600">Of Experience</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-orange-500 mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-orange-500 mb-2">100%</h3>
                <p className="text-gray-600">Quality Materials</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-orange-500 mb-2">24/7</h3>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About