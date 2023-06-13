import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '22px',
        color: 'black',
        textAlign: 'left',
        fontWeight: '700'
    },
    errorsub: {
        marginTop: '10px'
    },
    inputparent: {
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '15px',

        },
        [theme.breakpoints.up("sm")]: {
            marginBottom: '25px',

        },
    },
    textareasize: {
        [theme.breakpoints.down("sm")]: {
            width: '300px',
            height: '100px'

        },
        [theme.breakpoints.up("sm")]: {
            width: '400px',
            height: '100px'

        },
        [theme.breakpoints.up("lg")]: {
            width: '500px',
            height: '100px'

        },
    },
    contactParent: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            padding: '20px'
        },
        [theme.breakpoints.up("sm")]: {
            flexDirection: 'row',
            padding: '20px',
            maxWidth: '1120px',
        },
        [theme.breakpoints.up("lg")]: {
            padding: '0px',
        },
        [theme.breakpoints.up("xl")]: {
            flexDirection: 'row',
            maxWidth: '1420px',
        },
    },
    iconbutton: {
        borderRadius: '50px',
        mr: '20px',
        background: 'white'
    },
    contactParent1: {
        background: '#FF00AE',
        color: '#FFFFFF',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'left',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            marginBottom: '30px'
        },
        [theme.breakpoints.up("sm")]: {
            width: '40%'
        },
    },
    iconbtn: {
        borderRadius: '50px',
        marginRight: '20px',
        background: 'white',
        border: '0px',
        cursor: 'pointer',
        padding: '7px 10px 7px 10px',
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
    contactParent2: {
        [theme.breakpoints.down("sm")]: {
            width: '100%'
        },
        [theme.breakpoints.up("sm")]: {
            width: '55%',
            marginLeft: '5%'
        },
    },
    titleParent: {

        [theme.breakpoints.down("sm")]: {
            padding: '20px',
            marginTop: '20px',
            marginBottom: '10px'
        },
        [theme.breakpoints.up("sm")]: {
            padding: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '30px',
            marginBottom: '20px'
        },
        [theme.breakpoints.up("lg")]: {
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        [theme.breakpoints.up("xl")]: {
            maxWidth: '1420px',
        },
    }



}));
export const ContactBanner = styled("div")((props) => ({
    marginLeft: 'auto',
    marginRight: 'auto',
    [props.theme.breakpoints.down("sm")]: {
        padding: '20px',
    },
    [props.theme.breakpoints.up("sm")]: {
        padding: '35px',
        maxWidth: '1120px',
    },
    [props.theme.breakpoints.up("xl")]: {
        padding: '35px',
        maxWidth: '1420px',
    },

}));

export const ContactBannerChild = styled("div")((props) => ({
    display: 'flex',
    justifyContent: 'center',
    [props.theme.breakpoints.down("sm")]: {
        alignItems: 'center',
        marginTop: '30px',
        flexDirection: 'column',
        padding: '10px'
    },
    [props.theme.breakpoints.up("sm")]: {
        marginTop: '30px'

    },

}));

export const ContactBannerChild1 = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    background: '#FF00AE',
    color: '#FFFFFF',
    // alignItems: 'center',
    borderRadius: '20px',
    textAlign: 'left',
    padding: '20px 20px 20px 20px',
    [props.theme.breakpoints.down("sm")]: {
        width: '100%'
    },
    [props.theme.breakpoints.up("sm")]: {
        width: '30%',
        maxHeight: '500px',
        // marginTop: '30px'
    },

}));
export const ContactBannerChild2 = styled("div")((props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [props.theme.breakpoints.down("sm")]: {
        width: '100%',
        marginTop: '30px'

    },
    [props.theme.breakpoints.up("sm")]: {
        width: '70%'

    },

}));

export const Toolbarcustom = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    // alignItems: 'center',
    marginTop: '20px'
}));

export const ContactDetails = styled("div")((props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [props.theme.breakpoints.down("sm")]: {
    },
    [props.theme.breakpoints.up("sm")]: {
    },

}));

export const ContacDetails = styled("div")((props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [props.theme.breakpoints.down("sm")]: {
    },
    [props.theme.breakpoints.up("sm")]: {
    },

}));

