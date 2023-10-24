import { map } from "lodash"
import { gsap } from "gsap"
import { Transform } from "ogl"
import Media from "./Media"

import { data } from "../../../../data"

export default class Gallery {
  constructor({ element, geometry, index, gl, scene, sizes, renderer }) {
    this.element = element
    this.elementsWrapper = element.querySelector(".home__gallery__wrapper")

    this.geometry = geometry
    this.index = index
    this.gl = gl
    this.scene = scene
    this.sizes = sizes
    this.renderer = renderer

    this.group = new Transform()

    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      velocity: 0.5,
      lerp: 0.04
    }

    this.speed = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.createMedias()
    this.group.setParent(this.scene)
  }

  createMedias() {
    this.mediasElements = this.element.querySelectorAll(".home__gallery__media")

    this.medias = map(this.mediasElements, (element, index) => {
      const text = data.gallery.find(item => item.id === Number(element.getAttribute("data-index")))

      const media = new Media({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes,
        title: text && text.title,
        subTitle: text && text.subTitle,
        renderer: this.renderer
      })

      return media
    })
  }

  onResize(event) {
    this.bounds = this.elementsWrapper.getBoundingClientRect()
    this.sizes = event.sizes

    this.width = (this.bounds.width / window.innerWidth) * this.sizes.width

    this.scroll.current = this.scroll.target = 0

    map(this.medias, media => media.onResize(event, this.scroll.current))
  }

  onTouchDown({ x, y }) {
    this.scroll.start = this.scroll.current
  }

  onTouchMove({ x, y }) {
    const distance = x.start - x.end

    this.scroll.target = this.scroll.current - distance
  }

  onTouchUp({ x, y }) {}

  update(scroll) {
    const distance = (scroll.current - scroll.target) * 0.15
    const y = scroll.current / window.innerHeight

    if (!this.bounds) return

    this.speed.current = gsap.utils.interpolate(
      this.speed.current,
      this.speed.target,
      this.speed.lerp
    )

    const velocity = 0.5

    if (this.scroll.current < this.scroll.target) {
      this.direction = "right"
      this.scroll.velocity = -velocity
    } else if (this.scroll.current > this.scroll.target) {
      this.direction = "left"
      this.scroll.velocity = velocity
    }

    this.scroll.target -= this.scroll.velocity
    this.scroll.target += distance * 0.4

    this.scroll.current = gsap.utils.interpolate(
      this.scroll.current,
      this.scroll.target,
      this.scroll.lerp
    )

    this.speed.target = (this.scroll.target - this.scroll.current) * 0.0012

    map(this.medias, media => {
      const scaleX = media.mesh.scale.x / 2
      if (this.direction === "left") {
        const x = media.mesh.position.x + scaleX

        if (x < -this.sizes.width / 2) {
          media.extra += this.width
        }
      } else if (this.direction === "right") {
        const x = media.mesh.position.x - scaleX

        if (x > this.sizes.width / 2) {
          media.extra -= this.width
        }
      }

      media.update(this.scroll.current, this.speed.current)
    })

    this.group.position.y = y * this.sizes.height
  }

  destroy() {
    this.scene.removeChild(this.group)
  }
}
