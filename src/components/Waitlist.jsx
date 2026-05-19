import { useState } from "react"
import { motion } from "framer-motion"

const Waitlist = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      alert("Please enter your email")
      return
    }

    alert("You are added to MandiPrime waitlist 🚀")
    setEmail("")
  }

  return (
    <section className="py-24 bg-white px-6 md:px-16">

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Join the MandiPrime Waitlist
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Be among the first farmers and buyers to experience India’s new agricultural marketplace.
        </p>

      </div>

      {/* Form Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 max-w-2xl mx-auto bg-green-50 border border-green-100 p-8 rounded-2xl shadow-md"
      >

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
          />

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition"
          >
            🚀 Join Now
          </button>

        </form>

        {/* Small text */}
        <p className="mt-4 text-sm text-gray-500 text-center">
          No spam. Only important launch updates.
        </p>

      </motion.div>

      {/* Urgency Box */}
      <div className="mt-12 text-center">

        <div className="inline-block bg-yellow-50 border border-yellow-200 px-6 py-4 rounded-2xl">
          <p className="text-gray-800 font-semibold">
            ⚡ Limited Early Access Slots for First Users in India
          </p>
        </div>

      </div>

    </section>
  )
}

export default Waitlist