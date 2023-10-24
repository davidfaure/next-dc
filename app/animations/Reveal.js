import each from "lodash/each"

import Animation from "classes/Animation"

import { calculate, split } from "utils/text"
import gsap from "gsap"
import { COLOR_GREEN, COLOR_WHITE } from "../utils/colors"

export default class extends Animation {
  constructor({ element }) {
    let lines = []
    const paragraphs = element.querySelectorAll("h1, h2, p")

    if (paragraphs.length !== 0) {
      each(paragraphs, element => {
        let htmlString = ""
        let pArray = element.textContent.split("")
        for (let i = 0; i < pArray.length; i++) {
          htmlString += `<span>${pArray[i]}</span>`
        }
        element.innerHTML = htmlString
      })
      lines = [...element.querySelectorAll("span")]
    } else {
      let htmlString = ""
      let pArray = element.textContent.split("")
      for (let i = 0; i < pArray.length; i++) {
        htmlString += `<span>${pArray[i]}</span>`
      }
      element.innerHTML = htmlString

      lines = [...element.querySelectorAll("span")]
    }

    super({
      element,
      elements: {
        lines
      }
    })
    this.onResize()

    if ("IntersectionObserver" in window) {
      this.animateOut()
    }
  }

  animateIn() {
    super.animateIn()

    this.timeline = gsap.timeline()
    this.timeline.to(this.elements.lines, {
      opacity: 1,
      stagger: 0.02,
      duration: 0.2,
      color: COLOR_GREEN,
      ease: "power2.out",
      delay: 0.2
    })
  }

  animateOut() {
    super.animateOut()

    gsap.to(this.elements.lines, {
      opacity: 0.1,
      duration: 0.2,
      color: COLOR_WHITE,
      ease: "power2.in"
    })
  }

  onResize() {
    this.lines = calculate(this.elements.lines)
  }
}
