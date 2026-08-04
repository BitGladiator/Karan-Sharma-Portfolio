import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
        className="antialiased bg-[#070709] text-white selection:bg-white selection:text-black"
        suppressHydrationWarning
      >
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
