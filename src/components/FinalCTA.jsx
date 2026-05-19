import { motion } from "framer-motion"

const FinalCTA = () => {
  return (
    <section className="py-28 bg-gradient-to-r from-green-700 to-green-900 text-white px-6 md:px-16">

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold">
          MandiPrime is Coming Soon 🚀
        </h2>

        <p className="mt-6 text-lg text-green-100">
          India’s next-generation agricultural marketplace is under development.
          Get ready to experience direct farmer-to-buyer trading like never before.
        </p>

        {/* Highlight Box */}
        <div className="mt-10 bg-white/10 border border-white/20 rounded-2xl p-6">
          <p className="text-white font-semibold">
            🌱 No Middlemen • 💰 Better Prices • 🇮🇳 Pan India Network • 📱 Mobile First
          </p>
        </div>

        {/* Store Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col md:flex-row justify-center gap-6"
        >

          {/* Play Store */}
          <div className="bg-black px-6 py-4 rounded-xl flex items-center gap-3 cursor-not-allowed opacity-80">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              className="h-10"
            />
            <div className="text-left">
              <p className="text-xs text-gray-300">Get it on</p>
              <p className="font-semibold">Google Play (Coming Soon)</p>
            </div>
          </div>

          {/* App Store */}
          <div className="bg-black px-6 py-4 rounded-xl flex items-center gap-3 cursor-not-allowed opacity-80">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <div className="text-left">
              <p className="text-xs text-gray-300">Download on the</p>
              <p className="font-semibold">App Store (Coming Soon)</p>
            </div>
          </div>

        </motion.div>

        {/* Bottom Line */}
        <p className="mt-12 text-green-200 text-sm">
          Built with ❤️ for farmers and agri-businesses across India
        </p>

      </div>

    </section>
  )
}

export default FinalCTA