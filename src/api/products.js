import axios from 'axios';
import { getRefreshToken } from './auth';

const api = process.env.NEXT_PUBLIC_API_URL_NODE;
if (typeof window !== 'undefined') {
 
const accessToken = window.localStorage.getItem('accessToken');
}

export const getProductCsm = async () => {
    try {
        const response = await axios.get(`${api}/cms/home_new_arrivals`, );
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};
export const getFiltersList = async (id) => {
    try {
        const response = await axios.post(`${api}/product/productfilter/${id}`, );
        return response
    } catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};

export const getProductsList = async (csm, categoryId, start, limit, selectedValues, priceRange, sortOrder) => {
    console.log(priceRange, 'priceRange');
    try {
        let data;
        if (csm) {
            data = { productId: csm };
        } else if (categoryId && priceRange) {
            data = {
                masterCategoryId: categoryId,
                minPrice: priceRange[0],
                maxPrice: priceRange[1],
                sort: sortOrder,
            };
            if (selectedValues && selectedValues.length > 0) {
                data.values = selectedValues;
            }
        }
        else if (categoryId) {
            data = {
                masterCategoryId: categoryId,
            };
            if (selectedValues && selectedValues.length > 0) {
                data.values = selectedValues;
            }
        }
        else {
            data = "";
        }
        console.log(data);
        const response = await axios.post(`${api}/product/productList?start=${start}&limit=${limit}&count=1`, data, );
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};

export const getProductsView = async (id) => {
    try {
        const response = await axios.get(`${api}/product/productview/${id}`, );
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};

export const get = async (id) => {
    try {
        const selectedProduct = productsData.filter((product) => product.id == id)

        return selectedProduct[0];
    } catch (e) {
        console.log(e);
    }
};