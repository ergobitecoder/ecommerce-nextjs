import styled from "../theme";
import { css, keyframes } from "@emotion/react";
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";

export const MyStyledGrid = styled(Grid)((props) => ({
    [props.theme.breakpoints.down("sm")]: {
        display: 'none'
    },
    [props.theme.breakpoints.up("sm")]: {
        display: 'block',
        // width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
}));

export const SliderBreak = styled("div")((props) => ({

    marginLeft: 'auto',
    marginRight: 'auto',
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
    lineHeight: '21px',
    [props.theme.breakpoints.up("sm")]: {
        // marginLeft: '25px'
    },
    [props.theme.breakpoints.up("lg")]: {
        marginLeft: '0px'
    },

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
        width: '150px',
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '18px',
        color: '#000000',
    },
    priceTitle: {
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '18px',
        color: '#000000',
        display: 'flex',
        alignItems: 'center'
    },
    productDescription: {
        fontSize: '14px',
        fontWeight: '400px',
        lineHeight: '16px',
        color: '#000000',
        marginTop: '10px',
        textAlign: 'left'
    },
    sliderspace: {
        marginTop: '10px',
        [theme.breakpoints.up("sm")]: {
            width: '224px',
            // height: '200px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        [theme.breakpoints.down("sm")]: {
            width: '210px',
            // height: '200px',
            marginRight: 'auto'
        },


    },

    sliderBackground: {
        background: '#FEF0FA'
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