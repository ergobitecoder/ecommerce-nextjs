import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import cartStore from '../stores/cartStore';
import { useUserStatus } from '../hooks/useUserStatus';
import { cartStore } from '../stores/cartStore';
import { addCartData, deleteProductVariant, getguestUserCartData, getUserCartData, UpdateCartData, updateloggrduserCart } from '@/api/cart';

export const CartContext = createContext(cartStore);


const CartStore = ({ children }) => {
    if (typeof window !== 'undefined') {

        var accessToken = window.localStorage.getItem('accessToken');
        var token = localStorage.getItem("authToken");
        var userId = localStorage.getItem("authToken");
        var guestUserId = localStorage.getItem('guestUserId');
        var GuestUsercartList = localStorage.getItem('GuestUsercartList');
        var cartCount = localStorage.getItem('cartCount');
    }
    const [loading, setLoading] = useState(true)
    const useUserStatus = () => {
        const [isLogged, setIsLogged] = useState(false);

        // useEffect(() => {
        //     setIsLogged(!token ? false : true);
        // }, [token])
        // return { isLogged };
    };

    const [cartData, setCartData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [count, setCount] = useState(0);
    const userSttus = useUserStatus();
    const [cartList, setCartList] = useState([]);

    // console.log(userSttus.isLogged, 'sss');

    const fetchData = async () => {
        const guestUserId = localStorage.getItem('guestUserId');
        if (guestUserId && !userId) {
            const data = await getguestUserCartData(guestUserId);
            setCartData(data.data.result);
            setLoading(false);
            // console.log(data);
            localStorage.setItem('cartCount', JSON.stringify(data.data.result.length));
            setCount(data.data.result.length)
            localStorage.setItem('GuestUsercartList', JSON.stringify(data.data.result));
            const price = data.data.result?.flatMap((variant) =>
                variant.productVariantId.price * variant.qty)
            const totalPrice = price.reduce((total, num) => total + num, 0);
            setTotalPrice(totalPrice);
        }
        if (userId) {
            const data = await getUserCartData(userId);
            setCartData(data.data.result);
            setLoading(false);
            localStorage.setItem('cartCount', JSON.stringify(data.data.result.length));
            setCount(data.data.result.length)
            localStorage.setItem('UsercartList', JSON.stringify(data.data.result));
            const price = data.data.result?.flatMap((variant) =>
                variant.productVariantId.price * variant.qty)
            const totalPrice = price.reduce((total, num) => total + num, 0);
            setTotalPrice(totalPrice);

        }
    };

    const updateuUserCart = async (guestUserId, token) => {
        if (guestUserId) {
            {
                const updateuserCart = await updateloggrduserCart(guestUserId, token)
                if (updateuserCart) {
                    await fetchData(token);
                    localStorage.removeItem('guestUserId');
                    localStorage.removeItem('GuestUsercartList');
                }
            }
        }
    }


    const handleCart = async (productId, productVariantId, quantity) => {
        const userId = localStorage.getItem("authToken");
        if (userId) {
            // console.log('userId', userId);

            const response = {
                productId: productId,
                productVariantId: productVariantId,
                userId: userId,
                quanity: quantity ? quantity : 1,
            };
            if (
                response.productId !== '' &&
                response.productVariantId !== '' &&
                response.userId !== '' &&
                response.quanity !== ''
            ) {
                const productData = response;
                setLoading(true);
                const productRes = await addCartData(productData);
                await fetchData();
            }
        } else {
            const response = {
                productId: productId,
                productVariantId: productVariantId,
                guestUserId: guestUserId,
                quanity: quantity ? quantity : 1,
            };
            if (
                response.productId !== '' &&
                response.productVariantId !== '' &&
                response.quanity !== ''
            ) {
                const productData = response;
                setLoading(true);
                const productRes = await addCartData(productData);

                if (productRes) {
                    const guestUserId = productRes.data.result.cartItem.guestUserId
                    localStorage.setItem('guestUserId', guestUserId);
                    console.log(guestUserId);
                    await fetchData();
                }
            }
        };
    }

    const UpdateAddCart = async (cart_id, productVariantId, qty) => {
        const response = {
            cart_id: cart_id,
            productVariantId: productVariantId,
            quanity: qty + 1,
        };
        if (
            response.productVariantId !== '' &&

            response.quanity !== ''
        ) {
            const productData = response;
            // console.log(response);
            const productRes = await UpdateCartData(productData);
            await fetchData(token);
        }
    };

    const UpdateremoveCart = async (cart_id, productVariantId, qty) => {
        const response = {
            cart_id: cart_id,
            productVariantId: productVariantId,
            quanity: qty - 1,
        };
        if (
            response.productVariantId !== '' &&

            response.quanity !== ''
        ) {
            const productData = response;
            // console.log(response);
            const productRes = await UpdateCartData(productData);
            await fetchData(token);
        }
    };

    const handleDeleteCart = async (cart_id) => {
        // console.log(cart_id);
        const response = {
            cart_id: cart_id,
        };
        if (response.cart_id !== '') {
            const productData = response;
            // console.log(response);
            const productRes = await deleteProductVariant(productData);
            await fetchData(token);
        }
    };



    // console.log(cartCount);
    const state = {
        cartData,
        totalPrice,
        cartCount,
        loading
    };

    const dispatch = {
        handleCart,
        handleDeleteCart,
        UpdateremoveCart,
        UpdateAddCart,
        fetchData,
        updateuUserCart
    };


    return (
        <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

CartStore.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartStore;
