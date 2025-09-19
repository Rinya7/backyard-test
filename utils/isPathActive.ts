// utils/isPathActive.ts
export const isPathActive = (pathname: string, href: string) => {
  const norm = (p: string) => (p === "" ? "/" : p.replace(/\/+$/, "") || "/");
  const a = norm(pathname);
  const b = norm(href);
  if (b === "/") return a === "/";
  return a === b || a.startsWith(b + "/");
};
