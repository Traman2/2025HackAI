import { motion } from "framer-motion";
import {
  Zap,
  ArrowLeft,
} from "lucide-react";

function Navbar() {
    return (
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Zap className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  EnergyAI
                </span>
              </motion.div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#team">Team</NavLink>
              <NavLink href="#hackathon">Hackathon</NavLink>
              <NavLink href="#technology">Technology</NavLink>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-green-600 hover:text-green-700 transition"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </motion.a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
      <a
        href={href}
        className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium transition duration-150 ease-in-out"
      >
        {children}
      </a>
    );
  }

  export default Navbar;