import { useEffect, useRef, useState } from 'react'
import { loadImage } from '../cinematic/loadImages'
import { frameSource } from '../cinematic/frameAssets'

export default function Loader() {
 const [ready, setReady] = useState(false)
 const barRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
 let cancelled = false
 let completed = 0
 const frames = [
   { path: frameSource('frames', 0) },
   { path: frameSource('torrefacao', 0) },
 ]
 const tasks = frames.map(async ({ path }) => {
   await loadImage(path)
   if (cancelled) return
   completed += 1
   if (barRef.current) barRef.current.style.width = `${completed / frames.length * 100}%`
 })
 void Promise.allSettled(tasks).then(() => {
   if (!cancelled) setReady(true)
 })
 return () => {
   cancelled = true
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