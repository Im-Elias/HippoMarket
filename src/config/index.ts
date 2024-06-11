export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui-kits" as const,
    featured: [
      {
        name: "Elección del Editor",
        href: "#",
        imageSrc: "/nav/ui-kits/mixed.webp",
      },
      {
        name: "Recién llegados",
        href: "#",
        imageSrc: "/nav/ui-kits/blue.webp",
      },
      {
        name: "Más vendidos",
        href: "#",
        imageSrc: "/nav/ui-kits/purple.webp",
      },
    ],
  },
  {
    label: "Iconos",
    value: "icons" as const,
    featured: [
      {
        name: "Iconos favoritos",
        href: "#",
        imageSrc: "/nav/icons/picks.webp",
      },
      {
        name: "Recién llegados",
        href: "#",
        imageSrc: "/nav/icons/new.webp",
      },
      {
        name: "Iconos más vendidos",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.webp",
      },
    ],
  },
];
