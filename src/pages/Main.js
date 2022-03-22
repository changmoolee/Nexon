import React from "react";
import styled from "styled-components";

const Outer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Inner = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Profile = styled.section``;
const Vs = styled.section``;
const Stats = styled.section``;
const Tabs = styled.section``;
const Info = styled.section``;
const Left = styled.div``;
const Right = styled.div``;

const Main = () => {
  return (
    <Outer>
      <Inner>
        <Profile></Profile>
        <Vs></Vs>
        <Stats></Stats>
        <Tabs></Tabs>
        <Info>
          <Left></Left>
          <Right></Right>
        </Info>
      </Inner>
    </Outer>
  );
};

export default Main;
