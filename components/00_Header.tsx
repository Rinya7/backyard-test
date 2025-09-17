"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logoLeft from "@/public/logoLeft.svg";
import logoRight from "@/public/logoRight.svg";
import { NAV_LINKS } from "@/constants";

interface NavLink {
  href: string;
  key: string;
  label: string;
}

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <header className="flexBetween py-5 bg-[var(--nav-bg)] ">
      {/* логотипы */}
      <Link href={"/"} aria-label="logo" className="flex items-center gap-2">
        <div className="flex items-center gap-[7px]">
          <Image src={logoLeft} alt="logo" width={26} height={26} />
          <Image src={logoRight} alt="text logo" width={74} height={21} />
        </div>
      </Link>
      {/* pill-навигация */}
      <nav aria-label="Primary">
        <ul
          className="hidden
            md:grid grid-cols-5  gap-[10px]
             h-11 p-[3px]
            rounded-[100px]  
            border border-[var(--nav-pill-border)]
            bg-[var(--nav-pill-bg)]
          "
        >
          {NAV_LINKS.map((link: NavLink) => {
            const active = isActive(link.href);
            return (
              <li key={link.key} className="contents">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "w-full flexCenter rounded-[100px] p-[11px]   font-secondary font-medium text-[13px] text-center ",
                    active
                      ? "bg-[var(--nav-bg-active)] text-[var(--nav-text-active)] "
                      : "text-[var(--nav-text)] ",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Link
        href={"/"}
        aria-label="connect"
        className={
          "hidden md:inline-flex xl:hidden  md:flexCenter   rounded-[100px] p-[9px]   font-secondary font-medium text-[13px] text-center bg-[var(--nav-bg-active)] text-[var(--nav-text-active)] "
        }
      >
        Connect
      </Link>
    </header>
  );
}
