"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import logoLeft from "@/public/logoLeft.svg";
import logoRight from "@/public/logoRight.svg";
import { NAV_LINKS } from "@/constants";
import MobileMenu from "./common/MobileMenu";
import { isPathActive } from "@/utils/isPathActive";

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerH, setHeaderH] = useState(64);

  useEffect(() => {
    if (!menuOpen) return;
    const body = document.body;
    const html = document.documentElement;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    const prevOverscroll = html.style.overscrollBehavior;
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbarW > 0) body.style.paddingRight = `${scrollbarW}px`;
    html.style.overscrollBehavior = "none";
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
      html.style.overscrollBehavior = prevOverscroll;
    };
  }, [menuOpen]);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderH(el.getBoundingClientRect().height);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <header
      ref={headerRef}
      id="site-header"
      className="flexBetween relative z-50"
    >
      {/* лого */}
      <Link
        href="/"
        aria-label="logo"
        className={[
          "flex items-center gap-[7px] pl-[7px] md:pl-[11px] pr-[24px] md:pr-[14px] py-[11px] md:py-[9px] rounded-[999px]",
          menuOpen ? "bg-[rgba(236,236,240,0.3)]" : "",
        ].join(" ")}
      >
        <Image
          src={logoLeft}
          alt="logo"
          width={21}
          height={21}
          className="md:w-[26px] md:h-[26px]"
        />
        <Image src={logoRight} alt="text logo" width={74} height={21} />
      </Link>

      {/* pill-навігація */}
      <div className="hidden md:flex xl:flex-1 xl:justify-center xl:w-auto">
        <nav aria-label="Primary" className="p-[3px]">
          <ul className="flex xl:flex-1 xl:justify-center rounded-[100px] border border-[var(--nav-pill-border)] bg-[var(--nav-pill-bg)]">
            {NAV_LINKS.map((link) => {
              const active = isPathActive(pathname, link.href);
              return (
                <li
                  key={link.key}
                  className={[
                    "flexCenter rounded-[100px] mr-[1px] p-[9px] xl:p-[11px] font-secondary font-medium text-[11px] xl:text-[13px] text-center",
                    active
                      ? "bg-[var(--nav-bg-active)] text-[var(--nav-text-active)]"
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
      </div>

      <div className="flex items-center gap-3 pr-2">
        <div
          className="hidden md:inline-flex xl:hidden md:flexCenter rounded-[100px] p-[9px] px-[15px]
                        font-secondary font-medium text-[11px] xl:text-[13px] text-center
                        bg-[var(--nav-bg-active)] text-[var(--nav-text-active)]
                        hover:bg-[var(--nav-bg-hover)] hover:text-[var(--nav-text-hover)] active:opacity-[0.2]"
        >
          <Link href="/" aria-label="connect" className="w-auto">
            Connect
          </Link>
        </div>

        <div className="md:hidden">
          <MobileMenu
            open={menuOpen}
            onOpenChange={setMenuOpen}
            top={headerH}
          />
        </div>
      </div>
    </header>
  );
}
