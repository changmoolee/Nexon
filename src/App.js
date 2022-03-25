import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";

function App() {
  const [data, setData] = useState([]);

  const searchData = (nickname = "BBEESSTT") => {
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
          .then((res) => console.log(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    searchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
