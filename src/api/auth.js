import axios from "axios";
import jwt_decode from 'jwt-decode';
const api = process.env.NEXT_PUBLIC_API_URL_NODE;

export const getMasterUsersData = async () => {
    try {
        const response = await axios.post(`${api}/masterRole/list`);
        return response
    }
    catch (error) {
        console.log(error);
    }
};

export const verifyUser = async (email, password) => {
    const payload = {
        email: email,
        password: password
    };
    try {
        const response = await axios.post(`${api}/login`, payload);
        const authToken = response.data.result.user._id;
        const accessToken = response.data.result.accessToken;
        const refreshToken = response.data.result.refreshToken;
        if (typeof window !== 'undefined') {

            window.localStorage.setItem("accessToken", accessToken);
            window.localStorage.setItem("refreshToken", refreshToken);
        }
        setInterval(() => {
            const { exp } = jwt_decode(window.localStorage.getItem("accessToken"));
            const remainingTime = exp - Math.floor(Date.now() / 1000);
            if (remainingTime < 120) {
                getRefreshToken();
            }
        }, 29 * 60 * 1000);
        if (authToken) {
            if (typeof window !== 'undefined') {

                window.localStorage.setItem("authToken", authToken);
            }
            return { token: authToken };
        } else {
            throw new Error("Unable to retrieve auth token");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            if (error.response.data.error.message === 'Email Id not Found') {
                return 'Email Id not Found';
            } else if (error.response.data.error.message === 'Invalid Password') {
                return 'Invalid Password';
            }
        }
        console.log(error);
        return false;
    }
};



export const signOut = async () => {

    try {
        return { msg: "success" }
    } catch (e) {
        console.log(e);
    }
};


export const saveUser = async (data) => {
    const payload = {
        email: data.email.email,
        mobile: data.mobile.mobile,
        firstName: data.firstName.firstName,
        lastName: data.lastName.lastName,
        password: data.password.password,
        ordersCount: data.ordersCount.ordersCount,
        verified: data.verified.verified,
        status: data.status.status,
        roles: data.roles.roles,
        ipAddress: data.ipAddress.ipAddress
    };
    try {
        const response = await axios.post(`${api}/login/signup`, payload);

        return "User added succesfully"
        if (response.status == 200) {
            // console.log("User added succesfully");
        }
    }
    catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            if (error.response.data.error.message === 'Email Id Already Exist') {
                return 'Email already exists';
            } else if (error.response.data.error.message === 'Mobile number Already Exist') {
                return 'Mobile number already exists';
            }
        }
        console.log(error);
        return false;
    }
};


export const submitUser = async (data) => {
    const payload = {
        email: data.email.data,
        mobile: data.mobile.data,
        firstName: data.firstName.data,
        lastName: data.lastName.data,
        password: data.password.data,
        ordersCount: data.ordersCount.data,
        verified: data.verified.data,
        status: data.status.data,
        roles: data.roles.data,
        ipAddress: data.ipAddress.data
    };
    try {
        const response = await axios.post(`${api}/user`, payload);
        return "User added succesfully"
        if (response.status == 200) {
            // console.log("User added succesfully");
        }
    }
    catch (error) {
        console.log(error);
    }
};

export const submitUserAddress = async (data, id) => {

    const payload = {
        userId: data.userId,
        guestUserId: data.guestUserId,
        // name: data.name.data,
        firstName: data.firstName.data,
        lastName: data.lastName.data,
        address1: data.address1.data,
        city: data.city.data,
        phone: data.phone.data,
        zipCode: data.zipCode.data,
        countryCode: data.countryCode.data,
        countryName: data.countryName.data,
    };
    try {
        const response = await axios.post(`${api}/userAddress/`, payload);
        return response
        if (response.status == 200) {
            // console.log("User Address added succesfully");
        }
    }
    catch (error) {
        console.log(error);
    }
};

export const editUserAddress = async (data, id) => {

    const payload = {
        userId: data.userId,
        name: data.name.data,
        firstName: data.firstName.data,
        lastName: data.lastName.data,
        address1: data.address1.data,
        city: data.city.data,
        phone: data.phone.data,
        zipCode: data.zipCode.data,
        countryCode: data.countryCode.data,
        countryName: data.countryName.data,
        apartment: data.apartment.data,
        state: data.state.data,
    };
    console.log(payload);

    try {
        const response = await axios.put(`${api}/user/userAddress/${id}`, payload);
        console.log(response);
        return response
        if (response.status == 200) {
            // console.log("User Address added succesfully");
        }
    }
    catch (error) {
        console.log(error);
    }
};

export const getUserAddressData = async (id) => {
    try {
        const response = await axios.get(`${api}/user/userAddress/${id}`);
        return response
    }
    catch (error) {
        console.log(error);
    }
};

export const getLoggedUserData = async (id) => {
    try {
        const response = await axios.get(`${api}/user/${id}`);
        return response
    }
    catch (error) {
        console.log(error);
    }
};

export const getRefreshToken = async () => {
    if (typeof window !== 'undefined') {

        var refreshToken = window.localStorage.getItem('refreshToken');
        var authToken = window.localStorage.getItem('authToken');
        var accessToken = window.localStorage.getItem('accessToken');
    }
    const payload = {
        refreshToken: refreshToken,
        userId: authToken
    };
    try {
        const response = await axios.post(`${api}/login/refreshToken`, payload);
        const newAccessToken = response.data.result.accessToken;
        const newRefreshToken = response.data.result.refreshToken;
        return response
        if (typeof window !== 'undefined') {

            window.localStorage.setItem('accessToken', newAccessToken);
            window.localStorage.setItem('refreshToken', newRefreshToken);
        }
    } catch (error) {
        console.error(error);
    }
};
