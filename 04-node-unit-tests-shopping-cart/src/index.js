const {
	getProducts,
  getPromotion,
  getFilteredPromotion,
  getTotalPriceWithoutDiscount,
	getTotalPrice,
} = require('./cart')
const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {

	const productsCartList = getProducts(ids, productsList)
	const products = productsCartList.map(product => ({
		name: product.name,
		category: product.category
	}))
	
	const totalPriceWithoutDiscount = getTotalPriceWithoutDiscount(productsCartList)
	
	const promotion = getPromotion(productsCartList, promotions)
	const filteredPromotion = getFilteredPromotion(productsCartList, promotion)
	const totalPrice = getTotalPrice(filteredPromotion).toFixed(2)
	const discountValue = (totalPriceWithoutDiscount - totalPrice).toFixed(2)

	const discount = `${((discountValue / totalPriceWithoutDiscount) * 100).toFixed(2)}%` 

	const cart = {
		products,
		promotion,
    totalPrice,
    discountValue,
    discount,
	};

	return cart
}

module.exports = { getShoppingCart };
