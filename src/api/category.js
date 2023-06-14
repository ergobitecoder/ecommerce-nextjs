import axios from 'axios';
import { getRefreshToken } from './auth';

const api = process.env.NEXT_PUBLIC_API_URL_NODE;
if (typeof window !== 'undefined') {
  
const accessToken = window.localStorage.getItem('accessToken');
}

//function to get popular category Ids 
export const getCsm = async () => {
    try {
        const response = await axios.get(`${api}/cms/home_popular_category`, );
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};
//function to get popular category list 
export const getCategorysList = async (csmCategoryData, id, priceRange, sortOrder) => {
    try {
        let data;
        if (csmCategoryData) {
            data = {
                categoryId: csmCategoryData,

            };
        } else if (id) {
            data = {
                parentId: id,
                minPrice: priceRange[0],
                maxPrice: priceRange[1],
                sort: sortOrder
            };
        }
        else {
            data = "";
        }
        console.log(data);
        const response = await axios.post(`${api}/masterCategory/categoryList`, data, );
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};

//function to get parent category list 
export const getParentList = async () => {
    try {
        const response = await axios.post(`${api}/masterCategory/categoriesdata`, );
        return response
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};

//function to get product list in suggestion
export const autoSuggestion = async (data) => {
    try {
        const postData = {
            name: data.name,
            type: "product"
        };
        const response = await axios.post(`${api}/cms/autocomplete`, postData, );
        return response;
    } catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
        console.log(error);
    }
};

