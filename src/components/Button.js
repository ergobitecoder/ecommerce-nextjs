import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {MyStyledButton} from "../styles/button.styles";

function Button1(props) {
  
  
  const [fontSize, setFontSize] = useState("12px");
  const [padding, setPadding] = useState("12px");
  const [boxshadow, setBoxshadow] = useState("");
  const [translate, setTranslate] = useState("");

  const changeToMedium = () => {
    setFontSize("16px");
    setPadding("16px");
  };
  const changeToSmall = () => {
    setFontSize("14px");
    setPadding("14px");
  };
  const changeToLarge = () => {
    setFontSize("20px");
    setPadding("20px");
  };
  useEffect(() => {
    if (props.size === "medium") {
      changeToMedium();
    } else if (props.size === "small") {
      changeToSmall();
    } else {
      changeToLarge();
    }
  }, [props.size]);

  const setmouseshadow = () => {
    setBoxshadow(boxshadow === "" ? "0px 10px 5px #888888" : "");
  };

  // const translateBy10 = () => {
  //   setTranslate("10px");
  // };

  return (
    <MyStyledButton
      {...props}
      mouseshadow={boxshadow}
      onMouseEnter={setmouseshadow}
      onMouseLeave={setmouseshadow}
      translate={translate}
      // onClick={translateBy10}
      padding={padding}
      fontSize={fontSize}
      onClick={props.onClick}
    >
      {props.label}
    </MyStyledButton>
  );
}

Button1.propTypes = {
  bgcolor: PropTypes.string,
  label:PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  
};

export default Button1;
