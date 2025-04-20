import { motion } from "framer-motion";
import {
  Lightbulb,
} from "lucide-react";

function HeroSection() {
    return (
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="block">About</span>
              <span className="block text-green-600">EnergyAI</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              A revolutionary energy modeling solution developed during the
              LTIMindTree Hackathon 2025, designed to predict and optimize energy
              consumption patterns.
            </p>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 lg:p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                At EnergyAI, we believe that artificial intelligence has the power
                to revolutionize how we manage and consume energy. Our mission is
                to create a more sustainable future by leveraging cutting-edge
                machine learning models to predict, optimize, and reduce energy
                consumption.
              </p>
              <p className="text-gray-600">
                Born during the intensive 48-hour LTIMindTree Hackathon challenge,
                EnergyAI represents our vision for a smarter approach to energy
                management that benefits both consumers and our planet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

export default HeroSection;