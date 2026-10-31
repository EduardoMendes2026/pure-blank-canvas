import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { drawCover, loadImage } from './loadImages'
import { frameSource } from './frameAssets'

gsap.registerPlugin(ScrollTrigger)

export function useFrameSequence(folder: string, frameCount: number) {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const canvasElement = canvasRef.current
    if (!section || !canvasElement) return
    const canvas: HTMLCanvasElement = canvasElement
    let disposed = false
    let target = 0
    let drawn = -1
    let direction = 1
    let active = 0
    let paintScheduled = 0
    let queue: number[] = []
    const cache = new Map<number, HTMLImageElement>()
    const pending = new Set<number>()
    const failed = new Map<number, number>()
    const narrative = Array.from(section.querySelectorAll<HTMLElement>('.torra-narrative'))

    function draw(index: number) {
      const image = cache.get(index)
      if (!image || disposed) return
      drawCover(canvas, image)
      drawn = index
      canvas.dataset.frame = String(index + 1)
    }

    function paint() {
      paintScheduled = 0
      if (disposed) return
      let closest = -1
      for (const index of cache.keys()) {
        if (closest < 0 || Math.abs(index - target) < Math.abs(closest - target)) closest = index
      }
      if (closest >= 0 && closest !== drawn) draw(closest)
    }

    function schedulePaint() {
      if (!paintScheduled) paintScheduled = requestAnimationFrame(paint)
    }

    function pump() {
      if (disposed) return
      while (active < 4 && queue.length) {
        const index = queue.shift()
        if (index === undefined || cache.has(index) || pending.has(index)) continue
        if (Date.now() - (failed.get(index) ?? 0) < 2000) continue
        active += 1
        pending.add(index)
        void loadImage(frameSource(folder, index)).then((image) => {
          active -= 1
          pending.delete(index)
          if (disposed) return
          if (image) {
            cache.set(index, image)
            schedulePaint()
          } else {
            failed.set(index, Date.now())
          }
          if (cache.size > 64) {
        for (const key of cache.keys()) {
          if (Math.abs(key - target) > 24 && key !== drawn) cache.delete(key)
          if (cache.size <= 56) break
        }
          }
          pump()
        })
      }
    }

    function update(progress: number) {
      const previous = target
      target = Math.round(progress * (frameCount - 1))
      if (target !== previous) direction = target > previous ? 1 : -1
      schedulePaint()
      // Replace stale queued work on every scroll update; current frame always comes first.
      queue = [target]
      for (let offset = 1; offset <= 20; offset += 1) {
        queue.push(target + direction * offset)
        if (offset <= 6) queue.push(target - direction * offset)
      }
      queue = queue.filter((index) => index >= 0 && index < frameCount)
      pump()
      narrative.forEach((element, index) => {
        const visible = index === Math.min(narrative.length - 1, Math.floor(progress * narrative.length))
        gsap.set(element, { autoAlpha: visible ? 1 : 0 })
      })
    }

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${window.innerHeight * (folder === 'frames' ? 4 : 3)}`,
      pin: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => update(self.progress),
      onRefresh: (self) => {
        drawn = -1
        update(self.progress)
      },
    })
    update(trigger.progress)
    const observer = new ResizeObserver(() => draw(target))
    observer.observe(canvas)
    return () => {
      disposed = true
      cancelAnimationFrame(paintScheduled)
      observer.disconnect()
      trigger.kill()
      cache.clear()
    }
  }, [folder, frameCount])

  return { sectionRef, canvasRef }
}