import styled from "styled-components";
import { basketImageUrl } from "./images/";

export const StyledBasket = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  border: 1px solid #9b5900;
  border-radius: 20px;
  width: 200px;
  height: 50px;
  font-size: 30px;
  line-height: 36px;
  padding-left: 40px;
  padding-top: 7px;
  box-sizing: border-box;
  &::after {
    content: "";
    position: absolute;
    height: 24px;
    width: 24px;
    background: url(${basketImageUrl}) center no-repeat;
    top: 15px;
    left: 6px;
  }
`;

export const StyledBasketCounter = styled.div`
  background-color: #ffd3a1;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  font-size: 12px;
  line-height: 27px;
  color: #9b5900;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 6px;
`;
