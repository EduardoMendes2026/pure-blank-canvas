export default function HeroSection() {
 return (
 <section id="hero-cinematic" className="cinematic-section">
 <canvas id="frame-canvas" className="cinematic-canvas" />
 <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(23,19,15,0.4)_100%)]">
 <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] tracking-[0.15em] text-coffee-100 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
 CAFÉ GOULART
 </h1>
 <p className="font-serif italic text-[clamp(1rem,2vw,1.4rem)] text-coffee-400 mt-4 opacity-90">
 "Todo grande café começa muito antes da primeira xícara."
 </p>
 </div>
 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
 <span className="text-[0.65rem] tracking-[0.2em] uppercase text-coffee-400 opacity-60">Explore</span>
 <div className="w-px h-12 bg-gradient-to-b from-coffee-400 to-transparent animate-pulse" />
 </div>
 </section>
 )
}