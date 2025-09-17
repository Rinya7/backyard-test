interface NavLink {
  href: string; // Ссылка на якорь или страницу
  key: string; // Уникальный ключ для каждого элемента
  label: string; // Текст, который будет отображаться
}

export const NAV_LINKS: NavLink[] = [
  { href: "/home", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "About" },
  { href: "/how_it_works", key: "how_it_works", label: "How it works" },
  { href: "/token_design", key: "token_design", label: "Token design" },
  { href: "/yard_flywheel", key: "yard_flywheel", label: "YARD flywheel" },
];
