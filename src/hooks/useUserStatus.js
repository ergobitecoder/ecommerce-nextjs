import { CartContext } from "@/context/cart";
import { useState, useEffect, useContext } from "react";
export const useUserStatus = () => {
    if (typeof window !== 'undefined') {

        var accessToken = window.localStorage.getItem('accessToken');
        var guestUserId = localStorage.getItem("guestUserId");
        var token = localStorage.getItem("authToken");

    }
    const [isLogged, setIsLogged] = useState(false);
    const { cartState, cartDispatch } = useContext(CartContext);
    // const userId = localStorage.getItem("authToken");
    useEffect(() => {
        setIsLogged(!token ? false : true);
        if (token && !guestUserId) {
            cartDispatch.fetchData(token)
        } else if (guestUserId && token) {
            cartDispatch.updateuUserCart(guestUserId, token)
        } else if (guestUserId) {
            cartDispatch.fetchData(guestUserId)
        }
    }, [token, guestUserId])


    return { isLogged };
};

