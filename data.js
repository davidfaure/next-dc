const data = {
  hero: {
    title: "From the ground to your plate",
    image: "/img/hero.jpg"
  },
  description: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: "/img/main.jpg"
  },
  gallery: [
    {
      id: 1,
      image: "/img/gallery-1.jpg",
      title: "Pesto verde basilic roquette",
      subTitle: "200ml"
    },
    {
      id: 2,
      image: "/img/gallery-2.jpg",
      title: "Coffee bean",
      subTitle: "250ml"
    },
    {
      id: 3,
      image: "/img/gallery-3.jpg",
      title: "Sunny vegetables",
      subTitle: "400ml"
    },
    {
      id: 4,
      image: "/img/gallery-4.jpg",
      title: "Tomatos",
      subTitle: "350ml"
    }
  ],
  quote: {
    text: "We true believe in the future food habits",
    image: "/img/quote.jpg"
  },
  footer: {
    text: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    link: [
      {
        id: 1,
        href: "/about",
        text: "About us"
      },
      {
        id: 2,
        href: "/products",
        text: "Products"
      },
      {
        id: 3,
        href: "/approach",
        text: "Approach"
      },
      {
        id: 4,
        href: "/contact",
        text: "Contacts"
      }
    ],
    socials: [
      {
        id: 1,
        href: "https://www.facebook.com/?locale=fr_FR",
        text: "Facebook"
      },
      {
        id: 2,
        href: "https://www.instagram.com/",
        text: "Instagram"
      }
    ]
  }
}

module.exports = { data }
