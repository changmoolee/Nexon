import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Main from "./pages/Main";
import styled from "styled-components";

const BlankMain = styled.div`
  width: 100%;
  height: 800px;
`;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const searchData = (nickname = "BBEESSTT") => {
    setIsLoading(true);
    return axios
      .get(
        `https://joseph-proxy.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/nickname/${nickname}`,
        {
          headers: { Authorization: process.env.REACT_APP_API_KEY },
        }
      )
      .then((res) => {
        return axios
          .get(
            `https://joseph-proxy.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/${res.data.accessId}/matches?`,
            {
              headers: { Authorization: process.env.REACT_APP_API_KEY },
            }
          )
          .then((res) => {
            setData(res.data);
          })
          .then(() => setIsLoading(false))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        if (err.response.status) {
          alert(
            "일치하는 유저가 없습니다. 닉네임이 변경되었는지 확인해 주세요."
          );
          console.log(err);
          setIsLoading(false);
        }
      });
  };

  console.log(data);

  useEffect(() => {
    searchData();
  }, []);

  return (
    <div className="App">
      <Header searchData={searchData} />
      {isLoading ? (
        <>
          <Loading />
          <BlankMain />
        </>
      ) : (
        <Main data={data} />
      )}
      <Footer />
    </div>
  );
}

export default App;
