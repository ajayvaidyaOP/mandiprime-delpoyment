import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Problem from "../components/Problem"
import Solution from "../components/Solution"
import HowItWorks from "../components/HowItWorks"
import Marketplace from "../components/Marketplace"
import WhyMandiPrime from "../components/WhyMandiPrime"
import Testimonials from "../components/Testimonials"
import Waitlist from "../components/Waitlist"
import FinalCTA from "../components/FinalCTA"

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Marketplace />
      <WhyMandiPrime />
      <Testimonials />
      <Waitlist />
      <FinalCTA />
    </div>
  )
}

export default LandingPage