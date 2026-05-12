import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, TrendingDown, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      title: "Infrastructure Automation",
      description: "Automating deployments with CloudFormation, Terraform, and CI/CD pipelines to ensure consistent environments."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: "Cloud Security",
      description: "Implementing least-privilege IAM policies, Security Groups, NACLs, and continuous monitoring via CloudTrail."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-green-400" />,
      title: "Cost Optimization",
      description: "Analyzing AWS usage to right-size EC2 instances, utilize Spot Instances, and manage S3 lifecycle policies."
    },
    {
      icon: <Cpu className="w-6 h-6 text-orange-400" />,
      title: "High Availability",
      description: "Designing fault-tolerant architectures across multiple AZs utilizing Auto Scaling and Elastic Load Balancing."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed glass-card p-8 rounded-2xl relative overflow-hidden text-left md:text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            Results-driven AWS Cloud Engineer with hands-on experience designing and deploying scalable, highly available cloud infrastructure on AWS. Proficient in EC2, VPC, S3, IAM, RDS, Lambda, CloudFormation, and Linux administration. Passionate about building robust backend architectures and optimizing cloud operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 glow-effect group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#1a1a24] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
