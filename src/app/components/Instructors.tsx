'use client';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';
import {
  HiAcademicCap,
  HiCode,
  HiLightningBolt,
  HiCloud,
  HiGlobe,
} from 'react-icons/hi';


const timeline = [
  {
    year: '2023',
    title: 'Started B.Tech',
    description:
      'Began my Computer Science journey — diving deep into data structures, algorithms, and the fundamentals of web development.',
    Icon: HiAcademicCap,
    color: 'from-violet-500 to-indigo-500',
    colorHex: '#8b5cf6',
    glow: 'rgba(139,92,246,0.35)',
    border: 'border-violet-500/25',
    bg: 'bg-violet-500/10',
    tag: 'Education',
  },
  {
    year: '2024',
    title: 'Built MERN Stack Projects',
    description:
      'Created scalable, production-ready full-stack apps using MongoDB, Express, React, and Node.js with REST APIs and JWT auth.',
    Icon: HiCode,
    color: 'from-indigo-500 to-blue-500',
    colorHex: '#6366f1',
    glow: 'rgba(99,102,241,0.35)',
    border: 'border-indigo-500/25',
    bg: 'bg-indigo-500/10',
    tag: 'Full-Stack',
  },
  {
    year: '2024',
    title: 'Mastered Tailwind & Next.js',
    description:
      'Built blazing-fast apps leveraging SSR, ISR, API routes, and utility-first design with deeply optimised Core Web Vitals.',
    Icon: HiLightningBolt,
    color: 'from-sky-500 to-cyan-400',
    colorHex: '#0ea5e9',
    glow: 'rgba(14,165,233,0.35)',
    border: 'border-sky-500/25',
    bg: 'bg-sky-500/10',
    tag: 'Frontend',
  },
  {
    year: '2025',
    title: 'Cloud & DevOps',
    description:
      'Containerised apps with Docker & Kubernetes, set up CI/CD pipelines with Jenkins, and deployed infrastructure on AWS.',
    Icon: HiCloud,
    color: 'from-fuchsia-500 to-purple-500',
    colorHex: '#d946ef',
    glow: 'rgba(217,70,239,0.35)',
    border: 'border-fuchsia-500/25',
    bg: 'bg-fuchsia-500/10',
    tag: 'DevOps',
  },
  {
    year: '2025',
    title: 'Portfolio Live',
    description:
      'Launched my developer portfolio — a living showcase of skills, real-world projects, certifications, and open-source contributions.',
    Icon: HiGlobe,
    color: 'from-emerald-400 to-teal-500',
    colorHex: '#34d399',
    glow: 'rgba(52,211,153,0.35)',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-500/10',
    tag: 'Milestone',
  },
];


function ProgressLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.15'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 28,
    restDelta: 0.001,
  });

  // Calculate top position of the indicator dot (0% to 100% dynamically)
  const indicatorPercent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const smoothPercent = useSpring(indicatorPercent, {
    stiffness: 55,
    damping: 28,
    restDelta: 0.001,
  });
  const indicatorTop = useTransform(smoothPercent, (v) => `${v}%`);

  return (
    <div
      ref={ref}
      className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-0"
    >
      {/* Background track line */}
      <div className="absolute inset-0 bg-white/[0.08] rounded-full" />
      
      {/* Active scrolling progress line */}
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
      />

      {/* Pulsing glow dot at the tip of the scrolling progress */}
      <motion.div
        style={{ top: indicatorTop }}
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 border-2 border-black z-10 shadow-[0_0_12px_#22d3ee,0_0_24px_rgba(34,211,238,0.6)]"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
      </motion.div>
    </div>
  );
}


function TimelineCard({
  item,
  index,
}: {
  item: (typeof timeline)[0];
  index: number;
}) {
  const cardRef = useRef(null);
  const isLeft = index % 2 === 0;
  const { Icon } = item;

  return (
    <div
      ref={cardRef}
      style={{ perspective: 1000 }}
      className={`relative flex flex-col md:flex-row items-stretch min-h-[160px] ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Milestone node with SVG Icon */}
      <div className="absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.1 }}
          className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-950 border-2 ${item.border} flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110`}
          style={{ 
            boxShadow: `0 0 20px ${item.glow}`,
          }}
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Column 1: Year & Tag (Desktop only) */}
      <div
        className={`hidden md:flex md:w-1/2 items-center ${
          isLeft ? 'justify-end pr-12' : 'justify-start pl-12'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 30 : -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.05 }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className={`text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${item.color} tabular-nums`}
          >
            {item.year}
          </span>
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${item.border} ${item.bg} text-white/70`}
          >
            {item.tag}
          </span>
        </motion.div>
      </div>

      {/* Column 2: Card Content (Desktop & Mobile) */}
      <div
        className={`w-full md:w-1/2 flex items-center ${
          isLeft ? 'pl-16 md:pl-12 md:pr-0' : 'pl-16 md:pr-12 md:pl-0'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 16,
            mass: 0.8
          }}
          whileHover={{
            y: -6,
            borderColor: 'rgba(255, 255, 255, 0.15)',
            boxShadow: `0 20px 40px -15px ${item.glow}`,
            transition: { duration: 0.25, ease: 'easeOut' },
          }}
          className="group relative w-full p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/40 backdrop-blur-xl overflow-hidden cursor-default transition-all duration-300"
        >
          {/* Subtle hover gradient background */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br ${item.color} rounded-2xl pointer-events-none`}
          />

          <div className="relative z-10 flex items-center justify-between mb-3">
            <h3 className="text-white font-extrabold text-lg md:text-xl leading-snug tracking-tight">
              {item.title}
            </h3>
            
            {/* Tag (Mobile only) */}
            <span
              className={`md:hidden text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${item.border} ${item.bg} text-white/70 flex-shrink-0 ml-2`}
            >
              {item.tag}
            </span>
          </div>

          {/* Year (Mobile only) */}
          <span
            className={`md:hidden inline-block mb-2 text-sm font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
          >
            {item.year}
          </span>

          <p className="relative z-10 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
            {item.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}


function ParallaxOrb({
  top,
  left,
  size,
  color,
  speed,
}: {
  top: string;
  left: string;
  size: string;
  color: string;
  speed: number;
}) {
  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, 1], [0, speed]);
 
  const y = useSpring(rawY, { stiffness: 30, damping: 25, restDelta: 0.001 });

  return (
    <motion.div
      style={{ top, left, width: size, height: size, y }}
      className={`absolute rounded-full blur-[120px] opacity-[0.15] pointer-events-none ${color}`}
    />
  );
}


export default function DevJourney() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  
  const rawHeadingY = useTransform(scrollYProgress, [0, 0.35], [50, 0]);
  const headingY = useSpring(rawHeadingY, { stiffness: 50, damping: 24 });
  const headingOpacity = useTransform(scrollYProgress, [0, 0.18], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-28 px-6 overflow-hidden"
    >
    
      <ParallaxOrb top="0%"  left="5%"  size="480px" color="bg-violet-600" speed={-90} />
      <ParallaxOrb top="35%" left="65%" size="400px" color="bg-cyan-600"   speed={-140} />
      <ParallaxOrb top="68%" left="15%" size="320px" color="bg-fuchsia-600" speed={-65} />

   
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

       
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400 mb-4"
          >
            Career Milestones
          </motion.p>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            My{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Dev Journey
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full origin-left"
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="text-slate-400 mt-5 max-w-xl mx-auto text-sm md:text-base"
          >
            From writing my first line of code to shipping distributed systems —
            every milestone that shaped me as a developer.
          </motion.p>
        </motion.div>

      
        <div className="relative">
          <ProgressLine />

          <div className="space-y-16 md:space-y-20">
            {timeline.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} />
            ))}
          </div>

         
      
        </div>

      </div>
    </section>
  );
}
