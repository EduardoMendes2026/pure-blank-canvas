import { describe, expect, test } from 'bun:test'
import { products, cartTotal } from './coffeeCatalog'

describe('Catálogo informado', () => {
  test.each([
    ['01', 'Mundo Novo – Espresso', 12000],
    ['02', 'Moka Arara', 3500],
    ['03', 'Catuaí Amarelo', 4500],
    ['04', 'Bourbon Amarelo', 4600],
    ['05', 'Arara', 3600],
    ['06', 'Arara do gerente', 4900],
  ])('foto %s corresponde a %s e seu preço', (id, name, price) => {
    expect(products.find(product => product.id === id)).toMatchObject({ name, price })
  })
  test('somar quantidades no carrinho', () => {
    expect(cartTotal({ '01': 2, '02': 1 })).toBe(27500)
    expect(cartTotal({})).toBe(0)
  })
})