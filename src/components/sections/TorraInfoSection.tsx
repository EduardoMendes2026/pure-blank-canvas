export default function TorraInfoSection() {
 return (
 <section id="torra" className="py-[clamp(4rem,10vh,8rem)] px-8 bg-coffee-950">
 <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
 <div className="reveal-up">
 <span className="section-label text-coffee-400">Artesanato</span>
 <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-6 text-coffee-100">
 É na torra que a origem revela sua personalidade.
 </h2>
 <p className="text-lg leading-relaxed text-coffee-200/70 max-w-[520px]">
 Cada lote é tratado como único. Temperaturas, tempos e curvas são ajustados com precisão para extrair o melhor de cada grão.
 </p>
 </div>
 <div className="reveal-up delay-200">
 <div className="aspect-[4/3] overflow-hidden rounded bg-coffee-900">
 <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
 <rect width="400" height="300" fill="#60432E" />
 <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#F1E9DC" fontFamily="serif" fontSize="20">Torrefação Artesanal</text>
 </svg>
 </div>
 </div>
 </div>
 </section>
 )
}