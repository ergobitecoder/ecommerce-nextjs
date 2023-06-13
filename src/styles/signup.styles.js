import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    inputFields: {
        [theme.breakpoints.down("sm")]: {
            marginTop: '10px'
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: '29px'

        },
    },
    signup: {
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            flexDirection: 'column',
        },
        [theme.breakpoints.up("md")]: {
            display: 'flex',
            flexDirection: 'row',

        },
    }
}))
