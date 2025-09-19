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
    <header className="flexBetween      ">
      {/* логотипы */}
      <Link
        href={"/"}
        aria-label="logo"
        className="flex items-center gap-[7px] pl-[7px] md:pl-[11px] pr-[24px] md:pr-[14px] py-[11px] md:py-[9px]"
      >
        <Image
          src={logoLeft}
          alt="logo"
          width={21}
          height={21}
          className="md:w-[26px] md:h-[26px]  "
        />
        <Image src={logoRight} alt="text logo" width={74} height={21} />
      </Link>
      {/* pill-навигация */}
      <nav
        aria-label="Primary"
        className="hidden md:flex  p-[3px] xl:flex-1 xl:justify-center"
      >
        <ul
          className=" flex xl:flex-1 xl:justify-center   rounded-[100px]  
            border border-[var(--nav-pill-border)]
            bg-[var(--nav-pill-bg)]"
        >
          {NAV_LINKS.map((link: NavLink) => {
            const active = isActive(link.href);
            return (
              <li
                key={link.key}
                className={[
                  "flexCenter rounded-[100px] mr-[1px] p-[9px] xl:p-[11px]   font-secondary font-medium text-[11px] xl:text-[13px] text-center  ",
                  active
                    ? "bg-[var(--nav-bg-active)] text-[var(--nav-text-active)] "
                    : "text-[var(--nav-text)] hover:bg-[var(--nav-bg-hover)] hover:text-[var(--nav-text-hover)] active:opacity-[0.2]",
                ].join(" ")}
              >
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="flex w-auto"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={
          " hidden md:inline-flex xl:hidden  md:flexCenter   rounded-[100px] p-[9px] px-[15px]  font-secondary font-medium  text-[11px] xl:text-[13px] text-center bg-[var(--nav-bg-active)] text-[var(--nav-text-active)] hover:bg-[var(--nav-bg-hover)] hover:text-[var(--nav-text-hover)] active:opacity-[0.2]"
        }
      >
        <Link href={"/"} aria-label="connect" className={"w-auto  "}>
          Connect
        </Link>
      </div>
    </header>
  );
}
