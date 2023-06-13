import styled from "../theme";
import { css, keyframes } from "@emotion/react";
import Button from '@mui/material/Button';


export const MyStyledButton = styled(Button)((props) => ({
    backgroundColor: "#FF00AE",
    border: "none",
    padding: '5px 15px 5px 15px',
    borderRadius: "5px",
    textTransform: "uppercase",
    color: props.color,
    boxShadow: props.mouseshadow,
    borderRadius: '50px',
    [props.theme.breakpoints.down("sm")]: {
        fontSize: '14px',
    },
    [props.theme.breakpoints.up("sm")]: {
        // height: '18px',
    },
   '&:hover': {
        backgroundColor: "#FF00AE",
    },

}));

const myKeyframe = keyframes`
    0 %  { transform: translate(1px, 10px)   rotate(0deg)    },
    
    100% { transform: translate(1px, -2px)  rotate(-1deg);  }
`;

