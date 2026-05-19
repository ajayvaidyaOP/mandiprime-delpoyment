import { motion } from "framer-motion"

const Solution = () => {
  return (
    <section className="py-24 bg-green-50 px-6 md:px-16">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          The MandiPrime Solution
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          A single digital platform that connects farmers and buyers directly across India — removing middlemen and increasing transparency.
        </p>

      </div>

      {/* Split Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* FARMERS SIDE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-green-100"
        >

          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🌾 For Farmers
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Upload crops directly from mobile</li>
            <li>✔ Set your own price</li>
            <li>✔ Reach buyers across India</li>
            <li>✔ No middlemen involvement</li>
            <li>✔ Faster payments & direct deals</li>
            <li>✔ Transparent pricing system</li>
          </ul>

        </motion.div>

        {/* BUYERS SIDE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
        >

          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            🏢 For Business Buyers
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Post bulk requirements easily</li>
            <li>✔ Connect with verified farmers</li>
            <li>✔ Compare prices nationwide</li>
            <li>✔ Source directly from farms</li>
            <li>✔ Reduce procurement cost</li>
            <li>✔ Faster supply chain access</li>
          </ul>

        </motion.div>

      </div>

      {/* Bottom Highlight */}
      <div className="mt-16 text-center">

        <div className="inline-block bg-white shadow-md px-6 py-4 rounded-2xl border border-green-200">
          <p className="text-lg font-semibold text-gray-800">
            🔗 One Platform. Two Worlds Connected. Zero Middlemen.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Solution