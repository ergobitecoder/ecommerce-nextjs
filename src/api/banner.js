import axios from 'axios';
import { getRefreshToken } from './auth';
const api = process.env.NEXT_PUBLIC_API_URL_NODE;

export const getBanner = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    try {
        const response = await axios.post(`${api}/banner/list`,);
        return response 
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token')
        {
            await getRefreshToken();            
        }

    }
};