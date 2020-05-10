const cart = require('../src/cart')
const { products } = require('../src/data/products.json')

describe('Cart', () => {
  it('Should return array of products', () => {
    const productsList = cart.getProducts([110, 120], products)
    expect(productsList.length).toBe(2)
  })

  it('Should determine look categories', () => {
    const productsList = cart.getProducts([110, 210], products)
    const categories = cart.getLookCategories(productsList)
    expect(categories.length).toBe(2)
  })

  it('Should determine products promotion', () => {
    const productsList = cart.getProducts([110, 210], products)
    const promotions = ['SINGLE LOOK', 'DOUBLE LOOK']
    const promotion = cart.getPromotion(productsList, promotions)
    
    expect(promotion).toBe('DOUBLE LOOK')
  })

  it('Should determine total price without discounts', () => {
    const productsList = cart.getProducts([110, 210], products)
    const totalPriceWithoutDiscount = cart.getTotalPriceWithoutDiscount(productsList)

    expect(totalPriceWithoutDiscount).toBe(249.98)
  })

  it('Should determine filtered discount prices', () => {
    const productsList = cart.getProducts([110, 210], products)
    const promotions = ['SINGLE LOOK', 'DOUBLE LOOK']
    const promotion = cart.getPromotion(productsList, promotions)
    const filteredPromotion = cart.getFilteredPromotion(productsList, promotion)

    expect(filteredPromotion.length).toBe(2)
  })

  it('Should determine total price with discounts applied', () => {
    const productsList = cart.getProducts([110, 210], products)
    const promotions = ['SINGLE LOOK', 'DOUBLE LOOK']
    const promotion = cart.getPromotion(productsList, promotions)
    const filteredPromotion = cart.getFilteredPromotion(productsList, promotion)

    expect(cart.getTotalPrice(filteredPromotion)).toBe(229.98)
  })
})