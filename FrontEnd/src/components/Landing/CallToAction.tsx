import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Call to Action Section
function CallToAction() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="demo" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
          }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to optimize your</span>
                  <span className="block">energy usage?</span>
                </h2>
                <p className="mt-4 text-lg text-green-100 max-w-3xl">
                  Get started with our demo today and see how our AI can
                  transform your energy management strategy.
                </p>
                <div className="mt-8 flex">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-600 px-6 py-3 rounded-md font-medium shadow-sm hover:bg-green-50 transition duration-150 ease-in-out"
                  >
                    Start Free Trial
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-4 text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition duration-150 ease-in-out"
                  >
                    Schedule Demo
                  </motion.button>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="pl-4 -mr-16 sm:pl-6 md:-mr-20 lg:px-0 lg:m-0 lg:relative lg:h-full"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="h-2 bg-green-600"></div>
                    <div className="px-5 py-4">
                      <div className="text-center mb-4">
                        <div className="text-sm font-medium text-gray-500">
                          Monthly Energy Savings
                        </div>
                        <div className="text-3xl font-bold text-green-600">
                          28.5%
                        </div>
                      </div>
                      <div className="mt-6 h-48 rounded-lg bg-gray-100 p-4 relative">
                        <div className="h-4 flex items-center justify-between mb-4">
                          <div className="text-xs text-gray-500">
                            Energy Usage Trend
                          </div>
                          <div className="text-xs text-green-600">
                            Optimized
                          </div>
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
                      <div className="flex justify-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-green-600 text-white text-sm px-4 py-2 mt-3 rounded-md font-medium"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;