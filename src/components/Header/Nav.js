import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Inner = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  background-color: #005fcc;
`;

const Items = styled.section`
  display: flex;
`;
const Item = styled.div`
  width: 80px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  box-sizing: border-box;
  color: #fff;
  opacity: 0.5;
  border-bottom: ${({ clicked, index }) =>
    clicked === index ? "4px solid white" : null};
  font-weight: ${({ clicked, index }) => (clicked === index ? "700" : null)};
  opacity: ${({ clicked, index }) => (clicked === index ? "1" : "0.5")};
  transition: ${({ clicked, index }) =>
    clicked === index ? "all 0.15s ease-in-out" : null};
  :hover {
    border-bottom: 4px solid white;
    font-weight: 700;
    opacity: 1;
    transition: all 0.15s ease-in-out;
  }
`;
const Text = styled.a`
  margin-bottom: ${({ clicked, index }) => (clicked === index ? "-4px" : null)};
  ${Item}:hover & {
    margin-bottom: -4px;
    transition: all 0.15s ease-in-out;
  }
`;

const SearchContainer = styled.div`
  width: 220px;
  height: 32px;
  display: flex;
  align-items: center;
  padding-right: 15px;
  border-bottom: 1px solid #fff;
  font-size: 12px;
  color: white;
  opacity: 0.5;
  transition: 0.3s;
  :hover {
    opacity: 1;
  }
  :focus {
    opacity: 1;
  }
`;

const Search = styled.input`
  width: 195px;
  height: 32px;
  padding-left: 10px;
  padding-right: 25px;
  border: none;
  color: white;
  background: none;
  opacity: 0.8;
  font-weight: 700;
  outline: none;
  ::placeholder {
    color: white;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

const Nav = ({ setHovered, openDrawer, closeDrawer }) => {
  const items = ["홈", "랭킹", "카트", "트랙"];
  const [clicked, setClicked] = useState(null);
  // 클릭한 아이템의 index를 저장하는 state

  const onClickItem = (index) => {
    setClicked(index);
  };

  const onMouseEnter = (index) => {
    if (index === 2) {
      setHovered(2);
      openDrawer();
    } else if (index === 3) {
      setHovered(3);
      openDrawer();
    } else {
      setHovered(null);
      closeDrawer();
    }
  };

  return (
    <Container>
      <Inner>
        <Items>
          {items.map((item, index) => (
            <Item
              key={item}
              clicked={clicked}
              index={index}
              onClick={() => onClickItem(index)}
              onMouseEnter={() => onMouseEnter(index)}
            >
              <Text clicked={clicked} index={index}>
                {item}
              </Text>
            </Item>
          ))}
        </Items>
        <SearchContainer>
          <Search placeholder="닉네임 검색" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchContainer>
      </Inner>
    </Container>
  );
};

export default Nav;
