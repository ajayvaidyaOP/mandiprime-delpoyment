import { motion } from "framer-motion"

const Testimonials = () => {
  const reviews = [
    {
      name: "Ramesh Patel",
      role: "Farmer, Maharashtra",
      text: "Earlier I depended on local mandi agents. Now I can directly connect with buyers and get better prices.",
    },
    {
      name: "Sandeep Sharma",
      role: "Agri Business Buyer, Delhi",
      text: "Finding reliable farmers used to be difficult. MandiPrime makes sourcing crops simple and transparent.",
    },
    {
      name: "Lakshmi Devi",
      role: "Farmer, Karnataka",
      text: "This platform gives me hope. I can now sell my crops beyond my local market.",
    },
  ]

  return (
    <section className="py-24 bg-green-50 px-6 md:px-16">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          What People Are Saying
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Farmers and buyers across India are excited about MandiPrime.
        </p>

      </div>

      {/* Cards */}
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {reviews.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-green-100"
          >

            <p className="text-gray-600 italic">
              “{item.text}”
            </p>

            <div className="mt-6">
              <h4 className="font-bold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>

          </motion.div>
        ))}

      </div>

      {/* Bottom Trust Line */}
      <div className="mt-16 text-center">

        <div className="inline-block bg-white px-6 py-4 rounded-2xl shadow-md border">
          <p className="text-gray-700 font-semibold">
            🌱 Built for farmers. Trusted by communities. Designed for India.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Testimonials