import gsap from "gsap"
import { each } from "lodash"
import { SMOOTH } from "../utils/easings"

export default class Cursor {
  constructor({ cursor, template }) {
    this.cursor = cursor
    this.template = template

    this.initEvents()
  }

  initEvents() {
    if (this.template !== "home") return

    const buttonItems = document.querySelectorAll('[data-animation="cursor"]')
    const galleryItems = document.querySelectorAll(".home__gallery")
    const linkItems = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__wrapper")
    const hero = document.querySelector(".home__hero")

    each(galleryItems, gallery => {
      gallery.addEventListener("mouseover", () =>
        this.onHover({ type: "gallery", action: "enter" })
      )
      gallery.addEventListener("mouseleave", () =>
        this.onHover({ type: "gallery", action: "leave" })
      )
    })

    each(buttonItems, button => {
      button.addEventListener("mouseover", () => this.onHover({ type: "button", action: "enter" }))
      button.addEventListener("mouseleave", () => this.onHover({ type: "button", action: "leave" }))
    })

    each(linkItems, link => {
      link.addEventListener("mouseover", () => this.onHover({ type: "link", action: "enter" }))
      link.addEventListener("mouseleave", () => this.onHover({ type: "link", action: "leave" }))
    })

    hero.addEventListener("mouseover", () => this.onHover({ type: "hero", action: "enter" }))
    hero.addEventListener("mouseleave", () => this.onHover({ type: "hero", action: "leave" }))
  }

  handleCursorMove(event) {
    const { clientX: x, clientY: y } = event

    gsap.to(this.cursor, {
      duration: 0.3,
      left: x,
      top: y,
      ease: "power2.out"
    })
  }

  onHover({ type, action }) {
    const configs = {
      button: {
        enter: {
          styles: {
            width: "4rem",
            height: "4rem",
            backgroundColor: "#2baf50",
            border: "none"
          },
          text: ""
        },
        leave: {
          styles: {
            width: "1rem",
            height: "1rem",
            backgroundColor: "#2baf50",
            border: "none"
          },
          text: ""
        }
      },
      gallery: {
        enter: {
          styles: {
            width: "12rem",
            height: "12rem",
            backgroundColor: "#2baf50",
            color: "#fff",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "500",
            lineHeight: "12rem"
          },
          text: "Drag"
        },
        leave: {
          styles: {
            width: "1rem",
            height: "1rem",
            backgroundColor: "#2baf50",
            border: "none"
          },
          text: ""
        }
      },
      link: {
        enter: {
          styles: {
            width: "12rem",
            height: "12rem",
            backgroundColor: "#2baf50",
            color: "#fff",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "500",
            lineHeight: "12rem"
          },
          text: "Go"
        },
        leave: {
          styles: {
            width: "1rem",
            height: "1rem",
            backgroundColor: "#2baf50",
            border: "none"
          },
          text: ""
        }
      },
      hero: {
        enter: {
          styles: {
            width: "1rem",
            height: "1rem",
            backgroundColor: "#FFF",
            border: "none"
          },
          text: ""
        },
        leave: {
          styles: {
            width: "1rem",
            height: "1rem",
            backgroundColor: "#2baf50",
            border: "none"
          },
          text: ""
        }
      }
    }

    const config = configs[type][action]

    gsap.to(this.cursor, {
      duration: 0.3,
      ...config.styles,
      ease: SMOOTH
    })

    this.cursor.innerHTML = config.text
  }
}
