import { styled } from "@mui/material/styles";
export const MaxWidth = styled("div")((props) => ({
    [props.theme.breakpoints.down("sm")]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '700px'
    },
    [props.theme.breakpoints.up("sm")]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1090px'
    },
    [props.theme.breakpoints.up("xl")]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1280px'
    },
}))
export const MyFooter = styled("div")((props) => ({
    backgroundColor: "#D9D9D9",
    marginTop: "10px",
    [props.theme.breakpoints.down("sm")]: {
        padding: "40px 20px 40px 20px",
        display: 'flex',
        flexDirection: 'column',
        textAlign: "left",

    },

    [props.theme.breakpoints.up("sm")]: {
        display: 'flex',
        flexDirection: 'row-reverse',
        // textAlign: "center",
        padding: "80px 110px 140px 100px",
        // width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        maxWidth: '1280px',
        marginLeft: "auto",
        marginRight: "auto",
    },
    [props.theme.breakpoints.up("lg")]: {
        display: 'flex',
        flexDirection: 'row-reverse',
        // textAlign: "center",
        // padding: "80px 160px 140px 160px",
        // width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        maxWidth: '1140px',
        marginLeft: "auto",
        marginRight: "auto",
    },
}));
export const MyFooterParent = styled("div")((props) => ({
    backgroundColor: "#D9D9D9",marginTop:'30px'

}));

export const FooterTitle = styled("div")((props) => ({
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '24px'

}));

export const MyFooterLeft = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'row',

    [props.theme.breakpoints.down("sm")]: {

        marginTop: '20px'
    },
    [props.theme.breakpoints.up("sm")]: {


    },
}));
export const MyFooterCopyright = styled("div")((props) => ({
    marginTop: '20px',
    [props.theme.breakpoints.down("sm")]: {
        display: 'none'

    },
}));
export const MyFooterCopyrightMobile = styled("div")((props) => ({
    marginTop: '20px',
    [props.theme.breakpoints.up("sm")]: {
        display: 'none'

    },
}));
export const MyFooterAlign = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'

}));
export const MyFooterRight = styled("div")((props) => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: "left",


    [props.theme.breakpoints.down("sm")]: {

        width: '100%'

    },
    [props.theme.breakpoints.up("sm")]: {

        width: '40%'

    },

}));