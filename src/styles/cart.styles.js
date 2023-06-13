import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
	desktopwidth: {

		[theme.breakpoints.up("sm")]: {
			paddingLeft: '25px',
			paddingRight: '25px',
			maxWidth: '1120px',
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		[theme.breakpoints.up("lg")]: {
			paddingLeft: '0px',
			paddingRight: '0px',

		},
		[theme.breakpoints.up("xl")]: {
			paddingLeft: '0px',
			paddingRight: '0px',
			maxWidth: '1420px',
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	currancy: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: '7px'
	},

	quantitySelector: {
		display: "inline - flex",
		alignItems: "center",
		border: '1px solid gray',
		borderRadius: '50px',
		// height: '30px'

	},
	varablesTitle: {
		fontSize: '14px',
		fontWeight: '500',
		lineHeight: '14px',
		color: '#000000',
		marginRight: '7px'
	},

	quantityButton1: {
		display: 'inline-block',
		padding: "0.3rem 0.5rem",
		fontSize: "1rem",
		fontWeight: "bold",
		textAlign: "center",
		color: "black",
		backgroundColor: "#d2d4d2",
		border: "none",
		cursor: "pointer",
		transition: "all 0.2s",
		borderTopLeftRadius: '50px',
		borderBottomLeftRadius: '50px',
		height: '30px',
	},
	quantityButton2: {
		display: 'inline-block',
		padding: "0.3rem 0.5rem",
		fontSize: "1rem",
		fontWeight: "bold",
		textAlign: "center",
		color: "black",
		backgroundColor: "#d2d4d2",
		border: "none",
		cursor: "pointer",
		transition: "all 0.2s",
		borderTopRightRadius: '50px',
		borderBottomRightRadius: '50px',
		height: '30px',

	},
	middleCart: {
		// marginLeft: '20px',
		// marginRight: '20px'
	},
	size: {
		marginLeft: '40px'
	},
	quantityNumber: {
		display: "inline-block",
		margin: "0 0.5rem",
		fontSize: "1.2rem",
		fontWeight: "bold",
	},
	alignSizeQuantity: {
		[theme.breakpoints.down("sm")]: {
			display: 'flex',
			flexDirection: 'column',
			// justifyContent: 'space-between',
			// width: '200px'

		},
		[theme.breakpoints.up("sm")]: {
			display: 'flex',
			flexDirection: 'row',
			// justifyContent: 'space-between',
			// width: '200px'

		},

	},
	Quantity: {
		marginTop: '10px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down("sm")]: {
			width: 'fit-content',

		},
		[theme.breakpoints.up("sm")]: {
			// marginLeft: "100px"
			width: 'fit-content',

		},
	},

	cartList: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cartTitle: {
		fontSize: '16px',
		fontWeight: '700',
		lineHeight: '16px',
		textAlign: 'left'
	},

	priceperpiece: {
		fontSize: '14px',
		fontWeight: '500',
		lineHeight: '14px',
		marginTop: '6px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	cartListborder: {
		border: '1px solid black',
		padding: '10px',
		// marginTop: '15px'
	},
	outofstock: {
		color: 'rgb(255, 0, 0)',
		fontWeight: '500',
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down("sm")]: {
			fontSize: '16px',
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: '18px',
		},
	},
	alignStars: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		fontWeight: '700',
		lineHeight: '30px',
		alignItems: 'center',
		[theme.breakpoints.down("sm")]: {
			fontSize: '16px',
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: '20px',
		},
	},
	cartHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	cartattribute: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	cartImg: {
		[theme.breakpoints.down("sm")]: {
			width: '38px',
			height: '41px',
			marginRight: '10px'
		},
		[theme.breakpoints.up("sm")]: {
			width: '105px',
			height: '136px'
		},

	},
	productVariants: {
		[theme.breakpoints.down("sm")]: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between'
		},
		[theme.breakpoints.up("sm")]: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between'
		},

	},
	cartquantparent: {
		textAlign: 'left',
		[theme.breakpoints.down("sm")]: {
			width: '100%'
		},
		[theme.breakpoints.up("sm")]: {
			width: '25%'
		},
	},
	cartdescparent: {
		textAlign: 'left',
		[theme.breakpoints.down("lg")]: {
			display: 'none'
		},
		[theme.breakpoints.up("sm")]: {
			width: '30%'
		},
	},
	cartImageparent: {
		[theme.breakpoints.down("sm")]: {
			// width: '100%'
		},
		[theme.breakpoints.up("md")]: {
			width: '15%'
		},
	},
	emptycart: {
		textAlign: 'center',
		fontSize: '28px',
		fontWeight: '500',
		marginTop: '50px',
		alignItems: 'center',
		[theme.breakpoints.down("sm")]: {
			minHeight: '150px',
		},
		[theme.breakpoints.up("sm")]: {
			minHeight: '530px',
		},
		[theme.breakpoints.up("md")]: {
			// width: '20%',
			minHeight: '300px',
		},
	},
	tabledisplay: {
		[theme.breakpoints.down("lg")]: {
			display: 'none'
		},
		[theme.breakpoints.up("lg")]: {
			display: 'block'
		},
	},
	cartListheadings: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '10px',
		background: '#D9D9D9',
		fontSize: '20px',
		fontWeight: '600'
	},
	cartdelete: {
		width: '100px',
		display: 'flex',
		textAlign: 'right',
		flexDirection: 'column',
		justifyContent: 'space-between',
		color: '#FF00AE'
		// paddingLeft: '50px'
	},
	cartdeletes: {
		width: '170px',
		display: 'flex',
		textAlign: 'left',
		flexDirection: 'column',
		justifyContent: 'space-between',
		color: '#FF00AE',
		fontWeight: '700',
		[theme.breakpoints.down("sm")]: {
			width: '100%',
			display: 'none'
		},

	},
	checkoutBtn: {
		[theme.breakpoints.down("sm")]: {
			textAlign: 'center',
			background: '#FF00AE',
			padding: '10px 30px 10px 30px',
			mt: '20px',
			fontSize: '18px',
			borderRadius: '0px',
			border: '0px',
			color: '#FFFFFF',
			marginTop: '20px',
			cursor: 'pointer',
			width: '100%',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center'
		},
		[theme.breakpoints.up("sm")]: {
			textAlign: 'left',
			background: '#FF00AE',
			padding: '10px 30px 10px 30px',
			mt: '20px',
			fontSize: '18px',
			borderRadius: '50px',
			border: '0px',
			color: '#FFFFFF',
			marginTop: '20px',
			cursor: 'pointer',
		},
	}


}))

export const OrderList = styled(Paper)((props) => ({
	[props.theme.breakpoints.down("sm")]: {
		padding: '13px',
	},
	[props.theme.breakpoints.up("sm")]: {
		padding: '13px',
	},
}));

export const MyCartParent = styled("div")((props) => ({
	[props.theme.breakpoints.down("sm")]: {
		padding: '13px',
	},
	[props.theme.breakpoints.up("sm")]: {
		padding: '13px',
	},
}));
export const MyCart = styled(Paper)((props) => ({

	textAlign: "left",
	padding: "50px",
	minHeight: "60vh",
	margin: "0 auto",
	[props.theme.breakpoints.up("md")]: {
		maxWidth: "800px",
	},
}));
export const Item = styled(Paper)((props) => ({
	backgroundColor: "white",
	fontSize: '20px',
	fontWeight: '700',
	lineHeight: '24px',
	textAlign: 'left',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	[props.theme.breakpoints.down("sm")]: {
		padding: "15px",
		marginTop: '22px',
		marginBottom: '22px'
	},

	[props.theme.breakpoints.up("sm")]: {
		padding: "25px",

	},
}));

export const MyMobileCart = styled(Paper)((props) => ({
	padding: "20px",
	display: "flex",
	marginBottom: "20px",
	[props.theme.breakpoints.down("sm")]: {
		padding: "20px",
		display: "flex",
		flexDirection: "column",
	},
}));
