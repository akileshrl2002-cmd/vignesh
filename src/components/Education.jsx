import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Target } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative background gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="hidden md:flex flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 items-center justify-center">
              <GraduationCap className="w-12 h-12 text-blue-400" />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <div className="md:hidden w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-xl text-blue-400 font-medium">
                    Electronics & Communication Engineering
                  </p>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold self-start">
                  <Target className="w-4 h-4" />
                  <span>CGPA: 8.10 / 10</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-[#1a1a24] border border-white/5">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Government College of Engineering</p>
                    <p className="text-sm">Bodinayakanur</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-[#1a1a24] border border-white/5">
                    <Calendar className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Batch</p>
                    <p className="text-sm">2021 – 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
