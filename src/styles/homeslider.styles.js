import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const HomeTitle = styled("div")((props) => ({
    [props.theme.breakpoints.down("sm")]: {
        textAlign: 'left',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '20px',
        color: '#000000',
        // marginTop: '29px',
        marginLeft: '11px',
        marginBottom: '10px',

    },
    [props.theme.breakpoints.up("sm")]: {
        // marginTop: '70px',
        marginBottom: '20px',
        textAlign: 'left',
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '21px',
        color: '#000000',
        marginLeft: '68px',


    },
    [props.theme.breakpoints.up("lg")]: {
        // marginTop: '70px',
        marginBottom: '20px',
        marginLeft: '0px',
        textAlign: 'left',
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '21px',
        color: '#000000',

    },
 [props.theme.breakpoints.up("xl")]: {
        marginLeft: '0px',
     

    },

}));

export const useStyles = makeStyles(theme => ({
    sliderimage: {
        [theme.breakpoints.up('sm')]: {
            width: '140px',
            height: '160px',
        },
        [theme.breakpoints.up('md')]: {
            width: '200px',
            height: '200px',
        },
    },
    maxWidth: {
        [theme.breakpoints.up('xl')]: {
            width: '1420px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    productTitle: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '16px',
            color: '#000000',
            marginTop: '16px',
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '21px',
            color: '#000000',
            marginTop: '23px',
        },


    },
    priceTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '24px',
            color: '#000000',
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '29px',
            color: '#000000',
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center'
        },
    },
    productDescription: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            fontWeight: '400px',
            lineHeight: '16px',
            color: '#000000',
            marginTop: '8px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '14px',
            fontWeight: '400px',
            lineHeight: '16px',
            color: '#000000',
            marginTop: '12px',
            paddingRight: '20px'
        },

    },
    sliderspace: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '20px'
        },
        [theme.breakpoints.up('sm')]: {
            width: '262px',
            height: '152px',
            paddingLeft: '40px',
            paddingRight: '40px'
        },
        [theme.breakpoints.up('sm')]: {
            width: '292px',
            height: '152px',
            paddingLeft: '40px',
            paddingRight: '40px'
        },
    },


    sliderBackground: {
        background: '#FEF0FA'
    },

}));
export const SliderBreak = styled("div")((props) => ({
   
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '21px',
    [props.theme.breakpoints.down("sm")]: {
        width: '213px'
    },
    [props.theme.breakpoints.up("sm")]: {
        // paddingLeft: '70px',
        // paddingRight: '70px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '58px',
        width: '639px',

    },
    [props.theme.breakpoints.up("lg")]: {
        // paddingLeft: '70px',
        // paddingRight: '70px',
        marginTop: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px',
        width: '1140px',

    },
    [props.theme.breakpoints.up("xl")]: {
        // paddingLeft: '70px',
        // paddingRight: '70px',
        marginTop: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px',
        width: '1420px',

    },

}));