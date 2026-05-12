import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Globe, Activity, Lock, Cpu, Network, FileCode2, Layers } from 'lucide-react';

const Skills = () => {
  const awsServices = [
    { name: 'EC2', icon: <Server className="w-5 h-5" />, level: 90 },
    { name: 'S3', icon: <Database className="w-5 h-5" />, level: 95 },
    { name: 'IAM', icon: <Shield className="w-5 h-5" />, level: 88 },
    { name: 'VPC', icon: <Network className="w-5 h-5" />, level: 85 },
    { name: 'Lambda', icon: <Cpu className="w-5 h-5" />, level: 80 },
    { name: 'RDS', icon: <Database className="w-5 h-5" />, level: 85 },
    { name: 'CloudFormation', icon: <FileCode2 className="w-5 h-5" />, level: 82 },
    { name: 'Route 53', icon: <Globe className="w-5 h-5" />, level: 78 },
    { name: 'Auto Scaling', icon: <Layers className="w-5 h-5" />, level: 86 },
    { name: 'ALB', icon: <Network className="w-5 h-5" />, level: 88 },
    { name: 'CloudFront', icon: <Globe className="w-5 h-5" />, level: 75 },
    { name: 'SNS / SES', icon: <Activity className="w-5 h-5" />, level: 80 }
  ];

  const monitoring = [
    { name: 'CloudWatch', level: 85 },
    { name: 'CloudTrail', level: 82 }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Platform Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="glass-card p-8 glow-effect h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-[#ff9900]/10 border border-[#ff9900]/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,153,0,0.15)]">
                <Cloud className="w-12 h-12 text-[#ff9900]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Platform</h3>
              <p className="text-[#ff9900] font-semibold text-xl mb-6">Amazon Web Services</p>
              
              <div className="w-full space-y-6 mt-4">
                <div className="text-left">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">Platform Mastery</span>
                    <span className="text-blue-400 font-medium">90%</span>
                  </div>
                  <div className="h-2 w-full bg-[#1a1a24] rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#ff9900] to-yellow-500 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Services Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 glass-card p-8"
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Server className="w-6 h-6 text-blue-400" />
              Core AWS Services
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {awsServices.map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[#1a1a24] border border-white/5 rounded-xl p-4 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors">{service.name}</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#0a0a0f] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${service.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-purple-400" />
                Monitoring & Logging
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {monitoring.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{item.name}</span>
                      <span className="text-purple-400 font-medium">{item.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#1a1a24] rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
