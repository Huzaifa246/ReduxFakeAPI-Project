import React from "react";
import styled from "styled-components";
const UiFixedMenu = styled.div`
  height: 60px;
  padding-top: 15px;
`;
const UiContainer = styled.div`
  text-align: "center";
`;
const H2 = styled.h2`
  text-align: center;
  border: 1px solid;
  padding: 7px;
  box-shadow: 5px 10px 8px 10px #888888;
`;

const Header = () => {
  return (
    <UiFixedMenu>
      <UiContainer>
        <H2>FAKE API STORE</H2>
      </UiContainer>
    </UiFixedMenu>
  );
};

export default Header;
