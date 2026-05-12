import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Cloud, Server, Database, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] animate-blob animation-delay-4000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Available for New Opportunities</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-gradient">Vignesh A</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                AWS Cloud Engineer
              </h2>
              
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Designing scalable, secure, and highly available cloud infrastructure on AWS.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-white font-medium flex items-center space-x-2 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium flex items-center space-x-2 transition-all hover:-translate-y-1 backdrop-blur-sm"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Avatar Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 glow-effect rounded-full z-20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-indigo-500 p-1">
                <div className="h-full w-full rounded-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                  {/* Placeholder Avatar - Replace src with actual image */}
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
                    alt="Vignesh A"
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass-card p-4 rounded-2xl z-30 flex items-center space-x-3"
            >
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Cloud className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">AWS</p>
                <p className="text-xs text-gray-400">Certified</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-4 glass-card p-4 rounded-2xl z-30 flex items-center space-x-3"
            >
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Infrastructure</p>
                <p className="text-xs text-gray-400">Scalable</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 right-12 glass-card p-4 rounded-2xl z-30 flex items-center space-x-3"
            >
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Security</p>
                <p className="text-xs text-gray-400">First</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
