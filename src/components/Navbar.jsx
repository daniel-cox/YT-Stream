import { useState, useEffect } from "react"
import { gsap } from "gsap"
import Logo from "../assets/logo.png" // Assuming your logo is a PNG file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactVisible, setIsContactVisible] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleContactBar = () => {
    setIsContactVisible(!isContactVisible)
  }

  useEffect(() => {
    if (isOpen) {
      gsap.to(".menu-links", {
        height: "auto",
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.fromTo(
        ".menu-links li",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.2 }
      )
    } else {
      gsap.to(".menu-links", { height: 0, duration: 0.5, ease: "power2.in" })
    }
  }, [isOpen])

  useEffect(() => {
    if (isContactVisible) {
      gsap.to(".contact-bar", {
        height: "auto",
        duration: 0.5,
        ease: "power2.out",
        opacity: 1,
      })
    } else {
      gsap.to(".contact-bar", {
        height: 0,
        duration: 0.5,
        ease: "power2.in",
        opacity: 0,
      })
    }
  }, [isContactVisible])

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-red-900 shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-full h-full" />
        </div>
        <div className="hidden space-x-8 md:flex">
          <a href="#" className="text-slate-100 hover:text-slate-300">
            Home
          </a>
          <a href="#" className="text-slate-100 hover:text-slate-300">
            About
          </a>
          <a href="#" className="text-slate-100 hover:text-slate-300">
            Menu
          </a>
          <a href="#" className="text-slate-100 hover:text-slate-300">
            Contact
          </a>
        </div>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <span
            className={`block w-8 h-1 bg-slate-300 mb-1 transform transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-slate-300 mb-1 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-slate-300 transform transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
      <ul
        className={`menu-links md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto" : "h-0"
        } bg-slate-300 w-full text-center`}
      >
        <li className="py-2">
          <a href="#" className="block text-blue-150 hover:text-slate-300">
            Home
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="block text-blue-150 hover:text-slate-300">
            About
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="block text-blue-150 hover:text-slate-300">
            Menu
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="block text-blue-150 hover:text-slate-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Arrow button to toggle the contact bar */}
      <div className="w-full mt-2 text-center">
        <button
          className="text-slate-300 focus:outline-none"
          onClick={toggleContactBar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 mx-auto transition-transform duration-300 ${
              isContactVisible ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Contact Bar */}
      <div
        className={`contact-bar bg-neutral-200 text-blue-900 text-center py-3 w-full overflow-hidden opacity-0`}
      >
        <p>Contact Us: 407-293-3587</p>
      </div>
    </nav>
  )
}

export default Navbar
