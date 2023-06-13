import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
    slogan: {
        [theme.breakpoints.up('sm')]: {
            padding: '20px',
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        [theme.breakpoints.up('xl')]: {
            padding: '0px',
            maxWidth: '1420px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    slogantitle: {
        color: '#000000',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            fontWeight: '600',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '36px',
            fontWeight: '600',
        },
    },
    slogandesc: {
        color: '#FF00AE',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '13px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '20px',
        },
    },
}));
export const HomeBanner = styled("div")((props) => ({
    display: "flex",
    justifyContent: 'left',
    alignItems: 'center',
    [props.theme.breakpoints.down("sm")]: {
        height: '250px',
        padding: '20px',
    },
    [props.theme.breakpoints.up("sm")]: {
        height: '500px',
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

}));
export const HomeBannerParent = styled("div")((props) => ({
    background: 'url("https://thumbs.dreamstime.com/b/multicolored-cotton-threads-21049688.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}));

export const SloganBanner = styled("div")((props) => ({
    background: 'white',
    display: "flex",
    justifyContent: 'center',
    borderRadius: '10px',
    opacity: '0.7',
    position: 'absolute',
    flexDirection: 'column',

    [props.theme.breakpoints.down("sm")]: {
        maxWidth: '300px',
        margin: '22px 33px 22px 33px',
        padding: '20px',
        // top: '40%',
        // left: '25px'
    },
    [props.theme.breakpoints.up("sm")]: {
        padding: '40px',
        // left: '20px',
        maxWidth: '370px',
        // width: '55%',
        top: '70px'
    },
    [props.theme.breakpoints.up("md")]: {
        padding: '40px',
        // left: '95px',
        maxWidth: '370px',
        // width: '55%',
        top: '100px'
    },
    [props.theme.breakpoints.up("xl")]: {
        padding: '40px',
        // left: '80px',
        maxWidth: '370px',
        // width: '55%',
        top: '100px'
    },
    // [props.theme.breakpoints.up("lg")]: {
    //     padding: '30px 40px 30px 40px',
    //     marginLeft: '90px',
    //     width: '30%',
    //     maxWidth: '370px'

    // },
    [props.theme.breakpoints.up("xl")]: {
        // marginLeft: '14%',
        // left: '0px',

    },
}));