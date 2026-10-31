export default function RoastingSection() {
  return (
    <section id="torrefacao-cinematic" className="cinematic-section">
      <canvas id="torrefacao-canvas" className="cinematic-canvas" />

      {/* MOMENTO 1 */}
      <div className="torra-narrative torra-moment-1 absolute inset-0 z-[3] flex flex-col items-center justify-center text-center pointer-events-none p-8 opacity-0 will-change-[opacity,transform]">
        <h2 className="font-serif text-[clamp(1.8rem,5vw,3.5rem)] font-normal tracking-[0.1em] text-coffee-100 drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)] mb-4 leading-tight max-w-[800px]">FAZENDA JANGADA</h2>
        <p className="text-[clamp(0.9rem,1.5vw,1.15rem)] font-light leading-relaxed text-coffee-100/85 drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] max-w-[600px]">Uma história construída com dedicação, tradição e amor pelo café.</p>
      </div>

      {/* MOMENTO 2 */}
      <div className="torra-narrative torra-moment-2 absolute inset-0 z-[3] flex flex-col items-center justify-center text-center pointer-events-none p-8 opacity-0 will-change-[opacity,transform]">
        <h2 className="font-serif text-[clamp(1.8rem,5vw,3.5rem)] font-normal tracking-[0.1em] text-coffee-100 drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)] mb-4 leading-tight max-w-[800px]">UMA HISTÓRIA DE LEGADO</h2>
        <p className="text-[clamp(0.9rem,1.5vw,1.15rem)] font-light leading-relaxed text-coffee-100/85 drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] max-w-[600px]">Uma homenagem ao legado de trabalho da matriarca da família, cuja dedicação inspira a história e a identidade da Fazenda Jangada.</p>
      </div>

      {/* MOMENTO 3 */}
      <div className="torra-narrative torra-moment-3 absolute inset-0 z-[3] flex flex-col items-center justify-center text-center pointer-events-none p-8 opacity-0 will-change-[opacity,transform]">
        <h2 className="font-serif text-[clamp(1.8rem,5vw,3.5rem)] font-normal tracking-[0.1em] text-coffee-100 drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)] mb-4 leading-tight max-w-[800px]">NASCE O CAFÉ GOULART</h2>
        <p className="text-[clamp(0.9rem,1.5vw,1.15rem)] font-light leading-relaxed text-coffee-100/85 drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] max-w-[600px]">Mais do que café, uma expressão da história de uma família e do cuidado presente em cada etapa da produção.</p>
      </div>

      {/* MOMENTO 4 */}
      <div className="torra-narrative torra-moment-4 absolute inset-0 z-[3] flex flex-col items-center justify-center text-center pointer-events-none p-8 opacity-0 will-change-[opacity,transform]">
        <h2 className="font-serif text-[clamp(1.8rem,5vw,3.5rem)] font-normal tracking-[0.1em] text-coffee-100 drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)] mb-4 leading-tight max-w-[800px]">A ARTE DA TORRA</h2>
        <p className="text-[clamp(0.9rem,1.5vw,1.15rem)] font-light leading-relaxed text-coffee-100/85 drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] max-w-[600px]">É durante a torra que os grãos revelam suas características. Um processo que exige atenção, cuidado e respeito à essência do café.</p>
      </div>

      {/* MOMENTO 5 */}
      <div className="torra-narrative torra-moment-5 absolute inset-0 z-[3] flex flex-col items-center justify-center text-center pointer-events-none p-8 opacity-0 will-change-[opacity,transform]">
        <h2 className="font-serif text-[clamp(1.8rem,5vw,3.5rem)] font-normal tracking-[0.1em] text-coffee-100 drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)] mb-4 leading-tight max-w-[800px]">FAZENDA JANGADA. CAFÉ GOULART.</h2>
        <p className="text-[clamp(0.9rem,1.5vw,1.15rem)] font-light leading-relaxed text-coffee-100/85 drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] max-w-[600px]">Conheça nossos cafés e descubra uma história que merece ser apreciada em cada xícara.</p>
        <a href="#vitrine" className="inline-block mt-8 text-xs tracking-[0.2em] uppercase font-medium text-coffee-950 bg-coffee-400 py-4 px-10 rounded-sm hover:bg-coffee-100 hover:-translate-y-0.5 transition-all duration-300 pointer-events-auto cursor-pointer no-underline">CONHEÇA NOSSOS CAFÉS</a>
      </div>
    </section>
  )
}