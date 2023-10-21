import { gsap } from "gsap"
import { Texture } from "ogl"
import Prefix from "prefix"

import Component from "classes/Component"
import { split } from "../utils/text"
import { each } from "lodash"
import { SMOOTH } from "../utils/easings"

export default class extends Component {
  constructor({ canvas }) {
    super({
      classes: {},
      element: ".preloader",
      elements: {
        title: ".preloader__text",
        number: ".preloader__number",
        numberText: ".preloader__number__text"
      }
    })

    this.canvas = canvas

    this.counter = 0

    this.transformPrefix = Prefix("transform")

    window.TEXTURES = {}

    this.elements.spans = split({
      append: true,
      element: this.elements.title,
      expression: "<br>"
    })

    each(this.elements.spans, element => {
      split({
        append: false,
        element,
        expression: ""
      })
    })

    this.createLoader()
  }

  createLoader() {
    this.animateIn = gsap.timeline()

    this.animateIn.set(this.elements.title, {
      autoAlpha: 1
    })

    each(this.elements.spans, (line, index) => {
      const letters = document.querySelectorAll("span")

      const onStart = _ => {
        gsap.fromTo(
          letters,
          {
            autoAlpha: 0,
            display: "inline-block",
            y: "100%"
          },
          {
            autoAlpha: 1,
            delay: 0.2,
            display: "inline-block",
            duration: 1,
            ease: "back.inOut",
            stagger: 0.015,
            y: "0%"
          }
        )
      }

      this.animateIn.fromTo(
        line,
        {
          autoAlpha: 0,
          y: "100%"
        },
        {
          autoAlpha: 1,
          delay: 0.2 * index,
          duration: 1.5,
          onStart,
          ease: "expo.inOut",
          y: "0%"
        },
        "start"
      )
    })

    this.animateIn.call(_ => {
      each(window.ASSETS, image => {
        const texture = new Texture(this.canvas.gl, {
          generateMipmaps: false
        })

        const media = new Image()

        media.crossOrigin = "anonymous"
        media.src = image
        media.onload = _ => {
          texture.image = media

          this.onAssetLoaded()
        }

        window.TEXTURES[image] = texture
      })
    })
  }

  onAssetLoaded() {
    this.counter += 1

    const percent = this.counter / window.ASSETS.length

    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`

    if (percent === 1) {
      this.onComplete()
    }
  }

  onComplete() {
    return new Promise(() => {
      this.animateOut = gsap.timeline({
        delay: 1
      })

      each(this.elements.spans, (line, index) => {
        const letters = line.querySelectorAll("span")

        const onStart = _ => {
          gsap.to(letters, {
            autoAlpha: 0,
            delay: 0.2,
            display: "inline-block",
            duration: 1,
            ease: "back.inOut",
            stagger: 0.015,
            y: "-100%"
          })
        }

        this.animateOut.to(
          line,
          {
            autoAlpha: 0,
            delay: 0.2 * index,
            duration: 1.5,
            onStart,
            ease: "expo.inOut",
            y: "-100%"
          },
          "start"
        )
      })

      this.animateOut.to(
        this.elements.numberText,
        {
          autoAlpha: 0,
          duration: 1,
          ease: SMOOTH
        },
        "start"
      )

      this.animateOut.to(this.element, {
        autoAlpha: 0,
        duration: 1
      })

      this.animateOut.call(() => {
        this.emit("complete")
      })
    })
  }

  destroy() {
    this.element.parentNode.removeChild(this.element)
  }
}
