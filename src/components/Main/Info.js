import React from "react";
import styled from "styled-components";
import Left from "./Info/Left";
import Right from "./Info/Right";

const Container = styled.section`
  width: 100%;
  min-height: 800px;
  display: flex;
  margin-top: 20px;
`;

const Info = ({ data }) => {
  return (
    <Container>
      <Left data={data} />
      <Right data={data} />
    </Container>
  );
};

export default Info;
