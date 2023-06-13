import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import './style/filterdrawer.css';
// import SideMenu from "../SideMenu/SideMenu";
export default function FilterDrawer(props) {
    const [state, setState] = React.useState({
        top: false,
    });


    React.useEffect(() => {
        props.childFunc.current = toggleDrawer("top", true)
    }, [])



    const toggleDrawer = (anchor, open) => (event) => {

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div className="sidedrawer">
            <Box
                sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300, paddingLeft: '20px' }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                {/* <div><SideMenu style={{ display: 'block' }} /></div> */}

            </Box>
        </div>
    );

    return (
        <div className="sidedrawer">
            {["top"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        PaperProps={{
                            style: {
                                top: "100px",
                                bottom: "52px"
                            }
                        }}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
