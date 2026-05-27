import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/bitgladiator",
    icon: <FiGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/KaranCodeMind",
    icon: <FiLinkedin />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/KaranSharma1020",
    icon: <FiTwitter />,
  },
];

function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 opacity-10 blur-[100px] pointer-events-none" />

      {/* Top border gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Karan Sharma</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              MERN Stack Developer & Cloud Enthusiast — I craft scalable web
              experiences and ship fast, clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="text-indigo-400 group-hover:text-white transition-colors duration-200">
                      {s.icon}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <FiMapPin className="text-indigo-400 flex-shrink-0" />
                Jammu, Jammu & Kashmir
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <FiMail className="text-indigo-400 flex-shrink-0" />
                <a
                  href="mailto:ks10204080@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  ks10204080@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <FiPhone className="text-indigo-400 flex-shrink-0" />
                +91 6005925938
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2025 Karan Sharma. All rights reserved.</p>
          <p className="text-slate-700">
            Built with{" "}
            <span className="text-indigo-500">Next.js</span> &{" "}
            <span className="text-cyan-500">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
