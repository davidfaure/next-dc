import { Transform, Plane } from "ogl"
import { map } from "lodash"
import Gallery from "./Gallery"

export default class {
  constructor({ gl, scene, sizes, renderer, camera }) {
    this.gl = gl
    this.scene = scene
    this.sizes = sizes
    this.renderer = renderer
    this.camera = camera

    this.group = new Transform()

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      lerp: 0.1,
      velocity: 1
    }

    this.speed = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.createGeometry()
    this.createGallery()

    this.group.setParent(scene)
  }

  createGeometry() {
    this.geometry = new Plane(this.gl, {
      heightSegments: 20,
      widthSegments: 20
    })
  }

  createGallery() {
    this.galleriesElement = document.querySelectorAll(".home__gallery")

    this.galleries = map(
      this.galleriesElement,
      (element, index) =>
        new Gallery({
          element,
          geometry: this.geometry,
          index,
          gl: this.gl,
          scene: this.group,
          sizes: this.sizes,
          renderer: this.renderer
        })
    )
  }

  /**
   * Animations.
   */

  onResize(event) {
    map(this.galleries, gallery => gallery.onResize(event))
  }

  onTouchDown(event) {
    map(this.galleries, gallery => gallery.onTouchDown(event))
  }

  onTouchMove(event) {
    map(this.galleries, gallery => gallery.onTouchMove(event))
  }

  onTouchUp(event) {
    map(this.galleries, gallery => gallery.onTouchUp(event))
  }

  update(scroll) {
    map(this.galleries, gallery => gallery.update(scroll))
  }

  destroy() {
    map(this.galleries, gallery => gallery.destroy())
  }
}
