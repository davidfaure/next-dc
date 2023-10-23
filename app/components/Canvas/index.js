import { Box, Camera, Renderer, Transform, Program, Mesh } from "ogl"
import Home from "./Home"
import Cursor from "./Cursor"

export default class {
  constructor({ url }) {
    this.url = url

    this.x = {
      start: 0,
      distance: 0,
      end: 0
    }

    this.y = {
      start: 0,
      distance: 0,
      end: 0
    }

    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2)
    })

    this.gl = this.renderer.gl
    this.gl.clearColor(0, 0, 0, 0)

    document.body.appendChild(this.gl.canvas)

    this.createCamera()
    this.createScene()
    this.createCursor()

    this.onResize()
  }

  createCamera() {
    this.camera = new Camera(this.gl)
    this.camera.fov = 45
    this.camera.position.z = 5
  }

  createScene() {
    this.scene = new Transform()
  }

  createCursor() {
    this.webglCursor = new Cursor({
      gl: this.gl,
      scene: this.scene,
      sizes: this.viewport,
      renderer: this.renderer,
      camera: this.camera
    })
  }

  createHome() {
    this.home = new Home({
      gl: this.gl,
      scene: this.scene,
      sizes: this.viewport,
      renderer: this.renderer,
      camera: this.camera
    })
  }

  destroyHome() {
    if (!this.home) return
    this.home.destroy()
    this.home = null
  }

  onPreloaded() {
    this.onChangeEnd(this.url)
  }

  onChangeEnd(url) {
    console.log(url, "url")
    if (url === "home") {
      this.createHome()
    } else {
      this.destroyHome()
    }

    this.url = url
  }

  /**
   * Change.
   */
  onChange(url) {}

  /**
   * Resize.
   */
  onResize() {
    this.screen = {
      height: window.innerHeight,
      width: window.innerWidth
    }

    this.renderer.setSize(this.screen.width, this.screen.height)

    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height
    })

    const fov = this.camera.fov * (Math.PI / 180)
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    const width = height * this.camera.aspect

    this.viewport = {
      height,
      width
    }

    const values = {
      screen: this.screen,
      viewport: this.viewport
    }

    if (this.home) {
      this.home.onResize({
        sizes: this.viewport
      })
    }

    if (this.webglCursor) {
      this.webglCursor.onResize({
        sizes: this.viewport
      })
    }
  }

  onTouchDown(event) {
    this.isDown = true

    this.x.start = event.touches ? event.touches[0].clientX : event.clientX
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY

    const values = {
      x: this.x.start,
      y: this.y.start
    }

    if (this.home) {
      this.home.onTouchDown(values)
    }
  }

  onTouchMove(event) {
    if (!this.isDown) return

    const x = event.touches ? event.touches[0].clientX : event.clientX
    const y = event.touches ? event.touches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.home) {
      this.home.onTouchMove(values)
    }
  }

  onTouchUp(event) {
    this.isDown = false

    const x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX
    const y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.home) {
      this.home.onTouchUp(values)
    }
  }

  onMouseMove(event) {
    // if (event.changedTouches && event.changedTouches.length) {
    //   event.x = event.changedTouches[0].pageX
    //   event.y = event.changedTouches[0].pageY
    // }
    // if (event.x === undefined) {
    //   event.x = event.pageX
    //   event.y = event.pageY
    // }

    const x = event.touches ? event.touches[0].clientX : event.clientX
    const y = event.touches ? event.touches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.webglCursor) {
      this.webglCursor.onMouseMove(values)
    }
  }

  /**
   * Update.
   */
  update(application, scroll) {
    if (!application) return

    if (this.home) {
      this.home.update(scroll)
    }

    if (this.webglCursor) {
      this.webglCursor.update()
    }

    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })
  }
}
