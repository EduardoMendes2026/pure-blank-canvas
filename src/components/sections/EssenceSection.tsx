export default function EssenceSection() {
 return (
 <section id="essencia" className="py-[clamp(4rem,10vh,8rem)] px-8 bg-coffee-100 text-coffee-900">
 <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
 <div className="reveal-up">
 <span className="section-label text-coffee-800">Filosofia</span>
 <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-6 text-coffee-900">
 Mais do que café.<br />Uma história de origem.
 </h2>
 <p className="text-lg leading-relaxed text-coffee-800 opacity-80 max-w-[520px]">
 Acreditamos que um grande café começa muito antes da torra. Ele nasce na terra, cresce com o cuidado de quem cultiva e ganha personalidade em cada etapa.
 </p>
 </div>
 <div className="reveal-up delay-200">
 <div className="aspect-[3/4] overflow-hidden rounded bg-coffee-900">
 <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
 <rect width="300" height="400" fill="#34251C" />
 <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#D8C5A5" fontFamily="serif" fontSize="20">Fotografia Editorial</text>
 </svg>
 </div>
 </div>
 </div>
 </section>
 )
}