import { Mesh, Program } from "ogl"

import vertex from "../../../shaders/gallery-vertex.glsl"
import fragment from "../../../shaders/gallery-fragment.glsl"
import { gsap } from "gsap"
import Title from "./Title"
import SubTitle from "./SubTitle"

export default class {
  constructor({ element, gl, geometry, scene, sizes, title, subTitle, renderer }) {
    this.element = element
    this.gl = gl
    this.geometry = geometry
    this.scene = scene
    this.sizes = sizes
    this.title = title
    this.subTitle = subTitle
    this.renderer = renderer

    this.time = 0

    this.extra = 0

    this.createTexture()
    this.createProgram()
    this.createMesh()
    this.createTitle()
  }

  createTexture() {
    const image = this.element.querySelector("img")

    this.texture = window.TEXTURES[image.getAttribute("src")]
  }

  createProgram() {
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      fragment,
      vertex,
      uniforms: {
        tMap: { value: this.texture },
        uStrength: { value: 0 },
        uViewportSizes: {
          value: [this.sizes.width, this.sizes.height]
        },
        uTime: { value: 0 }
      }
    })
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    })

    this.mesh.setParent(this.scene)
    this.mesh.position.z -= 0.01
  }

  createTitle() {
    this.titleText = new Title({
      gl: this.gl,
      plane: this.mesh,
      renderer: this.renderer,
      text: this.title,
      sizes: this.sizes
    })

    this.subTitleText = new SubTitle({
      gl: this.gl,
      plane: this.mesh,
      renderer: this.renderer,
      text: this.subTitle,
      sizes: this.sizes
    })
  }

  createBounds({ sizes }) {
    this.sizes = sizes
    this.bounds = this.element.getBoundingClientRect()

    this.updateScale()
    this.updateX()
    this.updateY()
  }

  updateScale() {
    this.height = this.bounds.height / window.innerHeight
    this.width = this.bounds.width / window.innerWidth

    this.mesh.scale.x = this.sizes.width * this.width
    this.mesh.scale.y = this.sizes.height * this.height
  }

  updateX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth

    this.mesh.position.x =
      -this.sizes.width / 2 + this.mesh.scale.x / 2 + this.x * this.sizes.width + this.extra
  }

  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight
    this.mesh.position.y =
      this.sizes.height / 2 - this.mesh.scale.y / 2 - this.y * this.sizes.height
  }

  update(scroll, speed) {
    if (!this.bounds) return

    this.program.uniforms.uTime.value += 0.02

    this.updateX(scroll)
    this.updateY(0)

    this.program.uniforms.uStrength.value = speed

    this.titleText.update(speed)
    this.subTitleText.update(speed)
  }

  onResize(sizes, scroll) {
    this.extra = 0

    this.createBounds(sizes)
    this.updateX(scroll)
    this.updateY(0)
  }
}
