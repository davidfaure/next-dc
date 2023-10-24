import Prefix from "prefix"

export default class {
  constructor({ element, elements }) {
    const { animationDelay, animationTarget } = element.dataset

    this.delay = animationDelay

    this.element = element
    this.elements = elements

    this.target = animationTarget ? element.closest(animationTarget) : element
    this.transformPrefix = Prefix("transform")

    this.isVisible = false

    this.createObserver()

    this.animateOut()
  }

  createObserver() {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn()
        } else {
          this.animateOut()
        }
      })
    }).observe(this.target)
  }

  animateIn() {
    this.isVisible = true
  }

  animateOut() {
    this.isVisible = false
  }
}
