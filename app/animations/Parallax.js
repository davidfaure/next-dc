import Animation from "classes/Animation"

import Prefix from "prefix"
import { clamp, map } from "../utils/math"
import { getOffset } from "../utils/dom"

export default class Parallax extends Animation {
  constructor({ element }) {
    super({
      element
    })
    this.element = element

    this.transform = Prefix("transform")

    this.media = element.querySelector("img")
    this.media.onload = _ => {
      this.onResize()
    }

    this.parallax = {
      current: -this.amount,
      target: -this.amount
    }

    this.scale = {
      current: 1.15,
      target: 1.15
    }

    this.onResize()
  }

  onResize() {
    this.amount = 150
    this.offset = getOffset(this.element)
  }

  update(scroll) {
    if (!this.offset) return
    const { innerHeight } = window
    const offsetBottom = scroll + innerHeight

    if (offsetBottom >= this.offset.top) {
      this.parallax = clamp(
        -this.amount,
        this.amount,
        map(this.offset.top - scroll, -this.offset.height, innerHeight, this.amount, -this.amount)
      )
      this.scale = clamp(
        1,
        1.3,
        map(this.offset.top - scroll, -this.offset.height, innerHeight, 1, 1.3)
      )

      this.media.style[
        this.transform
      ] = `translate3d(0, ${this.parallax}px, 0) scale(${this.scale})`
    } else {
      this.media.style[this.transform] = `translate3d(0, -${this.amount}px, 0) scale(1.15)`
    }
  }
}
