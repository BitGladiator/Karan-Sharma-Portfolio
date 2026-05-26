"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
       <Link href={"/courses"}>
        <MenuItem setActive={setActive} active={active}  item="My Blogs">
         
        </MenuItem>
        </Link>

        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Me" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
