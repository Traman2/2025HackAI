import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Battery, Zap, BarChart3, ChevronDown } from 'lucide-react';

// Main App Component
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

// Navbar Component
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
              <span className="ml-2 text-xl font-bold text-gray-900">EnergyAI</span>
            </motion.div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#demo">Demo</NavLink>
            <NavLink href="#about">About</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-5 py-2 rounded-md font-medium hover:bg-green-700 transition duration-150 ease-in-out"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium transition duration-150 ease-in-out"
    >
      {children}
    </a>
  );
}

// Hero Section
function Hero() {
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
                Our advanced AI predicts energy usage patterns to help you reduce costs and
                environmental impact. Harness the power of machine learning for sustainable energy management.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition duration-150 ease-in-out flex items-center"
                >
                  Get Demo Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                    <div className="font-semibold text-gray-800">Energy Usage Dashboard</div>
                    <div className="text-green-600 flex items-center">
                      <span className="mr-1 text-sm">Live</span>
                      <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1 bg-gray-100 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Current Usage</div>
                      <div className="text-2xl font-bold text-gray-800">3.8 kWh</div>
                      <div className="text-green-600 text-sm mt-1">-12% from avg</div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Prediction</div>
                      <div className="text-2xl font-bold text-gray-800">21.4 kWh</div>
                      <div className="text-sm text-gray-500 mt-1">Today's total</div>
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
          <a href="#features" className="flex flex-col items-center text-green-600">
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

// Features Section with 3 AI Feature Cards
function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Powered by Advanced AI"
          subtitle="Discover how our energy prediction models can transform your energy management"
        />
        
        <div className="mt-20 grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <FeatureCard 
            icon={<BarChart3 className="h-8 w-8" />}
            color="green"
            title="Consumption Forecasting"
            description="Our AI analyzes historical data to predict future energy usage with up to 95% accuracy, helping you plan and optimize your energy needs."
          />
          
          <FeatureCard 
            icon={<Zap className="h-8 w-8" />}
            color="teal"
            title="Anomaly Detection"
            description="Automatically identify unusual energy consumption patterns to detect issues, prevent waste, and optimize system performance."
          />
          
          <FeatureCard 
            icon={<Battery className="h-8 w-8" />}
            color="emerald"
            title="Cost Optimization"
            description="Receive personalized recommendations to shift energy usage to off-peak hours and reduce your utility bills by up to 30%."
          />
        </div>
      </div>
    </section>
  );
}

// Reusable Section Header Component
function SectionHeader({ title, subtitle }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">{subtitle}</p>
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({ icon, color, title, description }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const colorClasses = {
    green: 'bg-green-100 text-green-600',
    teal: 'bg-teal-100 text-teal-600',
    emerald: 'bg-emerald-100 text-emerald-600'
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="flex flex-col items-center text-center"
    >
      <motion.div 
        whileHover={{ scale: 1.05, rotate: 5 }}
        className={`${colorClasses[color]} p-3 rounded-2xl inline-block`}
      >
        {icon}
      </motion.div>
      <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-4 text-base text-gray-600 max-w-md">{description}</p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#"
        className="mt-6 inline-flex items-center text-green-600 font-medium"
      >
        Learn more
        <ArrowRight className="ml-2 h-4 w-4" />
      </motion.a>
    </motion.div>
  );
}

// Call to Action Section
function CallToAction() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
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
            visible: { opacity: 1, transition: { duration: 0.8 } }
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
                  Get started with our demo today and see how our AI can transform your energy management strategy.
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
                        <div className="text-sm font-medium text-gray-500">Monthly Energy Savings</div>
                        <div className="text-3xl font-bold text-green-600">28.5%</div>
                      </div>
                      <div className="w-full h-32 bg-gray-100 rounded-lg mb-4"></div>
                      <div className="flex justify-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-green-600 text-white text-sm px-4 py-2 rounded-md font-medium"
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

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">EnergyAI</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Transforming energy management with intelligent AI-powered predictions and insights for a more sustainable future.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-green-400 transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Instructions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} EnergyAI. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-green-400">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}