import gsap from "gsap"
import { each } from "lodash"
import { SMOOTH } from "../utils/easings"

import { bottomStartString, bottomEndString, topStartString, topEndString } from "../../data"

export default class Navigation {
  constructor() {
    this.buttonMenu = document.querySelector(".navigation__menu__wrapper")

    this.menu = document.querySelector(".navigation__menu")
    this.expandedMenu = document.querySelector(".navigation__expanded")
    this.expandedMenuWrapper = document.querySelector(".navigation__expanded__wrapper")

    this.navNumber = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__no__wrap")
    this.navName = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__name__wrap")
    this.navLi = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__wrapper")

    this.topLine = document.querySelector(".navigation__menu__burger__line__top")
    this.bottomLine = document.querySelector(".navigation__menu__burger__line__bottom")

    this.isExpanded = false
    this.isAnimating = false

    this.addEventListener()
  }

  handleMenuClick() {
    if (!this.isExpanded && !this.isAnimating) {
      this.isAnimating = true
      this.timelineIn = gsap.timeline({ onComplete: () => (this.isAnimating = false) })
      this.timelineIn
        .set([this.navNumber, this.navName], {
          y: 100,
          rotationX: -50,
          transformOrigin: "50% 50%"
        })
        .to(this.expandedMenu, {
          width: "100vw",
          height: "100vh",
          borderRadius: "0",
          top: "0",
          left: "0",
          position: "fixed",
          pointerEvents: "all",
          duration: 0.8,
          ease: SMOOTH
        })
        .to(
          this.expandedMenuWrapper,
          {
            autoAlpha: "1",
            duration: 0.2,
            ease: SMOOTH
          },
          "<+=0.6"
        )
        .to(
          [this.navNumber, this.navName],
          {
            y: 0,
            rotationX: 0,
            transformOrigin: "50% 50%",
            duration: 0.8,
            ease: SMOOTH
          },
          "<"
        )
        .to(
          this.menu,
          {
            boxShadow: "none"
          },
          0
        )

      this.isExpanded = true
      this.topLine.setAttribute("points", topEndString)
      this.bottomLine.setAttribute("points", bottomEndString)
    } else if (this.isExpanded && !this.isAnimating) {
      this.isAnimating = true

      this.timelineOut = gsap.timeline({ onComplete: () => (this.isAnimating = false) })

      this.timelineOut
        .to([this.navNumber, this.navName], {
          y: -100,
          rotationX: 50,
          transformOrigin: "50% 50%",
          duration: 0.4,
          ease: SMOOTH
        })
        .to(
          this.expandedMenu,
          {
            width: "22rem",
            height: "7rem",
            borderRadius: "4rem",
            position: "absolute",
            pointerEvents: "none",
            top: "6rem",
            left: "6rem",
            duration: 0.8,
            ease: SMOOTH
          },
          "<"
        )
        .to(this.menu, {
          boxShadow: "rgba(0, 0, 0, 0.18) 2px 2px 4px"
        })

      this.isExpanded = false

      this.topLine.setAttribute("points", topStartString)
      this.bottomLine.setAttribute("points", bottomStartString)
    }
  }

  handleLiMouseOver(e) {
    if (!this.isExpanded) return

    const hoveredLi = e.currentTarget

    gsap.to(hoveredLi, {
      opacity: 1,
      duration: 0.3,
      stagger: 0.02,
      ease: SMOOTH
    })

    this.navLi.forEach(li => {
      if (li !== hoveredLi) {
        gsap.to(li, {
          opacity: 0.2,
          duration: 0.3,
          stagger: 0.02,
          ease: SMOOTH
        })
      }
    })
  }

  handleLiMouseOut() {
    if (!this.isExpanded) return

    this.navLi.forEach(li => {
      gsap.to(li, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.02,
        ease: SMOOTH
      })
    })
  }

  addEventListener() {
    this.buttonMenu.addEventListener("click", this.handleMenuClick.bind(this))
    each(this.navLi, li => {
      li.addEventListener("mouseover", this.handleLiMouseOver.bind(this))
      li.addEventListener("mouseout", this.handleLiMouseOut.bind(this))
    })
  }
}
