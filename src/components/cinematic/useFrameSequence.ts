import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { drawCover, loadImage } from './loadImages'

gsap.registerPlugin(ScrollTrigger)

export function useFrameSequence(folder: string, frameCount: number) {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas) return
    let disposed = false
    let target = 0
    let drawn = -1
    const cache = new Map<number, HTMLImageElement>()
    const pending = new Set<number>()
    const narrative = Array.from(section.querySelectorAll<HTMLElement>('.torra-narrative'))

    function draw(index: number) {
      const image = cache.get(index)
      if (!image || disposed) return
      drawCover(canvas, image)
      drawn = index
      canvas.dataset.frame = String(index + 1)
    }

    async function request(index: number) {
      if (index < 0 || index >= frameCount || cache.has(index) || pending.has(index)) return
      pending.add(index)
      const image = await loadImage(`img/${folder}/frame_${String(index + 1).padStart(6, '0')}.png`)
      pending.delete(index)
      if (disposed || !image) return
      cache.set(index, image)
      if (index === target || drawn < 0) draw(index)
      // Keep a small neighborhood decoded rather than hundreds of full-size PNGs.
      if (cache.size > 40) {
        for (const key of cache.keys()) {
          if (Math.abs(key - target) > 12) cache.delete(key)
          if (cache.size <= 30) break
        }
      }
    }

    function update(progress: number) {
      target = Math.round(progress * (frameCount - 1))
      if (drawn !== target) draw(target)
      void request(target)
      for (let offset = 1; offset <= 4; offset += 1) {
        void request(target + offset)
        void request(target - offset)
      }
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
      observer.disconnect()
      trigger.kill()
      cache.clear()
    }
  }, [folder, frameCount])

  return { sectionRef, canvasRef }
}