import { motion } from "framer-motion";
import {
  Award,
  Users,
  Calendar,
  Code,
} from "lucide-react";

// Hackathon Section
function HackathonSection() {
    return (
      <section
        id="hackathon"
        className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                LTIMindTree Hackathon 2025
              </h2>
              <p className="text-green-100 mb-6">
                EnergyAI was conceived and developed during the 48-hour
                LTIMindTree Sustainable Technology Hackathon in March 2025. The
                event brought together over 300 teams worldwide to tackle pressing
                environmental challenges using cutting-edge technology.
              </p>
              <p className="text-green-100 mb-6">
                Our team was challenged to create an innovative solution for
                energy efficiency in smart buildings. We combined our expertise in
                machine learning, data analytics, and UI/UX design to develop a
                comprehensive energy prediction and optimization platform.
              </p>
              <p className="text-green-100">
                After two sleepless nights and countless cups of coffee, we
                presented EnergyAI to a panel of industry experts and were honored
                to win first place in the "AI for Sustainability" track.
              </p>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-12 lg:mt-0"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <Award className="h-10 w-10 text-yellow-300 mr-3" />
                  <h3 className="text-2xl font-bold">Hackathon Statistics</h3>
                </div>
  
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-green-200" />
                      <div>
                        <div className="text-sm text-green-200">Date</div>
                        <div className="font-semibold">March 15-17, 2025</div>
                      </div>
                    </div>
                  </div>
  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-green-200" />
                      <div>
                        <div className="text-sm text-green-200">Participants</div>
                        <div className="font-semibold">300+ Teams</div>
                      </div>
                    </div>
                  </div>
  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center">
                      <Code className="h-5 w-5 mr-3 text-green-200" />
                      <div>
                        <div className="text-sm text-green-200">Challenge</div>
                        <div className="font-semibold">
                          AI for Sustainable Energy
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-3 text-green-200" />
                      <div>
                        <div className="text-sm text-green-200">Result</div>
                        <div className="font-semibold">1st Place Winner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
  
  export default HackathonSection;