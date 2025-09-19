import drop from "@/public/feat-drop.png";
import plant from "@/public/feat-plant.png";
import coin from "@/public/feat-coin.png";

interface NavLink {
  href: string; // Ссылка на якорь или страницу
  key: string; // Уникальный ключ для каждого элемента
  label: string; // Текст, который будет отображаться
  active?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { href: "/home", key: "home", label: "Home", active: true },
  { href: "/about", key: "about", label: "About" },
  { href: "/how_it_works", key: "how_it_works", label: "How it works" },
  { href: "/token_design", key: "token_design", label: "Token design" },
  { href: "/yard_flywheel", key: "yard_flywheel", label: "YARD flywheel" },
];

export const FEATURES = [
  {
    pill: "Yield Aggregator",
    title: "One-click yield aggregation",
    body: "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
    image: drop,
  },
  {
    pill: "Yield-backed Stablecoin",
    title: "Unlock liquidity with BYD",
    body: "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
    image: plant,
  },
  {
    pill: "Boost DeFi Liquidity",
    title: "Boost protocols, earn more",
    body: "Your liquidity empowers DeFi — vote for pools, earn bribes, maximize rewards",
    image: coin,
  },
];
