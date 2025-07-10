import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import GraniteSand from './pages/services/GraniteSand'
import LandProperty from './pages/services/LandProperty'
import BlockIndustry from './pages/services/BlockIndustry'
import CementDistribution from './pages/services/CementDistribution'
import AgentContact from './pages/AgentContact'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/granite-sand" element={<GraniteSand />} />
            <Route path="/services/land-property" element={<LandProperty />} />
            <Route path="/services/block-industry" element={<BlockIndustry />} />
            <Route path="/services/cement-distribution" element={<CementDistribution />} />
            <Route path="/agent-contact" element={<AgentContact />} /> 
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  )
}

export default App