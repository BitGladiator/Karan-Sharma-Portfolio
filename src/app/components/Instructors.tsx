'use client';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2023',
    title: 'Started B.Tech',
    description: 'Began my Computer Science journey with data structures and web basics.',
  },
  {
    year: '2024',
    title: 'Built MERN Stack Projects',
    description: 'Created scalable full-stack apps using MongoDB, Express, React, and Node.js.',
  },
  {
    year: '2024',
    title: 'Mastered Tailwind & Next.js',
    description: 'Built blazing fast apps with SSR, API routes, and utility-first design.',
  },
  {
    year: '2025',
    title: 'Cloud & DevOps',
    description: 'Deploying containers, automating with CI/CD, and working with AWS and Docker.',
  },
  {
    year: '2025',
    title: 'Portfolio Live',
    description: 'Launched my developer portfolio to showcase my skills, projects & certifications.',
  },
];

const glitch = `glitch-text`;

export default function TerminalTimeline() {
  return (
    <section className="relative bg-black min-h-screen py-20 px-6 font-mono text-green-400 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-700/10 to-transparent" />
        <div className="absolute inset-0 bg-[url('/scanlines.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto z-10 relative bg-[#0a0a0a]/70 backdrop-blur-md border border-green-600/20 rounded-lg p-8 shadow-[0_0_60px_#00ff95a4]">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl mb-10 text-green-400 tracking-tight"
        >
          <span className="text-[#7CFC00]">$</span> ./my-dev-journey.sh
        </motion.h2>

        <div className="space-y-8 text-sm md:text-base">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group"
            >
              <p className="text-[#00FF95] font-semibold">
                <span className="mr-2 text-white">→</span>{item.year} | {item.title}
              </p>
              <p className="text-green-300 mt-1 ml-4 group-hover:text-lime-400 transition-all duration-200">
                ↳ {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-green-500 text-lg flex items-center space-x-2">
          <span className="text-[#7CFC00]">$</span>
          <span className="w-3 h-6 bg-green-400 animate-blink" />
        </div>
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1.2s infinite step-start;
        }
      `}</style>
    </section>
  );
}
