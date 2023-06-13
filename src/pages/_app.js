import '@/styles/globals.css'
import { HomeTitle, SliderBreak, useStyles } from "../styles/homeslider.styles";
import { MyNavbar, SearchIconWrapper, Search, IconLink, } from "../styles/navbar.styles";
import { MyStyledGrid, StyledTitle, MyMainMenu } from "../styles/newarrivals.styles";
import "../styles/homeslider.styles";
import "../styles/signup.styles";
import { MyMain, Item, Image, Image1 } from "../styles/productsdetails.styles";
import { MyCart, MyMobileCart, MyCartParent,  } from "../styles/cart.styles";
import { MySideMenu } from "../styles/category.styles";
import { MyCheckout } from "../styles/checkout.styles";
import {MyStyledButton} from "../styles/button.styles";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'; // create this file
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
	ThemeProvider,
	createTheme,
} from "@mui/material/styles";
import CommonData from '@/context/CommonDataContext';
import CartStore from '@/context/cart';

export default function App({ Component, pageProps }) {
	const theme = createTheme();

	return <CartStore><CommonData><ThemeProvider theme={theme}><Navbar /><Component {...pageProps} /><Footer /></ThemeProvider></CommonData></CartStore>
}
