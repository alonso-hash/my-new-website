import Navbar from './Components/NavBar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About'
import WhyChooseSection from './Components/whyChooseSection/WhyChooseSection.jsx'
import FeaturedInfluencers from './Components/FeaturedInfluencers/FeaturedInfluencers.jsx'
import Contacts from './Components/Contacts/Contacts'
import MarketingStrategiesSection from './Components/MarketingStrategiesSection/MarketingStrategiesSection.jsx'
import TrustedBrands from './Components/TrustedBrands/TrustedBrands.jsx'
function App() {
  return (
    <div className="pt-20 bg-gradient-to-tr from-[#0b0b12] via-[#1a103d] to-[#3d0f4e] bg-white">
      <Navbar/>
      <Home/>
      <About/>
      <WhyChooseSection />
      <MarketingStrategiesSection/>
      <FeaturedInfluencers/>
      <TrustedBrands/>
      <Contacts/>
    </div>
  )
}

export default App