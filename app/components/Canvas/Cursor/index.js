import { Polyline, Vec3, Color } from "ogl"

import vertex from "../../../shaders/cursor-vertex.glsl"
import { cursorColor } from "../../../../data"
import { each } from "lodash"
import { randomize } from "../../../utils/math"

export default class {
  constructor({ gl, scene, sizes, renderer, camera }) {
    this.gl = gl
    this.scene = scene
    this.sizes = sizes
    this.renderer = renderer
    this.camera = camera

    this.count = 20
    this.lines = []
    this.mouseVelocity = new Vec3()
    this.mouse = new Vec3()
    this.tmp = new Vec3()

    this.createPolyline()
    this.onResize()
  }

  createPolyline() {
    each(cursorColor, (color, i) => {
      const line = {
        spring: randomize(0.02, 0.06),
        friction: randomize(0.7, 0.95),
        mouseVelocity: new Vec3(),
        mouseOffset: new Vec3(randomize(-1, 1) * 0.005)
      }
      this.points = line.points = []

      for (let i = 0; i < this.count; i++) this.points.push(new Vec3())
      line.polyline = new Polyline(this.gl, {
        points: this.points,
        vertex,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: randomize(10, 20) }
        }
      })

      line.polyline.mesh.position.z += 0.1
      line.polyline.mesh.setParent(this.scene)
      each(this.lines, l => l.polyline.resize())
      this.lines.push(line)
    })
  }

  onMouseMove(e) {
    this.mouse.set(
      (e.x.end / this.renderer.width) * 2 - 1,
      (e.y.end / this.renderer.height) * -2 + 1,
      0
    )
  }

  onResize() {
    if (this.lines) each(this.lines, line => line.polyline.resize())
  }

  update() {
    each(this.lines, line => {
      for (let i = line.points.length - 1; i >= 0; i--) {
        if (!i) {
          this.tmp.copy(this.mouse).add(line.mouseOffset).sub(line.points[i]).multiply(line.spring)
          line.mouseVelocity.add(this.tmp).multiply(line.friction)
          line.points[i].add(line.mouseVelocity)
        } else {
          line.points[i].lerp(line.points[i - 1], 0.9)
        }
      }
      line.polyline.updateGeometry()
    })
  }
}
