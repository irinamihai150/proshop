// import axios from "axios"

// import {
// 	PRODUCT_LIST_REQUEST,
// 	PRODUCT_LIST_SUCCESS,
// 	PRODUCT_LIST_FAIL,
// 	PRODUCT_DETAILS_REQUEST,
// 	PRODUCT_DETAILS_SUCCESS,
// 	PRODUCT_DETAILS_FAIL,
// } from "../constants/productConstants"

// export const listProducts = () => async (dispatch) => {
// 	try {
// 		dispatch({ type: PRODUCT_LIST_REQUEST })

// 		const { data } = await axios.get("/api/products")
// 		dispatch({
// 			type: PRODUCT_LIST_SUCCESS,
// 			payload: data,
// 		})
// 	} catch (error) {
// 		dispatch({
// 			type: PRODUCT_LIST_FAIL,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		})
// 	}
// }

// export const listProductsDetails = (id) => async (dispatch) => {
// 	try {
// 		dispatch({ type: PRODUCT_DETAILS_REQUEST })

// 		const { data } = await axios.get(`/api/products/${id}`)
// 		dispatch({
// 			type: PRODUCT_DETAILS_SUCCESS,
// 			payload: data,
// 		})
// 	} catch (error) {
// 		dispatch({
// 			type: PRODUCT_DETAILS_FAIL,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		})
// 	}
// }

import axios from "axios"

import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants"

export const listProducts = () => async (dispatch) => {
	try {
		console.log("Dispatching PRODUCT_LIST_REQUEST...")
		dispatch({ type: PRODUCT_LIST_REQUEST })

		const { data } = await axios.get("/api/products")
		console.log("Received data:", data)
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data,
		})
	} catch (error) {
		console.error("Error in listProducts:", error)
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const listProductsDetails = (id) => async (dispatch) => {
	try {
		console.log("Dispatching PRODUCT_DETAILS_REQUEST...")
		dispatch({ type: PRODUCT_DETAILS_REQUEST })

		const { data } = await axios.get(`/api/products/${id}`)
		console.log("Received data:", data)
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data,
		})
	} catch (error) {
		console.error("Error in listProductsDetails:", error)
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

