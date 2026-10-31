import photo01 from '../../assets/products/cafe-01.jpg.asset.json'
import photo02 from '../../assets/products/cafe-02.jpg.asset.json'
import photo03 from '../../assets/products/cafe-03.jpg.asset.json'
import photo04 from '../../assets/products/cafe-04.jpg.asset.json'
import photo05 from '../../assets/products/cafe-05.jpg.asset.json'
import photo06 from '../../assets/products/cafe-06.jpg.asset.json'

export const products = [
  { id: '01', name: 'Mundo Novo – Espresso', price: 12000, image: photo01.url },
  { id: '02', name: 'Moka Arara', price: 3500, image: photo02.url },
  { id: '03', name: 'Catuaí Amarelo', price: 4500, image: photo03.url },
  { id: '04', name: 'Bourbon Amarelo', price: 4600, image: photo04.url },
  { id: '05', name: 'Arara', price: 3600, image: photo05.url },
  { id: '06', name: 'Arara do gerente', price: 4900, image: photo06.url },
]

export const money = (cents: number) => (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
export const cartTotal = (quantities: Record<string, number>) => products.reduce((total, product) => total + product.price * (quantities[product.id] ?? 0), 0)