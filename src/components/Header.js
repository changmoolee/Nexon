import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: black 1px solid;
`;
const Inner = styled.div`
  width: 70%;
  display: flex;
  border: red 1px solid;
`;
const Util = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 90px;
  object-fit: contain;
`;
const Nav = styled.div`
  width: 100%;
  height: 55px;
`;

const Header = () => {
  return (
    <Outer>
      <Inner>
        <Util>
          <Logo src="image/logo.jpeg" />
        </Util>
      </Inner>
      <Inner>
        <Nav></Nav>
      </Inner>
    </Outer>
  );
};

export default Header;
