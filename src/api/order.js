import axios from 'axios';
import { getRefreshToken } from './auth';

const api = process.env.NEXT_PUBLIC_API_URL_NODE;

//function to create order
export const createOrder = async (data) => {
	let payload;
	try {

		let accessToken = window.localStorage.getItem('accessToken');
		payload = {
			userId: data.userId,
			guestUserId: data.guestUserId,
			cartId: data.cartId,
			userAddressId: data.userAddressId,
			currency: data.currency,
			notes: data.notes
		}
		//if there access token is not availble in localstorage 
		if (!accessToken) {
			await getRefreshToken();
			accessToken = window.localStorage.getItem('accessToken');
		}

		var response = await axios.post(`${api}/orders`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
		return response;

	} catch (error) {
		if (error) {
			console.log(error);
			//if access token is expired getRefreshToken() will refresh token
			var tokenres = await getRefreshToken();
			if (tokenres) {
				window.localStorage.setItem('accessToken', tokenres.data.result.accessToken);
				var response = await axios.post(`${api}/orders`, payload, { headers: { Authorization: `Bearer ${tokenres.data.result.accessToken}` } }); // call the API again with the new access token
				return response;
			}
		}
	}
};

export const updateOrder = async (data) => {
	const payload = {

		Status: data.paymentStatus,
	}
	try {
		const response = await axios.put(`${api}/orders/${data.cart_id}`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
		return response
	}
	catch (error) {
		if (error.response.data.message === 'Invalid token') {
			await getRefreshToken();
		}
		console.log(error);
	}
};

//to get order details which is done currently with unique orderId
export const getOrderDetails = async (uniqueOrderId) => {
	const payload = {
		uniqueOrderId: uniqueOrderId,
	}
	try {
		const response = await axios.post(`${api}/orders/list`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
		return response
	}
	catch (error) {
		if (error.response.data.message === 'Invalid token') {
			await getRefreshToken();
		}
		console.log(error);
	}
};

//to get order list of logged in user 
export const getOrderList = async (userId, start, limit) => {
	let accessToken = window.localStorage.getItem('accessToken');
	const payload = {
		userId: userId
	}
	try {
		const response = await axios.post(`${api}/orders/list?start=${start}&limit=${limit}&count=1`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
		return response
	}
	catch (error) {
		console.log(error, 'ordelisterror');
		if (error.response.data.message === 'Invalid token') {
			await getRefreshToken();
		}
		console.log(error);
	}
};

export const orderFullFill = async (uniqueOrderId) => {
	let accessToken = localStorage.getItem('accessToken');
	const payload = {

		uniqueOrderId: uniqueOrderId,
		// payment: data.payment
	}
	try {
		const response = await axios.post(`${api}/orders/order-fulfillment`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
		return response
	}
	catch (error) {

		if (error) {
			if (error === 'Unauthorized') {
				await getRefreshToken();
			}
			console.log(error);

		}
		console.log(error);
		return false;
	}
};
