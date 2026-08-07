import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import GlobalBackground from "./components/GlobalBackground";

export const metadata: Metadata = {
  title: "Karan Sharma Portfolio",
  description: "MERN Stack Developer & Full-Stack Software Engineer Portfolio",
  icons: {
    icon: "/Logo-Square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className="antialiased text-white selection:bg-white selection:text-black"
        suppressHydrationWarning
      >
        <GlobalBackground />
        <div className="relative w-full flex items-center justify-center z-10">
          <Navbar />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
