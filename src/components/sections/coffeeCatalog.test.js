import { describe, expect, test } from 'bun:test'
import { products, cartTotal } from './coffeeCatalog'
import { nextScrollPosition } from './shopNavigation'

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
  test('subtotal acompanha aumento, redução e remoção de cafés', () => {
    expect(cartTotal({ '02': 2, '03': 1 })).toBe(11500)
    expect(cartTotal({ '02': 1, '03': 1 })).toBe(8000)
    expect(cartTotal({ '02': 0, '03': 1 })).toBe(4500)
  })
  test('setas avançam e voltam sem ultrapassar os limites', () => {
    expect(nextScrollPosition(0, 300, 900, 1)).toBe(300)
    expect(nextScrollPosition(300, 300, 900, -1)).toBe(0)
    expect(nextScrollPosition(800, 300, 900, 1)).toBe(900)
    expect(nextScrollPosition(0, 300, 900, -1)).toBe(0)
  })
})