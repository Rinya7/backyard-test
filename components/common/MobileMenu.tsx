"use client";

import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { isPathActive } from "@/utils/isPathActive";
import { usePathname } from "next/navigation";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  top?: number;
};

export default function MobileMenu({ open, onOpenChange, top = 64 }: Props) {
  const pathname = usePathname();
  const GAP = 20;
  // Esc
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange(false);
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onOpenChange]);

  return (
    <div className="md:hidden">
      {/* Триггер: бургер / крест */}
      <button
        onClick={() => onOpenChange(!open)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-neutral-900/90 text-white shadow-sm"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div
              className="fixed z-[70] left--1/2 -translate-x-3/4"
              style={{ top: top + GAP }}
            >
              <motion.div
                className="
    relative
    rounded-[19px]
    border border-[#e4e4e9]
    bg-[#e8e9ed]/90
    backdrop-blur-[9.3px]
    shadow-2xl
    pt-[13px] pr-0 pb-[15px] pl-[16px]
  "
                // ширина по контенту: минимум как в фигме, но не шире экрана − 32px
                style={{ width: "min(176px, calc(100vw - 32px))" }}
                initial={{ y: -8, opacity: 0.6 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0.6 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
              >
                {/* список */}
                <nav className="space-y-[14px] text-[14px] leading-[20px]">
                  {NAV_LINKS.map((l) => {
                    const active = isPathActive(pathname, l.href);
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => onOpenChange(false)}
                        aria-current={active ? "page" : undefined}
                        className={
                          active
                            ? "block text-neutral-900 font-semibold"
                            : "block text-neutral-500 hover:text-neutral-900"
                        }
                      >
                        {l.label}
                      </Link>
                    );
                  })}
                </nav>

                <button
                  onClick={() => onOpenChange(false)}
                  className="
    font-secondary  
      mt-[16px]
      w-[calc(100%-16px)]    
      ml-[0px]              
      rounded-full
       
      py-[10px]
      text-[14px] font-semibold text-center
                        bg-[var(--nav-bg-active)] text-[var(--nav-text-active)]
                        hover:bg-[var(--nav-bg-hover)] hover:text-[var(--nav-text-hover)] active:opacity-[0.2]
    "
                >
                  Connect
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
