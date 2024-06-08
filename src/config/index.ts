export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Elección del Editor",
        href: "#",
        imageSrc: "/nav/ui_kits/mixed.jpg",
      },
      {
        name: "Recién llegados",
        href: "#",
        imageSrc: "/nav/ui_kits/blue.jpg",
      },
      {
        name: "Más vendidos",
        href: "#",
        imageSrc: "/nav/ui_kits/purple.jpg",
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
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "Recién llegados",
        href: "#",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Iconos más vendidos",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
