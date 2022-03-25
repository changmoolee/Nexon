import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import formatDistance from "date-fns/formatDistance";
import { ko } from "date-fns/locale";
import { convertTrackId, convertKart } from "./convert";

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
    rank === "" || rank === "99"
      ? "4px solid #f62459"
      : rank === "1"
      ? "4px solid #07f"
      : "4px solid #8893a2"};
  color: "#1f334a";
  background: ${({ rank }) =>
    rank === "" || rank === "99"
      ? "#fbf0f2"
      : rank === "1"
      ? "#eff3fb"
      : "white"};
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
    rank === "" || rank === "99"
      ? "#f62459"
      : rank === "1"
      ? "#07f"
      : "#1f334a"};
  opacity: ${({ rank }) =>
    rank === "" || rank === "99" ? "1" : rank === "1" ? "1" : "0.5"};
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
      rank === "" || rank === "99"
        ? "#f62459"
        : rank === "1"
        ? "#07f"
        : "#1f334a"};
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
  color: ${({ isMine, index }) => (isMine === index ? "#1f334a" : "#0277ff")};
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

const Right = ({ data, matchData }) => {
  const matchDatas = data.matches?.[0].matches;

  const [detailOpen, setDetailOpen] = useState(
    Array(matchDatas?.length).fill(false)
  );

  const handleDetail = (index) => {
    let temp = [...detailOpen];
    temp[index] = !temp[index];
    setDetailOpen(temp);
  };

  return (
    <Container>
      <Matches>
        {matchDatas?.map((data, index) => (
          <MatchBox key={index}>
            <Match rank={data.player.matchRank}>
              <Type>
                {formatDistanceToNow(new Date(data.endTime), { locale: ko })}
              </Type>
              <Result rank={data.player.matchRank}>
                {data.player.matchRank === "" ||
                data.player.matchRank === "99" ? (
                  "#리타이어"
                ) : (
                  <>
                    #{Number(data.player.matchRank)}
                    <ResultTotal>/{data.playerCount}</ResultTotal>
                  </>
                )}
              </Result>
              <Track>{convertTrackId(data.trackId)}</Track>
              <Kart>{convertKart(data.player.kart)}</Kart>
              <Time>
                {formatDistance(
                  new Date(data.endTime),
                  new Date(data.startTime),
                  { unit: "second", locale: ko }
                )}
              </Time>
              <Open
                rank={data.player.matchRank}
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
                {matchData[index]?.players.map((player) => (
                  <Detail key={player.accountNo}>
                    <DetailRank>{player.matchRank}</DetailRank>
                    <DetailKart>
                      <DetailKartImage src="" />
                    </DetailKart>
                    <DetailNick>{player.characterName}</DetailNick>
                    <DetailTime>{player.matchTime}</DetailTime>
                  </Detail>
                ))}
              </Details>
            ) : null}
          </MatchBox>
        ))}
      </Matches>
    </Container>
  );
};

export default Right;
