export default function ContactSection() {
 return (
 <section id="contato" className="py-[clamp(4rem,10vh,8rem)] px-8 bg-coffee-100 text-coffee-900 text-center">
 <div className="reveal-up max-w-[600px] mx-auto">
 <span className="section-label text-coffee-800">Converse conosco</span>
 <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-6 text-coffee-900">Contato</h2>
 <p className="text-lg leading-relaxed text-coffee-800 opacity-80 mb-12">
 Para parcerias ou informações sobre nossos cafés, entre em contato.
 </p>
 <a href="mailto:email@cafegoulart.com.br" className="inline-block font-serif text-[clamp(1.2rem,2.5vw,1.8rem)] text-coffee-800 border-b border-coffee-400 pb-1 hover:opacity-70 transition-opacity no-underline">
 email@cafegoulart.com.br
 </a>
 </div>
 </section>
 )
}