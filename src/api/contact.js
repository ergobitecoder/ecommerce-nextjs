import axios from 'axios';
import { getRefreshToken } from './auth';

const api = process.env.NEXT_PUBLIC_API_URL_NODE

//function to send mail from user
export const contact = async (data) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const payload = {
        name: data.name.data,
        phone: data.phone.data,
        emailId: data.emailId.data,
        subject: data.subject.data,
    }
    try {
        const response = await axios.post(`${api}/email/sendEmail`, payload, { headers: { Authorization: `Bearer ${accessToken}` } });
    }
    catch (error) {
        if (error.response.data.message === 'Invalid token') {
            await getRefreshToken();
        }
    }
};

