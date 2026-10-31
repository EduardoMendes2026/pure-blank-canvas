import { useEffect, useRef, useState } from 'react'
import { drawCover, loadImage } from '../cinematic/loadImages'

export default function Loader() {
 const [ready, setReady] = useState(false)
 const barRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
 let cancelled = false
 let completed = 0
 const observers: ResizeObserver[] = []
 const frames = [
   { id: 'frame-canvas', path: 'img/frames/frame_000001.png' },
   { id: 'torrefacao-canvas', path: 'img/torrefacao/frame_000001.png' },
 ]
 const tasks = frames.map(async ({ id, path }) => {
   const image = await loadImage(path)
   if (cancelled) return
   const canvas = document.getElementById(id)
   if (image && canvas instanceof HTMLCanvasElement) {
     const draw = () => drawCover(canvas, image)
     draw()
     const observer = new ResizeObserver(draw)
     observer.observe(canvas)
     observers.push(observer)
   }
   completed += 1
   if (barRef.current) barRef.current.style.width = `${completed / frames.length * 100}%`
 })
 void Promise.allSettled(tasks).then(() => {
   if (!cancelled) setReady(true)
 })
 return () => {
   cancelled = true
   observers.forEach((observer) => observer.disconnect())
 }
 }, [])

 return (
 <div id="loader" className={`loader${ready ? ' loader--hidden' : ''}`} aria-hidden={ready}>
 <span className="loader-brand">CAFÉ GOULART</span>
 <div className="loader-track">
 <div id="loader-bar" ref={barRef} className="loader-bar" />
 </div>
 </div>
 )
}