import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Clock } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      status: "completed",
      icon: <Award className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Cloud Application Development",
      issuer: "Currently Pursuing",
      status: "in-progress",
      icon: <Clock className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 flex items-start gap-6 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex-shrink-0 p-4 bg-[#1a1a24] rounded-2xl border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors">
                {cert.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {cert.title}
                </h3>
                <p className="text-gray-400 font-medium mb-4">{cert.issuer}</p>
                
                <div className="flex items-center gap-2">
                  {cert.status === 'completed' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Clock className="w-3.5 h-3.5" />
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
