import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Services id="services" />
      <About id="about" />
      <Products id="products" />
      <Testimonials />
      <Gallery />
      <Contact id="contact" />
    </>
  )
}

export default Home