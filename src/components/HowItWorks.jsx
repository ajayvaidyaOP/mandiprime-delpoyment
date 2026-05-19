import { motion } from "framer-motion"

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-16">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          How MandiPrime Works
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Simple, fast, and direct connection between farmers and buyers.
        </p>

      </div>

      {/* TWO FLOWS */}
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* FARMER FLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-50 p-8 rounded-2xl shadow-sm border border-green-100"
        >

          <h3 className="text-2xl font-bold text-green-700 mb-6">
            🌾 Farmer Flow
          </h3>

          <div className="space-y-4">

            <div className="flex items-start gap-4">
              <span className="bg-green-700 text-white w-8 h-8 flex items-center justify-center rounded-full">1</span>
              <p>Register on MandiPrime platform</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-green-700 text-white w-8 h-8 flex items-center justify-center rounded-full">2</span>
              <p>Upload crop details with quantity & price</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-green-700 text-white w-8 h-8 flex items-center justify-center rounded-full">3</span>
              <p>Get visibility across India marketplace</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-green-700 text-white w-8 h-8 flex items-center justify-center rounded-full">4</span>
              <p>Receive direct buyer calls & finalize deals</p>
            </div>

          </div>

        </motion.div>

        {/* BUYER FLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100"
        >

          <h3 className="text-2xl font-bold text-blue-700 mb-6">
            🏢 Buyer Flow
          </h3>

          <div className="space-y-4">

            <div className="flex items-start gap-4">
              <span className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full">1</span>
              <p>Create requirement for agricultural products</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full">2</span>
              <p>Browse available farmer listings</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full">3</span>
              <p>Compare prices and quality easily</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full">4</span>
              <p>Connect directly with farmers and purchase</p>
            </div>

          </div>

        </motion.div>

      </div>

      {/* FINAL LINE */}
      <div className="mt-16 text-center">

        <div className="inline-block bg-gray-50 border px-6 py-4 rounded-2xl shadow-sm">
          <p className="text-lg font-semibold text-gray-800">
            ⚡ No Middlemen. Direct Trade. Better Prices. Faster Deals.
          </p>
        </div>

      </div>

    </section>
  )
}

export default HowItWorks