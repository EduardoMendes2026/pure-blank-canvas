import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ShoppingBag, Plus, Minus, X } from 'lucide-react'
import Button from '../ui/Button'
import { products, money, cartTotal } from './coffeeCatalog'
import { nextScrollPosition } from './shopNavigation'

export default function VitrineSection() {
 const track = useRef<HTMLDivElement>(null)
 const dialog = useRef<HTMLDialogElement>(null)
 const [quantities, setQuantities] = useState<Record<string, number>>({})
 const [notice, setNotice] = useState('')
 const [position, setPosition] = useState({ start: true, end: false })
 const target = useRef(0)
 useEffect(() => {
   const element = track.current
   if (!element) return
   const update = () => {
     target.current = element.scrollLeft
     setPosition({ start: element.scrollLeft <= 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 })
   }
   const observer = new ResizeObserver(update)
   observer.observe(element)
   element.addEventListener('scrollend', update)
   update()
   return () => { observer.disconnect(); element.removeEventListener('scrollend', update) }
 }, [])
 const count = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0)
 const change = (id: string, delta: number) => setQuantities(current => ({ ...current, [id]: Math.max(0, (current[id] ?? 0) + delta) }))
 const move = (direction: number) => {
   const element = track.current
   if (!element) return
   const card = element.querySelector<HTMLElement>('.shop-product')
   if (!card) return
   const step = card.offsetWidth + Number.parseFloat(getComputedStyle(element).columnGap)
   target.current = nextScrollPosition(target.current, step, element.scrollWidth - element.clientWidth, direction)
   element.scrollTo({ left: target.current, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
 }
 return (
 <section id="vitrine" className="relative z-10 bg-coffee-100 text-coffee-900 py-[clamp(4rem,10vh,8rem)] px-8">
 <div className="max-w-[1200px] mx-auto">
 <span className="section-label text-coffee-800">Nossos Cafés</span>
 <div className="shop-heading">
 <h2 className="font-serif text-3xl md:text-5xl leading-tight text-coffee-900">
 Da origem à sua mesa
 </h2>
 <Button className="shop-cart-toggle" onClick={() => dialog.current?.showModal()} aria-label={`Abrir carrinho, ${count} itens`}><ShoppingBag size={18} /> Carrinho <span>{count}</span></Button>
 </div>
 <div className="shop-navigation">
 <span className="shop-status" role="status">{notice}</span>
 <Button className="shop-arrow" aria-label="Cafés anteriores" title="Cafés anteriores" disabled={position.start} onClick={() => move(-1)}><ArrowLeft size={20} /></Button>
 <Button className="shop-arrow" aria-label="Próximos cafés" title="Próximos cafés" disabled={position.end} onClick={() => move(1)}><ArrowRight size={20} /></Button>
 </div>
 <div className="shop-track" ref={track} aria-label="Cafés à venda" onScroll={event => {
   const element = event.currentTarget
   setPosition({ start: element.scrollLeft <= 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 })
 }}>
 {products.map((p) => (
 <article key={p.id} className="shop-product vitrine-card">
 <div className="shop-photo">
 <img src={p.image} alt={p.name} loading="lazy" width="768" height="768" />
 </div>
 <div className="shop-product-info">
 <h3 className="font-serif text-xl text-coffee-900">{p.name}</h3>
 <p className="shop-price">{money(p.price)}</p>
 <Button className="shop-add" onClick={() => { change(p.id, 1); setNotice(`${p.name} adicionado ao carrinho`) }}><Plus size={18} /> Adicionar ao carrinho</Button>
 </div>
 </article>
 ))}
 </div>
 {count > 0 && <Button className="shop-cart-tab" onClick={() => dialog.current?.showModal()} aria-label={`Ver carrinho, ${count} itens`}><ShoppingBag size={20} /><span>Carrinho ({count})</span><strong>{money(cartTotal(quantities))}</strong></Button>}
 <dialog ref={dialog} aria-labelledby="cart-heading" className="shop-dialog" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}>
 <div className="shop-dialog-heading"><h3 id="cart-heading" className="font-serif text-2xl">Seu carrinho</h3><Button className="shop-arrow" aria-label="Fechar carrinho" title="Fechar carrinho" onClick={() => dialog.current?.close()}><X size={20} /></Button></div>
 {count === 0 ? <p className="shop-empty">Seu carrinho está vazio.</p> : <>
 <div className="shop-cart-items">{products.filter(p => (quantities[p.id] ?? 0) > 0).map(p => <div className="shop-cart-item" key={p.id}>
 <img src={p.image} alt={p.name} width="72" height="72" />
 <div className="shop-cart-detail"><h4>{p.name}</h4><p>{money(p.price)}</p><div className="shop-quantity"><Button className="shop-arrow" aria-label={`Diminuir ${p.name}`} title="Diminuir quantidade" onClick={() => change(p.id, -1)}><Minus size={16} /></Button><span>{quantities[p.id]}</span><Button className="shop-arrow" aria-label={`Aumentar ${p.name}`} title="Aumentar quantidade" onClick={() => change(p.id, 1)}><Plus size={16} /></Button></div></div>
 <div className="shop-line-subtotal"><span>Subtotal</span><strong>{money(p.price * (quantities[p.id] ?? 0))}</strong></div>
 </div>)}</div>
 <div className="shop-total" aria-live="polite"><span>Subtotal</span><strong>{money(cartTotal(quantities))}</strong></div>
 </>}
 <Button className="shop-add" disabled aria-describedby="checkout-unavailable"><ShoppingBag size={18} /> Finalizar compra</Button>
 <p id="checkout-unavailable" className="text-sm text-coffee-800 my-3">Pagamento online indisponível no momento.</p>
 <Button className="shop-cart-toggle w-full" onClick={() => dialog.current?.close()}>Continuar comprando <ArrowRight size={18} /></Button>
 </dialog>
 </div>
 </section>
 )
}