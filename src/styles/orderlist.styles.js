import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const MyThankYou = styled("div")((props) => ({
    textAlign: "center",


    [props.theme.breakpoints.down("sm")]: {
        padding: '13px',
    },
    [props.theme.breakpoints.up("sm")]: {
        padding: '32px',
        maxWidth: '1120px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [props.theme.breakpoints.up("lg")]: {
        padding: '0px',
    },
    [props.theme.breakpoints.up("xl")]: {
        maxWidth: '1420px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

}));
export const useStyles = makeStyles(theme => ({
    inputFields: {
        [theme.breakpoints.down("sm")]: {
            marginTop: '10px'
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '29px'

        },
    },
    thankText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '24px',
        color: '#2AC957'
    },
    pagination: {
        border: '1px solid gray',
        borderRadius: '50px',
        marginTop: '20px',
        padding: '10px 15px 10px 15px',
        marginLeft: '10px',
        backgroundColor: 'white'
    },
    selectedPage: {
        backgroundColor: '#edebeb'
    },
    currancy: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkoutButton: {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '16px',
        background: '#FF00AE',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '13px 0px 13px 0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mySelect: {
        width: '200px',
        height: "30px"
    },
    quantitySelector: {
        display: "inline - flex",
        alignItems: "center",
        marginBottom: '20px',
        border: '1px solid gray',
        borderRadius: '50px'
    },
    varablesTitle: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '14px',
        color: '#000000',
        marginTop: '6px',
        marginBottom: '6px'
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
        borderBottomLeftRadius: '50px'
    },
    priceperpiece: {
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '14px',
        marginTop: '6px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceitem: {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '14px',
        marginTop: '6px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    quantitydisplay: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        width: '20%'
    },
    alignStar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px',
        alignItems: 'center',
        textAlign: 'right'
    },
    qtyperpiece: {
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '14px',
        marginTop: '6px',
        textAlign: 'right'
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
        borderBottomRightRadius: '50px'
    },
    middleCart: {
        marginLeft: '20px',
        marginRight: '20px',
        [theme.breakpoints.up("sm")]: {
            width: '30%'
        },

    },
    cartdeletes: {
          display: 'flex',
        textAlign: 'left',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontWeight: '400',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            display: 'none'
        },
        [theme.breakpoints.up("sm")]: {
            width: '46%',
        },

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
        display: 'flex',

    },
    Quantity: {
        [theme.breakpoints.down("sm")]: {
            width: 'fit-content',
        },
        [theme.breakpoints.up("sm")]: {
            // marginLeft: "100px"
        },
    },

    cartList: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        border: '1px solid black',
        padding: '10px',
        marginTop: '15px'
    },
    cartTitle: {
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px'
    },
    cartDesc: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '14px',
        marginTop: '6px',
    },
    alignStars: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16px'
    },
    cartHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cartImg: {
        [theme.breakpoints.down("sm")]: {
            width: '38px',
            height: '41px'
        },
        [theme.breakpoints.up("sm")]: {
            width: '105px',
            height: '136px'

        },

    },
    imageparent: {
        [theme.breakpoints.up("sm")]: {
            width: '25%',
        },
    },
    estimatedTltle: {
        fontWeight: '400',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            lineHeight: '17px'
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '20px',
            lineHeight: '24px'
        },
    },
    estimatedTltle1: {
        fontWeight: '400',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            lineHeight: '17px',
            marginLeft: '20px'

        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '20px',
            lineHeight: '24px',
            marginLeft: '40px'

        },
    },
    orderListhead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderListhead1: {
        display: 'flex',
        flexDirection: 'row'
    },
    payBtn: {
        textAlign: 'left',
        background: '#FF00AE',
        padding: '10px 30px 10px 30px',
        mt: '20px',
        fontSize: '18px',
        borderRadius: '50px',
        border: '0px',
        color: '#FFFFFF',
        marginTop: '20px'
    },
}))
export const OrderList = styled(Paper)((props) => ({
    padding: '20px',
    border: '1px solid #939191',
    textAlign: 'left',
    [props.theme.breakpoints.down("sm")]: {
        marginTop: '29px'
    },
    [props.theme.breakpoints.up("sm")]: {
        marginTop: '54px'
    },
}));