import { Archivo } from "next/font/google";
import localFont from "next/font/local";

// Archivo (Google) — як “base/primary”
export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
});

// Konnect (TTF)
export const konnect = localFont({
  src: [
    { path: "./fonts/Konnect-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Konnect-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-konnect",
  display: "swap",
});

// Gilroy (TTF)
export const gilroyMedium = localFont({
  src: [{ path: "./fonts/Gilroy-Medium.ttf", weight: "500", style: "normal" }],
  variable: "--font-gilroy-medium",
  display: "swap",
});
export const gilroySemi = localFont({
  src: [
    { path: "./fonts/Gilroy-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-gilroy-semibold",
  display: "swap",
});
