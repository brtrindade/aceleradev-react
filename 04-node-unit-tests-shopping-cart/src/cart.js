const getProducts = (ids, products) => {
  return products.filter(product => ids.includes(product.id))
}

const getLookCategories = (productsList) => {
  return productsList.reduce((categories, product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category)
    }
    return categories
  }, [])
}

const getPromotion = (productsList, promotions) => {
  const lookCategories = getLookCategories(productsList)
  return promotions[lookCategories.length - 1]
}

const getTotalPriceWithoutDiscount = (productsList) => {
  return productsList.reduce((total, product) => {
		return total + product.regularPrice
	}, 0)
}

const getFilteredPromotion = (productsList, promotion) => {
  const filteredPromotion = productsList.map(product => {
    const productPromotion = product.promotions.filter(promo => (
      promo.looks.includes(promotion)
    ))
    return productPromotion.length === 0 
    ? {
        id: product.id,
        price: product.regularPrice
      } 
    : {
        id: product.id,
        price: productPromotion[0].price
      }
  }).flat()

  return filteredPromotion
}

const getTotalPrice = (filteredPromotion) => {
  const totalPrice = filteredPromotion.reduce((total, product) => {
    total += product.price

    return total
  }, 0)

  return totalPrice
}

module.exports = {
  getProducts,
  getLookCategories,
  getPromotion,
  getFilteredPromotion,
  getTotalPriceWithoutDiscount,
  getTotalPrice,
}
