import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { getRefreshToken } from './auth';

const api = process.env.NEXT_PUBLIC_API_URL_NODE;
if (typeof window !== 'undefined') {

	var accessToken = window.localStorage.getItem('accessToken');
}
//function to add product variant to cart
export const addCartData = async (data) => {
	const accessToken = localStorage.getItem('accessToken');
	const payload = {
		userId: data.userId,
		guestUserId: data.guestUserId,
		productId: data.productId,
		quantity: data.quanity,
		productVariantId: data.productVariantId,
	}
	try {
		const response = await axios.post(`${api}/cart/add`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
		if (response) {
			// If accessToken is available, return the response			
			if (accessToken) {
				return response
			}
			// If accessToken is not available, retrieve it from the response and store it in localStorage
			else {
				const accessToken = response.data.result.accessToken;
				localStorage.setItem("accessToken", accessToken);
				if (accessToken) {
					return response
				}
			}

		}
	}
	catch (error) {
		// If the error message is 'Invalid token', attempt to refresh the token		
		if (error.response.data.message === 'Invalid token') {
			await getRefreshToken();
		}
	}
};

//function to increase or decrese quantity of product variant from cart
export const UpdateCartData = async (data) => {
	const payload = {
		productVariantId: data.productVariantId,
		quantity: data.quanity,

	}
	try {
		const response = await axios.put(`${api}/cart/update/${data.cart_id}`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
		return response
	}
	catch (error) {
		if (error.response.data.message === 'Invalid token') {
			await getRefreshToken();
		}
	}
};


export const getCartList = async () => {
	try {
		const response = await axios.post(`${api}/cart/list`, { headers: { Authorization: `Bearer ${accessToken}` } });
		return response
	}
	catch (error) {
		if (error.response.data.message === 'Invalid token') {
			await getRefreshToken();
		}
	}
};
//function to get cart data for particular logged in user
export const getUserCartData = async (id) => {
	try {
		const response = await axios.get(`${api}/cart/${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
		return response
	}
	catch (error) {
		if (error.response.data.message === 'Invalid token') {
			await getRefreshToken();
		}
	}
};
//function to get cart data for particular guest user which in localstorage
export const getguestUserCartData = async (id) => {
	console.log('getguestUserCartData');
	try {
		const response = await axios.get(`${api}/cart/guestUser/${id}`);
		return response
	}
	catch (error) {
		console.log(error);
	}
};

//function to delete product variant from cart 
export const deleteProductVariant = async (data) => {
	try {
		const response = await axios.delete(`${api}/cart/update/${data.cart_id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
		return "product variant deleted successfully";
	}
	catch (error) {
		if (error.response.data.message === 'Invalid token') {
			await getRefreshToken();
		}
	}
};

//function to update guest user cart of localstorage to logged in user cart when user is login to particular screen
export const updateloggrduserCart = async (guestUserId, token) => {
	const payload = {
		userId: token,
	}
	try {
		const response = await axios.post(`${api}/cart/guestUser/${guestUserId}`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
		return response
	}
	catch (error) {
		if (error.response.data.message === 'Invalid token') {
			await getRefreshToken();
		}
	}
};