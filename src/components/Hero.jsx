const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quality Construction Materials & Services
          </h1>
          <p className="text-xl mb-8">
            Alowoloko Global Company Ltd - Your trusted partner for granite, sand, cement, and property services in Ogun State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero