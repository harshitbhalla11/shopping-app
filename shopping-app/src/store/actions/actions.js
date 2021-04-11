import * as actions from "./actionTypes";
import axios from 'axios';
import { firebase, db } from '../../components/firebase/firebase';

export const incrementQty = id => {
	return { type: actions.INCREMENT_QTY, id };
};

export const decrementQty = id => {
	return { type: actions.DECREMENT_QTY, id };
};

export const setAuthStatus = authStatus => {
	return {type:actions.SET_AUTH_STATUS, authStatus}
}

export const removeItem = itemId => {
	return { type: actions.REMOVE_ITEM, itemId };
};

export const reloadCart = () => {
	return { type: actions.RELOAD_CART };
};


export const fetchProductsSuccess = products => {
	return {
		type: actions.FETCH_PRODUCTS_SUCCESS,
		products: products,
	};
};

export const fetchProductsFailed = error => {
	return {
		type: actions.FETCH_PRODUCTS_FAILED,
		error,
	};
};

export const fetchProductsStart = () => {
	return {
		type: actions.FETCH_PRODUCTS_START,
	};
};

export const fetchProducts = () => {
	return dispatch => {
		dispatch(fetchProductsStart());
		axios.get('http://localhost:8000/products')
			.then(resp => dispatch(fetchProductsSuccess(resp.data)))
    		.catch(error => dispatch(fetchProductsFailed(error)));    
	};
};

// export const addToCart = (id , quantity,price) => {

// 	db.collection("cities").doc("LA").set({
// 		name: "Los Angeles",
// 		state: "CA",
// 		country: "USA"
// 	})
// 	.then(() => {
// 		console.log("Document successfully written!");
// 	})
// 	.catch((error) => {
// 		console.error("Error writing document: ", error);
// 	});

// 	// return {type:actions.SET_AUTH_STATUS, (id , quantity,price)}
// }