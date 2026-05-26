function Footer() {
  return (
    <footer className="bg-zinc-950 text-green-400 font-mono px-6 py-10 border-t border-green-800">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-green-500">~$ whoami</p>
            <p className="text-sm mt-2 text-green-300">
              I'm a developer who crafts web experiences. From frontend flair to backend logic — I ship fast, clean code.
            </p>
          </div>
          <div>
            <p className="text-green-500">~$ ls /quick-links</p>
            <ul className="text-sm mt-2 space-y-1">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-green-500">~$ curl socials.me</p>
            <ul className="text-sm mt-2 space-y-1">
              <li><a href="https://github.com/bitgladiator" className="hover:text-white">GitHub</a></li>
              <li><a href="https://linkedin.com/in/KaranCodeMind" className="hover:text-white">LinkedIn</a></li>
              <li><a href="https://twitter.com/KaranSharma1020" className="hover:text-white">Twitter</a></li>
            </ul>
          </div>
          <div>
            <p className="text-green-500">~$ ping me</p>
            <p className="text-sm mt-2 text-green-300">Jammu,Jammu & Kashmir</p>
            <p className="text-sm text-green-300">Email: ks10204080@gmail.com</p>
            <p className="text-sm text-green-300">Phone: +91 6005925938</p>
          </div>
        </div>
        <div className="pt-6 text-center text-xs text-green-600 border-t border-green-800 mt-6">
          © 2025 ~ Built with 💻 by You
        </div>
      </div>
    </footer>
  );
}

export default Footer;
