"use client";

import { cn } from "@/app/lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  ReactNode,
  ElementType,
} from "react";


const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);


export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const requestRef = useRef<number | undefined>(undefined);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    cancelAnimationFrame(requestRef.current!);

    requestRef.current = requestAnimationFrame(() => {
      const { left, top, width, height } =
        containerRef.current!.getBoundingClientRect();
      const x = ((e.clientX - left - width / 2) / width) * 20;
      const y = -((e.clientY - top - height / 2) / height) * 20;
      containerRef.current!.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
    });
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-12 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1200px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "transition-transform duration-300 ease-out will-change-transform",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};


export const CardBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full p-6 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.08)] backdrop-blur-md [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};


export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;

    ref.current.style.transform = isMouseEntered
      ? `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : `translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  }, [isMouseEntered]);

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-transform duration-300 ease-out will-change-transform",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};


export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within MouseEnterProvider");
  }
  return context;
};
