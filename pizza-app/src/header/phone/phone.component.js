import React, { memo } from "react";
import { StyledPhone } from "./phone.styles";

const PhoneComponent = ({ phone }) => <StyledPhone>{phone}</StyledPhone>;
export const Phone = memo(PhoneComponent);
