const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-white shadow-md sticky top-0 z-50">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-700 cursor-pointer">
        MandiPrime
      </h1>

      {/* Links */}
      <ul className="hidden md:flex gap-6 font-medium text-gray-700">

        <li
          className="cursor-pointer hover:text-green-700"
          onClick={() => scrollToSection("hero")}
        >
          Home
        </li>

        <li
          className="cursor-pointer hover:text-green-700"
          onClick={() => scrollToSection("problem")}
        >
          Problem
        </li>

        <li
          className="cursor-pointer hover:text-green-700"
          onClick={() => scrollToSection("solution")}
        >
          Solution
        </li>

        <li
          className="cursor-pointer hover:text-green-700"
          onClick={() => scrollToSection("how")}
        >
          How It Works
        </li>

        <li
          className="cursor-pointer hover:text-green-700"
          onClick={() => scrollToSection("market")}
        >
          Marketplace
        </li>

        <li
          className="cursor-pointer hover:text-green-700"
          onClick={() => scrollToSection("testimonials")}
        >
          Reviews
        </li>

      </ul>

      {/* CTA Button */}
      <button
        onClick={() => scrollToSection("waitlist")}
        className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition"
      >
        Join Waitlist
      </button>

    </nav>
  )
}

export default Navbar