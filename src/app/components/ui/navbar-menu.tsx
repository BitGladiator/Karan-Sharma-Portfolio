"use client";
import React from "react";
import { motion,Transition } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative px-2 transition-all duration-200 hover:scale-[1.04]"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-base font-medium text-black dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white/90 dark:bg-black/90 backdrop-blur-lg rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl ring-1 ring-white/10"
              >
                <motion.div layout className="w-max h-full p-4 space-y-2">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative z-10 rounded-full border border-white/10 dark:border-white/20 bg-white/60 dark:bg-black/50 backdrop-blur-md shadow-xl flex justify-center space-x-6 px-10 py-6 transition-all duration-300"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link
      href={href}
      className="flex space-x-3 hover:scale-[1.02] transition-transform"
    >
      <Image
        src={src}
        width={120}
        height={60}
        alt={title}
        className="flex-shrink-0 rounded-xl shadow-lg ring-1 ring-black/10 dark:ring-white/10"
      />
      <div>
        <h4 className="text-lg font-semibold text-black dark:text-white mb-1">
          {title}
        </h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-[10rem] leading-snug">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-cyan-300 transition-colors font-medium"
    >
      {children}
    </Link>
  );
};
