import gsap from "gsap"
import { each } from "lodash"

export default class Cursor {
  constructor({ cursor, template }) {
    this.cursor = cursor
    this.template = template
    this.gallery = document.querySelectorAll(".home__gallery")

    if (this.template === "home") {
      each(this.gallery, gallery => {
        console.log("Attaching event listeners") // Log to confirm
        gallery.addEventListener("mouseover", this.onGalleryHover.bind(this))
        // gallery.addEventListener("mouseleave", this.onGalleryLeave.bind(this))
      })
    }
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

  onGalleryHover() {
    console.log("hover")
    gsap.to(this.cursor, {
      duration: 0.3,
      width: "60px",
      height: "60px",
      backgroundColor: "transparent",
      color: "green",
      textAlign: "center",
      lineHeight: "60px",
      border: "1px solid green",
      ease: "power2.out"
    })
    this.cursor.innerHTML = "Drag"
  }

  onGalleryLeave() {
    console.log("leave")
    gsap.to(this.cursor, {
      duration: 0.3,
      width: "20px",
      height: "20px",
      backgroundColor: "green",
      border: "none",
      ease: "power2.out"
    })
    this.cursor.innerHTML = ""
  }
}
