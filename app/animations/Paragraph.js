import each from "lodash/each"

import Animation from "classes/Animation"

import { calculate, split } from "utils/text"
import gsap from "gsap"

export default class extends Animation {
  constructor({ element }) {
    const lines = []
    const paragraphs = element.querySelectorAll("h1, h2, p")

    if (paragraphs.length !== 0) {
      each(paragraphs, element => {
        split({ element })
        split({ element })

        lines.push(...element.querySelectorAll("span span"))
      })
    } else {
      split({ element })
      split({ element })

      lines.push(...element.querySelectorAll("span span"))
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

    this.timelineIn = gsap.timeline({ delay: 0.5 })

    this.timelineIn.set(this.element, { autoAlpha: 1 })

    each(this.lines, line => {
      this.timelineIn.fromTo(
        line,
        {
          autoAlpha: 0,
          y: "100%"
        },
        {
          autoAlpha: 1,
          duration: 1.4,
          stagger: 0.06,
          ease: "expo.out",
          y: "0%"
        },
        0
      )
    })
  }

  animateOut() {
    super.animateOut()

    gsap.set(this.lines, { autoAlpha: 0 })
  }

  onResize() {
    this.lines = calculate(this.elements.lines)
  }
}
