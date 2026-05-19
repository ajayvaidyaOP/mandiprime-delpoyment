import { motion } from "framer-motion"

const Marketplace = () => {

  const crops = [
    { name: "Wheat", price: "₹2400/quintal", state: "Punjab" },
    { name: "Rice", price: "₹3100/quintal", state: "West Bengal" },
    { name: "Cotton", price: "₹7200/quintal", state: "Maharashtra" },
    { name: "Onion", price: "₹1800/quintal", state: "Maharashtra" },
    { name: "Sugarcane", price: "₹450/quintal", state: "Uttar Pradesh" },
    { name: "Maize", price: "₹2000/quintal", state: "Bihar" },
  ]

  return (
    <section className="py-24 bg-green-50 px-6 md:px-16">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Live Marketplace Preview
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Real-time crop listings from farmers across India
        </p>

      </div>

      {/* Grid */}
      <div className="mt-14 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {crops.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-green-100"
          >

            <h3 className="text-xl font-bold text-gray-900">
              🌾 {item.name}
            </h3>

            <p className="mt-2 text-green-700 font-semibold text-lg">
              {item.price}
            </p>

            <p className="mt-2 text-gray-500 text-sm">
              📍 {item.state}
            </p>

            <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-xl hover:bg-green-800 transition">
              Connect with Farmer
            </button>

          </motion.div>
        ))}

      </div>

      {/* Bottom Note */}
      <div className="mt-16 text-center">

        <div className="inline-block bg-white px-6 py-4 rounded-2xl shadow-md border">
          <p className="text-gray-700 font-semibold">
            📊 Prices update based on demand & supply across India
          </p>
        </div>

      </div>

    </section>
  )
}

export default Marketplace