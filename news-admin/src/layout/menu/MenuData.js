const menu = [
  {
    icon: "dashboard-fill",
    text: "Dashboard",
    link: "",
  },
  {
    icon: "tile-thumb-fill",

    text: "News",
    link: "/ecommerce/newslist",
    subMenu: [
      {
        text: "All News",
        link: "/ecommerce/newslist",
      },
      {
        text: "Sport News",
        link: "/ecommerce/sportlist",
      },
      {
        text: "Tech News",
        link: "/ecommerce/techlist",
      },
      {
        text: "Gallery News",
        link: "/ecommerce/gallerylist",
      },
    ],
  },


];
export default menu;
