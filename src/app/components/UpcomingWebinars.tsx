'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Meta Front-End Developer',
    description: 'Professional Certificate from Meta covering HTML, CSS, JavaScript & React.',
    slug: 'meta-front-end',
  },
  {
    title: 'Google UX Design',
    description: 'User-centered design certificate from Google, focusing on usability and accessibility.',
    slug: 'google-ux-design',
  },
  {
    title: 'AWS Cloud Practitioner',
    description: 'Fundamentals of AWS cloud infrastructure and services.',
    slug: 'aws-cloud',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    description: 'FreeCodeCamp certification focused on JS problem solving and DSA.',
    slug: 'fcc-js-dsa',
  },
  {
    title: 'Responsive Web Design',
    description: 'Covers mobile-first, accessible design with HTML & CSS.',
    slug: 'fcc-responsive',
  },
  {
    title: 'Next.js & Tailwind Bootcamp',
    description: 'Advanced modern web development course with full-stack app building.',
    slug: 'nextjs-tailwind',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: 'spring',
    },
  }),
};

export default function Certificates() {
  return (
    <div className="py-16 px-6 bg-gradient-to-br from-slate-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base text-teal-400 font-semibold tracking-wide uppercase">
            Certificates
          </h2>
          <p className="mt-2 text-4xl font-bold text-white sm:text-5xl tracking-tight">
            Verified Skills & Achievements
          </p>
          <p className="mt-4 text-lg text-slate-400">
            Certifications that highlight my professional growth and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.slug}
              className="relative p-6 border border-gray-800 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-900 shadow-lg hover:shadow-2xl transition duration-300 hover:scale-[1.02] group"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition">
                {cert.title}
              </h3>
              <p className="text-slate-400 mb-4 text-sm">{cert.description}</p>
              <Link
                href={`/certificates/${cert.slug}`}
                className="inline-block mt-auto text-sm font-medium text-teal-400 hover:underline"
              >
                View Certificate →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/certificates">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900">
              View All Certificates
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
