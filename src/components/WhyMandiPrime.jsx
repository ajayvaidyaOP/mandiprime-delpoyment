import { motion } from "framer-motion"

const WhyMandiPrime = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-16">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Why MandiPrime?
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Built to fix the real problems of Indian agriculture with technology, transparency, and direct connectivity.
        </p>

      </div>

      {/* GRID */}
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <motion.div whileHover={{ scale: 1.05 }}
          className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-bold text-green-700">
            🔗 Direct Connection
          </h3>
          <p className="mt-3 text-gray-600">
            Farmers and buyers connect directly without any middlemen interference.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div whileHover={{ scale: 1.05 }}
          className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-bold text-green-700">
            💰 Better Pricing
          </h3>
          <p className="mt-3 text-gray-600">
            Farmers get fair value for crops and buyers reduce procurement cost.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div whileHover={{ scale: 1.05 }}
          className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-bold text-green-700">
            🇮🇳 Pan India Network
          </h3>
          <p className="mt-3 text-gray-600">
            Connect across states — from Punjab to Tamil Nadu, Bihar to Maharashtra.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div whileHover={{ scale: 1.05 }}
          className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-bold text-green-700">
            📱 Mobile First Platform
          </h3>
          <p className="mt-3 text-gray-600">
            Simple mobile experience designed for farmers and business users.
          </p>
        </motion.div>

        {/* Card 5 */}
        <motion.div whileHover={{ scale: 1.05 }}
          className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-bold text-green-700">
            📊 Transparent Market
          </h3>
          <p className="mt-3 text-gray-600">
            Real-time pricing visibility helps eliminate unfair trade practices.
          </p>
        </motion.div>

        {/* Card 6 */}
        <motion.div whileHover={{ scale: 1.05 }}
          className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-bold text-green-700">
            🚀 Future Ready System
          </h3>
          <p className="mt-3 text-gray-600">
            Built to scale into India’s largest agri-tech ecosystem.
          </p>
        </motion.div>

      </div>

      {/* Bottom Highlight */}
      <div className="mt-16 text-center">

        <div className="inline-block bg-green-700 text-white px-8 py-4 rounded-2xl shadow-lg">
          <p className="text-lg font-semibold">
            🌱 Empowering Farmers. Connecting India. Building the Future of Agriculture.
          </p>
        </div>

      </div>

    </section>
  )
}

export default WhyMandiPrime