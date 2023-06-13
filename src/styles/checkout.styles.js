import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const MyCheckout = styled("div")((props) => ({
    textAlign: "center",


    [props.theme.breakpoints.down("sm")]: {
        padding: '13px',
    },
    [props.theme.breakpoints.up("sm")]: {
        maxWidth: '1120px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '32px'
    },
    [props.theme.breakpoints.up("lg")]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0px',
        marginTop: '25px'
    },
    [props.theme.breakpoints.up("xl")]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: '40px',
        maxWidth: '1420px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));
export const useStyles = makeStyles(theme => ({
    inputFields: {
        [theme.breakpoints.down("sm")]: {
            marginTop: '30px'
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '29px'

        },
    },
    checkouthead: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    contactTitle: {
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '16px',
            color: '#000000'
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '20px',
            color: '#000000'
        },
    },
    shippingtitle: {
        textAlign: 'left',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '16px',
            color: '#000000',
            marginTop: '30px',
            marginBottom: '27px'
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '20px',
            color: '#000000',
            marginTop: '55px',
            marginBottom: '29px'
        },
    },
    multipleInputsRow: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputwidth: {
        [theme.breakpoints.up("sm")]: {
        },
        [theme.breakpoints.up("xl")]: {
            minWidth: '340px'

        },
    },
    userdesc: {
        textAlign: 'left',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '16px',
            color: '#000000',
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '20px',
            color: '#000000',
        },
    },
    cartDetails: {
        border: '1px solid black',
        padding: '10px',

        [theme.breakpoints.down("sm")]: {
            marginTop: '20px'
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '30px'
        },
        [theme.breakpoints.up("lg")]: {
            marginTop: '0px'

        },
    },
    paddingdstock: {
        marginTop: '10px'
    },
    outofstock: {
        color: 'rgb(255, 0, 0)',
        fontSize: '22px',
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
    cartList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    cartParent: {
        [theme.breakpoints.up("lg")]: {
            width: '40%'
        },
    },
    img: {
        width: '20%'
    },
    middleCart: {
        width: '65%'
    },
    userDetails: {
        [theme.breakpoints.up("lg")]: {
            width: '55%'
        },

    },
    initialaddress: {
        marginTop: '30px',
        padding: '20px',
        maxWidth: '1420px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mobileuseraddress: {
        [theme.breakpoints.up("lg")]: {
            width: '55%'
        },
    },
    cartTitle: {
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px',
        textAlign: 'left'
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '16px',
        textAlign: 'right',
        width: '20%',
        marginLeft: 'auto',

    },
    quantitydisplay: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',

    },
    cartHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cartImg: {
        display: 'flex',
        justifyContent: 'flex-start',

        [theme.breakpoints.down("sm")]: {
            width: '38px',
            height: '41px'
        },
        [theme.breakpoints.up("sm")]: {
            width: '105px',
            height: '136px'
        },
        [theme.breakpoints.up("lg")]: {
            width: '51px',
            height: '63px',

        },
    },
    priceDetails: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        border: '1px solid #C4C1C1',
        [theme.breakpoints.down("sm")]: {
            marginTop: '20px'
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '45px'
        },
    },
    priceDetailsTilte: {
        borderBottom: '1px solid #C4C1C1',
        textAlign: 'left',
        paddingBottom: '10px',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '16px',
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '21px',
        },
    },
    amountTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'left',
        paddingTop: '20px',
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '16px',
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '21px',
        },
    },
    continueBtn: {
        textAlign: 'right',
        background: '#FF00AE',
        padding: '10px 30px 10px 30px',
        mt: '20px',
        fontSize: '18px',
        borderRadius: '50px',
        color: '#FFFFFF',
        marginTop: '20px',
        border: '0px',
        cursor: 'pointer'
    },
    priceperpiece: {
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '14px',
        marginTop: '6px',
        textAlign: 'left'
    },
    qtyperpiece: {
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '14px',
        marginTop: '6px',
        textAlign: 'right'
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
    varablesTitle: {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '14px',
        color: '#000000',
        marginRight: '7px'
    },
    cartattribute: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    continueBtnwrap: {
        display: 'flex',
        justifyContent: 'right'
    }
}))