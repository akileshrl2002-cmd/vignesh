import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Box, Server, Database, Network } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Projects = () => {
  const project = {
    title: "AWS 3-Tier Web Application Architecture",
    description: "Production-grade, highly available, and scalable cloud architecture designed following AWS Well-Architected Framework principles.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop",
    techStack: ["AWS VPC", "EC2", "RDS", "ALB", "Auto Scaling", "S3", "CloudWatch", "Route 53", "ACM"],
    features: [
      "Configured public/private subnets across multiple AZs",
      "Implemented Security Groups and NACLs",
      "Deployed EC2 behind ALB with Auto Scaling",
      "Configured Multi-AZ Amazon RDS",
      "Integrated Route 53 + SSL/TLS using ACM",
      "Built CloudWatch monitoring dashboards",
      "Secured S3 assets with encryption policies"
    ],
    links: {
      github: "#",
      architecture: "#"
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card overflow-hidden group"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-20"></div>
              
              {/* Floating tech icons over image */}
              <div className="absolute bottom-6 left-6 z-30 flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-blue-400" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-purple-400" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <Network className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
                {project.description}
              </p>

              <div className="mb-8 relative z-10">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 flex flex-wrap gap-2 relative z-10">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 relative z-10 mt-auto">
                <a 
                  href={project.links.github}
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all hover:-translate-y-1"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                <a 
                  href={project.links.architecture}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-white font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1"
                >
                  <Box className="w-5 h-5" />
                  <span>Architecture</span>
                </a>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
