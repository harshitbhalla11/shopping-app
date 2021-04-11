import React, { useEffect, useState } from "react";
import * as actions from "../actions/actionTypes";
import { firebase, db } from '../../components/firebase/firebase';
// import data from '../../../public/data.json'



const ProductsData = [];


const AUTH_KEY_LOCAL_STORAGE = "authstatuskey";

const initialState = {
	products: null,
	amount: 0,
	totalQuantity: 0,
	isAuth: localStorage.getItem(AUTH_KEY_LOCAL_STORAGE)==="true",
	loadingProducts: false,
	productsFetchError: null
};


const findProductIndex = (products, id) =>

	products.findIndex(product => product._id === id);
let idx = null,
	products = null, newAmount, newTotalQuantity;
// let initialState = null;       
// console.log(getInitialState())
console.log("initialState", initialState)
const reducer = (state = initialState, action) => {

	console.log("this is products", state.products);

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

		case actions.SET_AUTH_STATUS:
			localStorage.setItem(AUTH_KEY_LOCAL_STORAGE, action.authStatus)
			return {
				...state,
				isAuth: action.authStatus
			}
		
		case actions.FETCH_PRODUCTS_START:
			return {...state,loadingProducts:true, productsFetchError:null}

		case actions.FETCH_PRODUCTS_SUCCESS:
			return {...state,loadingProducts:false, products:action.products}

		case actions.FETCH_PRODUCTS_FAILED:
			return { ...state, loadingProducts: false, productsFetchError: action.error }
		
		default:
			return state;
	}
};

export default reducer;
