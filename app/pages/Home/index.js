import Page from "components/Page"
import gsap from "gsap"
import { lerp } from "utils/math"

export default class extends Page {
  constructor() {
    super({
      classes: {
        active: "home--active"
      },
      element: ".home",
      elements: {
        wrapper: ".home__content",
        scroll: document.querySelector(".progress__bar"),
        gallery: document.querySelectorAll(".home__gallery"),
        quoteImg: document.querySelector(".home__quote__media__image"),
        quoteSection: document.querySelector(".home__quote"),
        quoteSticky: document.querySelector(".home__quote__sticky")
      }
    })

    this.isSticky = false
    this.currentProgress = 0
    this.quoteBounds = document.querySelector(".home__quote").getBoundingClientRect()
  }

  /**
   * Animations.
   */
  async show(url) {
    this.element.classList.add(this.classes.active)

    return super.show(url)
  }

  async hide(url) {
    this.element.classList.remove(this.classes.active)

    return super.hide(url)
  }

  update(scroll) {
    // console.log(
    //   "update HOME",
    //   scroll.current,
    //   this.quoteBounds.top - this.quoteBounds.height,
    //   this.quoteBounds.bottom - this.quoteBounds.height
    // )

    const tweenUp = gsap.to(this.elements.quoteImg, {
      scale: 1,
      ease: "expo",
      paused: true
    })

    const tweenDown = gsap.to(this.elements.quoteImg, {
      scale: 0.2,
      ease: "expo",
      paused: true
    })

    const start = (this.quoteBounds.top - this.quoteBounds.height) * 1.1
    const end = (this.quoteBounds.bottom - this.quoteBounds.height) * 1.2

    if (start < scroll.current && end > scroll.current) {
      const targetProgress = ((start - scroll.current) / (start - end)) * 0.05
      this.currentProgress = lerp(this.currentProgress, targetProgress, 0.02)
      // console.log("je suis dans la section", this.currentProgress)
      tweenUp.progress(this.currentProgress)
    } else {
      const targetProgress = ((start - scroll.current) / (start - end)) * 0.001
      this.currentProgress = lerp(this.currentProgress, targetProgress, 0.01)
      // console.log("je suis dans la section", this.currentProgress)
      tweenDown.progress(this.currentProgress)
    }
    super.update()
  }
}
