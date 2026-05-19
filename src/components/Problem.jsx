import { motion } from "framer-motion"

const Problem = () => {
  return (
    <section className="py-20 bg-white px-6 md:px-16">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          The Problem in Indian Agriculture
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Farmers and buyers are still stuck in outdated systems that reduce profit and transparency.
        </p>

      </div>

      {/* Cards */}
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-red-50 border border-red-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-red-700">
            ❌ Low Profit for Farmers
          </h3>
          <p className="mt-3 text-gray-600">
            Farmers often sell crops at very low prices due to middlemen and lack of direct buyers.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-red-50 border border-red-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-red-700">
            ❌ Middlemen Control Market
          </h3>
          <p className="mt-3 text-gray-600">
            A large portion of profit is taken by intermediaries, reducing farmer earnings.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-red-50 border border-red-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-red-700">
            ❌ No Direct Buyer Access
          </h3>
          <p className="mt-3 text-gray-600">
            Farmers cannot easily connect with bulk buyers across different states.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-red-50 border border-red-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-red-700">
            ❌ Lack of Price Transparency
          </h3>
          <p className="mt-3 text-gray-600">
            Prices vary heavily across markets, making fair trade difficult.
          </p>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-red-50 border border-red-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-red-700">
            ❌ Limited Market Reach
          </h3>
          <p className="mt-3 text-gray-600">
            Farmers are restricted to local mandis instead of national buyers.
          </p>
        </motion.div>

        {/* Card 6 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-red-50 border border-red-100 p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-red-700">
            ❌ Delayed Payments
          </h3>
          <p className="mt-3 text-gray-600">
            Farmers often wait long periods to receive payments from buyers.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Problem