import React from "react";
import { motion } from "framer-motion";
import { Zap} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
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
              <NavLink href="/aichatbot">AI Chatbot</NavLink>
              <NavLink href="/about">About</NavLink>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/dashboard")}
                className="bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700 transition duration-150 ease-in-out cursor-pointer"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  function NavLink({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
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