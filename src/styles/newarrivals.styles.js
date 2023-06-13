import styled from "../theme";
import { css, keyframes } from "@emotion/react";
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";

export const MyMainMenu = styled("div")((props) => ({

	[props.theme.breakpoints.down("sm")]: {
		// margin: "10px",
		display: "flex",
		justifyContent: "center",
		paddingLeft: '11px',
		marginRight: 'auto',
	},
	[props.theme.breakpoints.up("sm")]: {
		display: "flex",
		justifyContent: "center",
		paddingLeft: '70px',
		paddingRight: '70px',
		marginLeft: 'auto',
		textAlign: "center",
		marginRight: 'auto',
	},
	[props.theme.breakpoints.up("lg")]: {
		display: "flex",
		justifyContent: "center",
		maxWidth: '1140px',
		// marginLeft: 'auto',
		paddingLeft: '0px',
		paddingRight: '0px',
		textAlign: "center",
		// marginRight: 'auto',
	},
	[props.theme.breakpoints.up("xl")]: {
		display: "flex",
		justifyContent: "center",
		maxWidth: '1420px',
		// marginLeft: 'auto',
		paddingLeft: '0px',
		paddingRight: '0px',
		textAlign: "center",
		// marginRight: 'auto',
	},
}));

export const MyStyledGrid = styled(Grid)((props) => ({
	[props.theme.breakpoints.down("sm")]: {
		display: 'none'
	},
	[props.theme.breakpoints.up("sm")]: {
		display: 'block',
		marginBottom: '30px',
		// width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto'
	},

}));

export const SliderBreak = styled("div")((props) => ({

	marginLeft: 'auto',
	marginRight: 'auto',
	marginBottom: '42px',
	[props.theme.breakpoints.down("sm")]: {
		width: '350px'
	},
}));
export const HomeTitle = styled("div")((props) => ({
	fontSize: '14px',
	fontWeight: '600',
	color: 'black',
	lineHeight: '16px',
	marginBottom: '21px',
	textAlign: 'left'
}));


export const StyledTitle = styled(Grid)((props) => ({
	textAlign: 'left',
	fontSize: '18px',
	fontWeight: '600',
	marginBottom: '20px',
	lineHeight: '21px'

}));

export const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
	card: {
		maxWidth: 345,
		margin: theme.spacing(2),
		[theme.breakpoints.down("sm")]: {
			maxWidth: "100%",
		},
	},
	media: {
		height: 140,
	},
	productTitle: {
		textAlign: 'left',
		fontSize: '16px',
		fontWeight: '700',
		lineHeight: '16px',
		color: '#000000',
		// marginTop: '16px',
	},
	priceTitle: {
		fontSize: '16px',
		fontWeight: '700',
		lineHeight: '24px',
		color: '#000000',
		// marginTop: '8px',
		display: 'flex',
		alignItems: 'center'
	},
	productDescription: {
		fontSize: '14px',
		fontWeight: '400px',
		lineHeight: '16px',
		color: '#000000',
		marginTop: '27px',
		textAlign: 'left'
	},
	sliderspace: {
		[theme.breakpoints.up("sm")]: {
			width: '224px',
			// height: '200px',
			marginLeft: 'auto',
			marginRight: 'auto'
		},
		[theme.breakpoints.up("xl")]: {
			width: '295px',
			// height: '200px',
			marginLeft: 'auto',
			marginRight: 'auto'
		},
		[theme.breakpoints.down("sm")]: {
			width: '200px',
			// height: '200px',
			marginRight: 'auto'
		},


	},

	sliderBackground: {
		background: '#FEF0FA',
	},
	sliderflexBox: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	StarIcons: {
		display: 'flex',
		justifyContent: 'left',
		marginTop: '10px',
		color: '#000000'
	},
	gridPosition: {
		[theme.breakpoints.up("md")]: {
			width: '99%',
			marginLeft: 'auto',
			marginRight: 'auto'
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: 'auto',
			marginRight: 'auto'
		},
	},


}));