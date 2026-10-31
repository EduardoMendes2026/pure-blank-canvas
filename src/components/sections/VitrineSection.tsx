const products = [
 { title: 'Origem Selecionada', desc: 'Minas Gerais · Arábica · Natural', fill: '#34251C' },
 { title: 'Reserva Especial', desc: 'Cerrado Mineiro · Bourbon · Lavado', fill: '#60432E' },
 { title: 'Edição Limitada', desc: 'Mantiqueira · Catuaí · Honey', fill: '#344438' },
]

export default function VitrineSection() {
 return (
 <section id="vitrine" className="relative z-10 bg-coffee-100 text-coffee-900 py-[clamp(4rem,10vh,8rem)] px-8">
 <div className="max-w-[1200px] mx-auto">
 <span className="section-label text-coffee-800">Nossos Cafés</span>
 <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-12 text-coffee-900">
 Da origem à sua mesa
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
 {products.map((p) => (
 <article key={p.title} className="bg-white rounded overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 pb-8 vitrine-card">
 <div className="w-full aspect-[4/3] overflow-hidden">
 <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
 <rect width="400" height="300" fill={p.fill} />
 <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#D8C5A5" fontFamily="serif" fontSize="24">{p.title}</text>
 </svg>
 </div>
 <h3 className="font-serif text-xl mt-6 mx-6 mb-2 text-coffee-900">{p.title}</h3>
 <p className="text-sm text-coffee-800 mx-6 opacity-80">{p.desc}</p>
 <button className="inline-block mt-5 mx-6 text-xs tracking-[0.15em] uppercase text-coffee-900 border-b border-coffee-800 pb-0.5 hover:opacity-60 transition-opacity cursor-pointer">
 Ver detalhes
 </button>
 </article>
 ))}
 </div>
 </div>
 </section>
 )
}