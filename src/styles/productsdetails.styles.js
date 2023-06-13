import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(theme => ({
    alignStars: {
        display: "flex",
        justifyContent: "left",
        alignItems: 'center',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '30px',
    },
    currencyamount: {
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '30px',
        display: "flex",
        alignItems: 'center',
    },
    varablesTitle: {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '19px',
        color: '#000000',
        minWidth: '70px'
    },
    productTitle: {
        fontWeight: '500',
        color: '#000000',
        [theme.breakpoints.down("sm")]: {
            fontSize: '18px',
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '28px',
        },
    },
    productdesc: {
        fontWeight: '400',
        color: '#000000',
        [theme.breakpoints.down("sm")]: {
            fontSize: '12px',
            lineHeight: '21px',
            marginTop: '14px',
            marginBottom: '23px'
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '14px',
            lineHeight: '16px',
            marginTop: '22px',
            marginBottom: '36px'
        },
    },
    mySelect: {
        width: '200px',
        height: "30px"
    },
    quantitySelector: {
        display: "inline - flex",
        alignItems: "center",
        border: '1px solid #D9D9D9',
        marginLeft: '4px'
    },
    quantityButton: {
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
    },
    quantityNumber: {
        display: "inline-block",
        margin: "0 0.5rem",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    alignSizeQuantity: {
        display: 'flex',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            justifyContent: 'flex-start'
        },
        [theme.breakpoints.up("sm")]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',

        },

    },
    addquantity: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: '5px',

    },
    Quantity: {
        position: 'relative',
        right: '0px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down("sm")]: {
            width: 'fit-content',
        },
        [theme.breakpoints.up("sm")]: {

            marginLeft: 'auto'
        },

    },
    outofstock: {
        color: 'rgb(255, 0, 0)',
        fontWeight: '500',
        [theme.breakpoints.down("sm")]: {
            fontSize: '16px',
            textAlign: 'left',

        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '18px',
            textAlign: 'right',
            marginLeft: 'auto'

        },
    },
    productDeatils: {
        display: 'flex',

        [theme.breakpoints.down("sm")]: {
            paddingLeft: '10px',
            paddingRight: '10px',
        },
        [theme.breakpoints.down("lg")]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up("lg")]: {
            flexDirection: 'row',
            // justifyContent: 'space-between',
            // minHeight: '640px'
            // paddingLeft: '30px',
            // paddingRight: '30px',
        },
    },
    detailspageht: {
        minHeight: 'fit-content',
        [theme.breakpoints.down("sm")]: {

        },
        [theme.breakpoints.down("lg")]: {

        },
        [theme.breakpoints.up("lg")]: {
            marginBottom: '75px'
        },
    },
    selectedImage: {
        border: 'red'
    },
    unselectedImage: {
        border: 'black'
    },
    spaceBox: {
        flex: '0 0 calc(50% - 1rem)',
        marginBottom: '2rem',
        // maxWidth: 'fit-content',
    },
    productparent: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down("sm")]: {
            gap: '9px',
            width: '265px',
            marginTop: '4px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.up("sm")]: {
            gap: '9px',
            width: '550px',
            marginTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.up("md")]: {
            // gap: '10px',
            width: '550px',
            marginTop: '5px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },

        [theme.breakpoints.up("lg")]: {
            width: "550px",
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10px',
            // paddingLeft:'30px'
        },
        [theme.breakpoints.up("xl")]: {
            width: "680px",
            marginLeft: 'auto',
            marginRight: 'auto',
        },

    },
    productDeatils1: {

        [theme.breakpoints.down("sm")]: {
            height: '320px',

        },
        [theme.breakpoints.up("sm")]: {
            height: '500px',

        },
        [theme.breakpoints.up("md")]: {
            height: '600px',

        },
        // [theme.breakpoints.down("lg")]: {
        //     width: '100%',

        // },
        [theme.breakpoints.up("lg")]: {
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    descContent: {

        [theme.breakpoints.down("lg")]: {
            padding: '25px',
            marginBottom: '38px',
        },
        [theme.breakpoints.up("lg")]: {
            padding: '10px',
            marginBottom: '42px',

        },
    },
    attributename: {
        fontSize: '16px',
        fontWeight: '700',
        minWidth: '70px',
        maxWidth: '100px'
    },
    attributeparent: {
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    },
    attributeparents: {
        marginBottom: '10px',
        marginTop: '10px'
    },

    productDeatils2: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: '35px',
            marginRight: '35px',
            marginTop: '100px'
        },
        [theme.breakpoints.up("md")]: {
            // marginLeft: '35px',
            // marginRight: '35px',
            marginTop: '0px'
        },
        [theme.breakpoints.up("lg")]: {
            width: '50%',
            // marginLeft: '40px',
            marginRight: 'auto'

        },
    },
    showMore: {
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '16px',
        textDecoration: 'underline',
        [theme.breakpoints.down("sm")]: {
            marginTop: '25px',
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '50px',
        },
    },
    buttonSpacing: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '0px',
        [theme.breakpoints.down("sm")]: {
            marginTop: '0px',
        },
        [theme.breakpoints.up("sm")]: {
            // marginTop: '30px'
        },
    },
    variantlayout: {
        display: 'flex',
        flexDirection: 'row',
        width: '150px'

    },
    descTitle: {
        fontWeight: '600',
        color: '#000000',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            lineHeight: '16px',
            marginTop: '25px'
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '18px',
            lineHeight: '21px',
            marginTop: '45px'

        },

    },
    desc: {
        fontWeight: '400',
        color: '#000000',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            lineHeight: '16px',
            marginTop: '10px'
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '18px',
            lineHeight: '21px',
            marginTop: '10px',
            marginBottom: '5px'

        },

    },
    similarProduct: {
        [theme.breakpoints.down("sm")]: {
            marginTop: '38px'
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '42px'

        },
    },
    variantImages: {
        [theme.breakpoints.up("sm")]: {
            width: "120px",
            height: "120px"
        },
        [theme.breakpoints.up("lg")]: {
            width: "120px",
            height: "120px"

        },
    },
    varborder: {
        border: '1px solid #D9D9D9',
        marginTop: '12px',

    },
    variantprice: {
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '30px',
        [theme.breakpoints.down("sm")]: {
            textAlign: 'left',
        },
        [theme.breakpoints.up("sm")]: {
            textAlign: 'right',
        },
    },
    productVar: {
        padding: '10px',
        display: 'flex',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            padding: '15px',

        },
        [theme.breakpoints.up("sm")]: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
    },
    paddingdstock: {
        marginBottom: '10px',
        textAlign: 'right',
        marginLeft: 'auto'
    },
    variantname: {
        fontSize: '16px',
        fontWeight: '400',

    },
    continueBtn: {
        textAlign: 'right',
        background: '#FF00AE',
        padding: '10px 20px 10px 20px',
        fontSize: '12px',
        borderRadius: '50px',
        color: '#FFFFFF',
        border: '0px',
        fontWeight: '600',
        cursor: 'pointer'
    },
    variantdisplay: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '10px',
        // alignItems: 'center',
        width: '300px'

    },
    varianttitle: {
        fontSize: '14px',
        fontWeight: '700',
        marginRight: '20px',
        width: '80px'
    },
    varianttitles: {
        fontSize: '14px',
        fontWeight: '700',
        marginRight: '20px',
        // width: '80px'
    },
    similardata: {
        [theme.breakpoints.down("sm")]: {
            // width: '90%',
            padding: '10px',
            marginLeft: 'auto',
            marginRight: 'auto'

        },
        [theme.breakpoints.up("sm")]: {
            // padding: '10px',
            marginBottom: '40px',
            marginLeft: '35px',
            marginRight: '35px'
        },
        [theme.breakpoints.up("lg")]: {
            // padding: '10px',
            marginBottom: '0px',
            marginLeft: '0px',
            marginRight: '0px'
        },
        [theme.breakpoints.up("xl")]: {
            maxWidth: '1420px',
            marginLeft: 'auto',
            marginRight: 'auto'

        },
    },
    varintheaddings: {
        fontSize: '14px',
        fontWeight: '700',
        marginBottom: '10px',
    },
    description: {
        marginBottom: '30px',
        [theme.breakpoints.up("sm")]: {
            marginTop: '25px',
        },
        [theme.breakpoints.up("lg")]: {
            marginTop: '25px',
        },
    },

    desktopsliderwidth: {
        [theme.breakpoints.up("lg")]: {
            width: '130px',
            height: '130px'
        },
        [theme.breakpoints.up("xl")]: {
            width: '160px',
            height: '170px'
        },
    },
    availablevariant: {
        [theme.breakpoints.down("sm")]: {
            // padding: '20px',
            marginTop: '10px',
        },
        [theme.breakpoints.up("sm")]: {
            // padding: '30px',
            marginTop: '10px',

        },
        [theme.breakpoints.up("lg")]: {
            padding: '0px',
            marginTop: '50px',

        },
    },
    availablevariants: {
        [theme.breakpoints.down("sm")]: {

        },
        [theme.breakpoints.up("sm")]: {
            overflowY: 'scroll',
            height: '300px',

        },
        [theme.breakpoints.up("lg")]: {
            height: '300px',

        },
    },
    parentImage: {
        [theme.breakpoints.down("sm")]: {
            width: "265px",
            height: "215px",

        },
        [theme.breakpoints.up("sm")]: {
            width: "550px",
            height: "423px"

        },
        [theme.breakpoints.up("lg")]: {
            width: "550px",
            height: "400px",
            marginLeft: 'auto',
            marginRight: 'auto',

        },
        [theme.breakpoints.up("xl")]: {
            width: "680px",
            height: "400px",
            marginLeft: 'auto',
            marginRight: 'auto',

        },

    },

    namepricelayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: '5px'
    },
    allvariantstext: {
        marginTop: '20px',
        fontSize: '20px',
        fontWeight: '700',
        marginLeft: '10px'
    }

}));
export const MyMain = styled("div")((props) => ({
    marginTop: "30px",

    [props.theme.breakpoints.up("sm")]: {
        maxWidth: '1120px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    [props.theme.breakpoints.up("xl")]: {
        maxWidth: '1420px',
        marginLeft: 'auto',
        marginRight: 'auto',

    },

}));
export const Item = styled("div")((props) => ({
    backgroundColor: "white",
    textAlign: "left",
    minHeight: "fit-content",
    [props.theme.breakpoints.down("sm")]: {
        // padding: "2px",
    },

    [props.theme.breakpoints.up("sm")]: {

    },
}));

export const Image = styled("div")((props) => ({
    [props.theme.breakpoints.down("sm")]: {
        display: 'block',
        width: "265px",
        height: "415px",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '20px'

    },
    [props.theme.breakpoints.up("sm")]: {
        display: 'block',
        width: "513px",
        height: "425px",
        marginLeft: 'auto',
        marginRight: 'auto',
        // marginBottom: '20px'

    },
    [props.theme.breakpoints.up("lg")]: {
        display: 'none'
    },

}));
export const Image1 = styled("div")((props) => ({
    // border: '1px solid #D9D9D9',
    [props.theme.breakpoints.down("lg")]: {
        display: 'none',
    },
    [props.theme.breakpoints.up("lg")]: {
        width: "550px",
        height: "475px",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [props.theme.breakpoints.up("xl")]: {
        display: 'block',
        width: "680px",
        height: "475px",
        marginLeft: 'auto',
        marginRight: 'auto',
        // border: '1px solid gray',

        // marginLeft: 'auto',
        // marginRight: 'auto',
    },

}));
