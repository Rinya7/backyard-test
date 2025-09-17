
# Style Foundation (Base Settings) — де що лежить і як працює

## 1) Брейкпоінти, контейнер, тема Tailwind
**Файл:** `tailwind.config.ts`  
Тут налаштовано:
- `screens` (xs→3xl) — база під усі екрани.
- `container` — центрація контенту, паддінги, максимальні ширини.
- `extend.fontFamily` — зв'язка з next/font (див. нижче).
- `extend.fontSize` — типографічна шкала з керованим line-height.
- Тіні/радіуси/transition/індекси.
- Підключені плагіни: `@tailwindcss/forms`, `@tailwindcss/typography`.

## 2) Шрифти
**Файл:** `app/layout.tsx`  
Шрифти підключені через `next/font`:
- **Inter** → `--font-sans` (основний текст)
- **Manrope** → `--font-display` (заголовки)

Вони прокидаються в Tailwind через `fontFamily`:
- `font-sans` → `var(--font-sans)`
- `font-display` → `var(--font-display)`

## 3) Дизайн-токени (CSS variables), базові стилі
**Файл:** `app/globals.css`
- :root містить **темні** токени (за замовчуванням).
- `html[data-theme='light']` — **світлі** токени (для легкого перемикання теми).
- `@layer base` — базова типографіка (h1..h4, p, a, strong, small, списки), доступність (focus-visible).
- `@layer components` — утиліти `.card`, `.btn`, `.btn-primary`, `.btn-outline`, `.input`, `.container-max`.
- Вибірка (`::selection`) — акцентний колір.

## 4) Компоненти-утиліти
- `components/ui/Container.tsx` — стандартизований контейнер (`container-max`).
- `components/ui/Button.tsx` — кнопка з варіантами `primary|outline` (класи з `globals.css`).
- `components/ui/SectionHeading.tsx` — заголовок секції з акцент-лівою смужкою.

## 5) Приклади використання токенів
- Фон/текст через CSS vars: `bg-[var(--bg)]`, `text-[var(--fg)]`.
- Бордер: `border-[var(--border)]`.
- Бренд: `bg-[var(--brand)]`, `text-[var(--brand-contrast)]`.
- Тіні: `shadow-soft`, `shadow-elev-1..3`.

## 6) Тема (theme switch) — як перемкнути
```tsx
// Десь у layout або провайдері теми:
useEffect(() => {
  document.documentElement.setAttribute('data-theme', 'light') // або 'dark' (за замовч. dark)
}, [])
```

Токени миттєво підміняються без переписування класів.

## 7) Де що лежить (швидка мапа)
```
app/
  globals.css        ← токени, базова типографіка, компоненти-класи
  layout.tsx         ← підключення шрифтів (next/font), <html> оболонка
  page.tsx           ← збірка секцій Hero + WhatIsBackyard
components/
  ui/
    Button.tsx       ← кнопка (API variant)
    Container.tsx    ← контейнер (макс. ширина / паддінги)
    SectionHeading.tsx
  Hero.tsx           ← секція Hero (above-the-fold)
  Navbar.tsx         ← наліпка зверху (blur, sticky)
  WhatIsBackyard.tsx ← секція "What is Backyard?"
tailwind.config.ts    ← breakpoints, container, шрифти, типографіка, тіні, плагіни
postcss.config.mjs    ← tailwind + autoprefixer
```
— Оновлено: 2025-09-16
