import React from "react";
import "./App.css";
import { Header } from "./header/header.component";
import { StyledAppContainer } from "./app.styles";
import { Banner } from "./banner/banner.component";

function App() {
  return (
    <StyledAppContainer>
      <Header />
      <Banner />
    </StyledAppContainer>
  );
}

export default App;
