import * as actions from "../actions/actionTypes";


const initialProductsData = [
	{
		_id: "1",
		name: "Slim Shirt",
		category: "Shirts",
		image: "/images/d1.jpg",
		price: 60,
		brand: " Nike",
		rating: 4.5,
		numReviews: 10,
		quantity: 0,
	},
	{
		_id: "2",
		name: "Fit Shirt",
		category: "Shirts",
		image: "/images/d1.jpg",
		price: 50,
		brand: " Nike",
		rating: 4.2,
		numReviews: 5,
		quantity: 0,
	},
	{
		_id: "3",
		name: "Best Pants",
		category: "Pants",
		image: "/images/d1.jpg",
		price: 70,
		brand: " Nike",
		rating: 4.5,
		numReviews: 8,
		quantity: 0,
	},
	{
		_id: "4",
		name: "Best Pants",
		category: "Pants",
		image: "/images/d1.jpg",
		price: 70,
		brand: " Nike",
		rating: 4.5,
		numReviews: 8,
		quantity: 0,
	},
];



const initialState = {
	products: [...initialProductsData],
	amount: 0,
	totalQuantity: 0,
	isAuth:false
};

const findProductIndex = (products, id) =>
	products.findIndex(product => product._id === id);
let idx = null,
	products = null, newAmount, newTotalQuantity;
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.INCREMENT_QTY:
			idx = findProductIndex(state.products, action.id);
			products = state.products.map((product, index) => {
				if (idx === index) {
					product.quantity++;
					newAmount = state.amount + product.price;
					newTotalQuantity = state.totalQuantity + 1;
					return { ...product };
				}
				return product;
			});

			return {
				...state,
				totalQuantity: newTotalQuantity,
				amount: newAmount,
				products: [...products],
			};

		case actions.DECREMENT_QTY:
			idx = findProductIndex(state.products, action.id);
			if (!state.products[idx].quantity) return state;
			products = state.products.map((product, index) => {
				if (idx === index) {
					product.quantity--;
					newAmount = state.amount - product.price;
					newTotalQuantity = state.totalQuantity - 1;
					return { ...product };
				}
				return product;
			});

			return {
				...state,
				totalQuantity: newTotalQuantity,
				amount: newAmount,
				products: [...products],
			};

		default:
			return state;
	}
};

export default reducer;
