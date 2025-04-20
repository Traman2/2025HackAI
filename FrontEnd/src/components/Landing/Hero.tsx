import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="pt-20 pb-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
                <span className="block">Optimize Your</span>
                <span className="block text-green-600">Energy Consumption</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                Our advanced AI predicts energy usage patterns to help you
                reduce costs and environmental impact. Harness the power of
                machine learning for sustainable energy management.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition duration-150 ease-in-out flex items-center"
                  onClick={() => navigate("/dashboard")}
                >
                  Preview App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/about")}
                  className="text-green-600 border border-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-50 transition duration-150 ease-in-out"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-green-600 h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-semibold text-gray-800">
                      Energy Usage Dashboard
                    </div>
                    <div className="text-green-600 flex items-center">
                      <span className="mr-1 text-sm">Live</span>
                      <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1 bg-gray-100 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">
                        Current Usage
                      </div>
                      <div className="text-2xl font-bold text-gray-800">
                        3.8 kWh
                      </div>
                      <div className="text-green-600 text-sm mt-1">
                        -12% from avg
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">
                        Prediction
                      </div>
                      <div className="text-2xl font-bold text-gray-800">
                        21.4 kWh
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Today's total
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 h-48 rounded-lg bg-gray-100 p-4 relative">
                    <div className="h-4 flex items-center justify-between mb-4">
                      <div className="text-xs text-gray-500">Usage Trend</div>
                      <div className="text-xs text-green-600">Optimized</div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 top-12">
                      <div className="h-full flex items-end">
                        <div className="w-1/12 h-20 bg-green-200 rounded-t mx-px"></div>
                        <div className="w-1/12 h-24 bg-green-300 rounded-t mx-px"></div>
                        <div className="w-1/12 h-16 bg-green-200 rounded-t mx-px"></div>
                        <div className="w-1/12 h-28 bg-green-400 rounded-t mx-px"></div>
                        <div className="w-1/12 h-32 bg-green-500 rounded-t mx-px"></div>
                        <div className="w-1/12 h-36 bg-green-600 rounded-t mx-px"></div>
                        <div className="w-1/12 h-32 bg-green-500 rounded-t mx-px"></div>
                        <div className="w-1/12 h-24 bg-green-400 rounded-t mx-px"></div>
                        <div className="w-1/12 h-20 bg-green-300 rounded-t mx-px"></div>
                        <div className="w-1/12 h-16 bg-green-200 rounded-t mx-px"></div>
                        <div className="w-1/12 h-12 bg-green-200 rounded-t mx-px"></div>
                        <div className="w-1/12 h-16 bg-green-300 rounded-t mx-px"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-100 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#features"
            className="flex flex-col items-center text-green-600"
          >
            <span className="text-sm mb-2">Explore Features</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;