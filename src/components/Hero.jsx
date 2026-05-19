import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
        id="hero"
        className="min-h-screen bg-gradient-to-r from-green-50 via-white to-green-100 flex items-center px-6 md:px-16"
        >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Badge */}
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            🇮🇳 Built for Indian Farmers & Buyers
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            India’s Digital <span className="text-green-700">Agriculture Marketplace</span>
          </h1>

          {/* Sub text */}
          <p className="mt-6 text-lg text-gray-600">
            Connect farmers and business buyers directly across India.
            No middlemen. Better prices. Transparent trade. One platform for all agriculture needs.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl shadow-md transition">
              🚀 Join Waitlist
            </button>

            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-xl hover:bg-green-50 transition">
              ▶ Watch Demo
            </button>

          </div>

          {/* Small stats */}
          <div className="mt-10 flex gap-6 text-sm text-gray-600">
            <div>
              <p className="text-xl font-bold text-gray-900">1000+</p>
              <p>Farmers Joining</p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900">All India</p>
              <p>Coverage</p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900">Direct</p>
              <p>Buyer Connection</p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >

          <img
  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1200&q=80"
  alt="Indian Farmer Agriculture"
  className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
/>

          {/* Floating Card 1 */}
          <div className="absolute top-6 left-6 bg-white shadow-lg p-3 rounded-xl">
            🌾 Wheat ₹2400/quintal
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-6 right-6 bg-white shadow-lg p-3 rounded-xl">
            🏢 Direct Buyer Available
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero