import React, { memo } from "react";
import { StyledHeaderLogo } from "./header.styles";

const HeaderComponent = () => /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(StyledHeaderLogo, null), "Header Works!");

export const Header = /*#__PURE__*/memo(HeaderComponent);