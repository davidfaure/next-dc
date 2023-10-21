import gsap from "gsap"
import CustomEase from "gsap/CustomEase"

gsap.registerPlugin(CustomEase)

export const SMOOTH = CustomEase.create("bezier", "0.6, 0.01, -0.05, 0.9")
export const SMOOTHER = CustomEase.create("bezier", "0.4, 0.01, -0.05, 0.9")
export const DEFAULT = CustomEase.create("default", "0.77, 0, 0.175, 1")
export const CSS = "cubic-bezier(0.77, 0, 0.175, 1)"
