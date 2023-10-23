import Page from "components/Page"

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
        gallery: document.querySelectorAll(".home__gallery")
      }
    })
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
}
