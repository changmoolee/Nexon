import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const matchData = [
  {
    mine: {
      type: "1일전",
      result: [1, 8],
      track: "1920 아슬아슬 비행장",
      kart: "몬스터XLE",
      time: "2'28'56",
      kartImage: "",
    },
    other1: {
      result: [2, 8],
      kartImage: "",
      username: "조총",
      time: "3'28'56",
    },
    other2: {
      result: [3, 8],
      kartImage: "",
      username: "나비",
      time: "4'28'56",
    },
  },
  {
    mine: {
      type: "1일전",
      result: [2, 8],
      track: "1920 아슬아슬 비행장",
      kart: "몬스터XLE",
      time: "2'28'56",
      kartImage: "",
    },
    other1: {
      result: [2, 8],
      kartImage: "",
      username: "가뭄",
      time: "3'28'56",
    },
    other2: {
      result: [3, 8],
      kartImage: "",
      username: "순리",
      time: "4'28'56",
    },
  },
  {
    mine: {
      type: "1일전",
      result: [null, 8],
      track: "1920 아슬아슬 비행장",
      kart: "몬스터XLE",
      time: "-",
      kartImage: "",
    },
  },
  {
    mine: {
      type: "1일전",
      result: [1, 8],
      track: "1920 아슬아슬 비행장",
      kart: "몬스터XLE",
      time: "2'28'56",
      kartImage: "",
    },
  },
  {
    mine: {
      type: "1일전",
      result: [2, 8],
      track: "1920 아슬아슬 비행장",
      kart: "몬스터XLE",
      time: "2'28'56",
      kartImage: "",
    },
  },
];

const Container = styled.section`
  width: 660px;
  padding: 40px 0;
`;
const Matches = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MatchBox = styled.section`
  display: flex;
  flex-direction: column;
`;

const Match = styled.div`
  width: 100%;
  height: 88px;
  display: grid;
  grid-template-columns: 65px 150px 150px 150px 100px 40px;
  margin-bottom: 5px;
  border-left: ${({ rank }) =>
    typeof rank !== "number"
      ? "4px solid #f62459"
      : rank === 1
      ? "4px solid #07f"
      : "4px solid #8893a2"};
  color: "#1f334a";
  background: ${({ rank }) =>
    typeof rank !== "number" ? "#fbf0f2" : rank === 1 ? "#eff3fb" : "white"};
`;
const Type = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
const Result = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  font-size: 30px;
  font-weight: 700;
  font-style: italic;
  color: ${({ rank }) =>
    typeof rank !== "number" ? "#f62459" : rank === 1 ? "#07f" : "#1f334a"};
  opacity: ${({ rank }) =>
    typeof rank !== "number" ? "1" : rank === 1 ? "1" : "0.5"};
  box-sizing: border-box;
`;
const ResultTotal = styled.span`
  margin-left: 5px;
  margin-bottom: -10px;
  font-size: 16px;
  font-style: italic;
`;
const Track = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Kart = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Time = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
const Open = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  opacity: 0.3;
  cursor: pointer;
  :hover {
    background: ${({ rank }) =>
      typeof rank !== "number" ? "#f62459" : rank === 1 ? "#07f" : "#1f334a"};
  }
`;

const Details = styled.section`
  width: 100%;
  height: 175px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;
const Detail = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 500;
  color: ${({ isMine, index }) => (isMine === index ? "#0277ff" : "#1f334a")};
`;
const DetailRank = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isMine, index }) =>
    isMine === index ? "#e5ecf6" : "#f2f2f2"};
`;
const DetailKart = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isMine, index }) =>
    isMine === index ? "#f2f2f2" : "white"};
`;
const DetailKartImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const DetailNick = styled.div`
  width: 100%;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isMine, index }) =>
    isMine === index ? "#f2f2f2" : "white"};
`;
const DetailTime = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isMine, index }) =>
    isMine === index ? "#f2f2f2" : "white"};
`;

const Right = () => {
  const [detailOpen, setDetailOpen] = useState(
    Array(matchData.length).fill(false)
  );

  const handleDetail = (index) => {
    let temp = [...detailOpen];
    temp[index] = !temp[index];
    setDetailOpen(temp);
  };

  return (
    <Container>
      <Matches>
        {matchData.map((data, index) => (
          <MatchBox key={index}>
            <Match rank={data.mine.result[0]}>
              <Type>{data.mine.type}</Type>
              <Result rank={data.mine.result[0]}>
                {data.mine.result[0] === null ? (
                  "#리타이어"
                ) : (
                  <>
                    #{data.mine.result[0]}
                    <ResultTotal>/{data.mine.result[1]}</ResultTotal>
                  </>
                )}
              </Result>
              <Track>{data.mine.track}</Track>
              <Kart>{data.mine.kart}</Kart>
              <Time>{data.mine.time}</Time>
              <Open
                rank={data.mine.result[0]}
                onClick={() => handleDetail(index)}
              >
                <FontAwesomeIcon icon={faCaretDown} />
              </Open>
            </Match>
            {detailOpen[index] ? (
              <Details>
                <Detail>
                  <DetailRank>#</DetailRank>
                  <DetailKart>카트</DetailKart>
                  <DetailNick>유저</DetailNick>
                  <DetailTime>기록</DetailTime>
                </Detail>
                <Detail>
                  <DetailRank>{data.other1.result[0]}</DetailRank>
                  <DetailKart>
                    <DetailKartImage src={data.other1.kartImage} />
                  </DetailKart>
                  <DetailNick>{data.other1.username}</DetailNick>
                  <DetailTime>{data.other1.time}</DetailTime>
                </Detail>
                <Detail>
                  <DetailRank>{data.other2.result[0]}</DetailRank>
                  <DetailKart>
                    <DetailKartImage src={data.other2.kartImage} />
                  </DetailKart>
                  <DetailNick>{data.other2.username}</DetailNick>
                  <DetailTime>{data.other2.time}</DetailTime>
                </Detail>
              </Details>
            ) : null}
          </MatchBox>
        ))}
      </Matches>
    </Container>
  );
};

export default Right;
