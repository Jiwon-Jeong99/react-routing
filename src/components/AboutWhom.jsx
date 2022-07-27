// 지금 해당되는 nickname에 해당되는 상세페이지를 보여주는 페이지
// 누구에 대해서 보여줄건데?

// useParams () => 현재 url의 붙어있는 url parameter를 인식하는 역할
// 현재 접속해 있는 url에서 nickname이 뭔지 알아내는 것 (동적 라우팅 1번 사항)

import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/information";
import { styled } from "styled-components";

const More = styled.div`
  color: gray;
  font-style: italic;
  margin-top: 2%;
  cursor: pointer;
`;

const Modal = styled.div`
  width: 100%;
  height: 20%;
  display: ${(props) => (props.isClicked ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  margin: 3%;
  padding: 3%;
  background-color: beige;
  color: gray;
  border-radius: 20px;
`;

const AboutWhom = () => {
  const a = useParams();
  // 현재 어떤 파라미터가 들어가 있는지를 뜻함(url에 붙어있는 nickname이 뭔지)
  const nickname = a.nickname;
  const [isClicked, setIsClicked] = useState(false);

  // 필터링을 할거에요
  // filter(테스트하는 함수) : 테스트 통과 애들만 걸러서 리스트로 반환
  //   일치하는 값 중 첫번째 값만 가져오자!그게 바로
  const who = data.members.filter((member) => member.nickname === nickname)[0];

  const handleMore = () => {
    // isClicked 값이 true이면 모달이 보이도록
    // isClicked 값이 false이면 모달이 보이지 않도록
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div>About {who.name}</div>
      <div>{who.memId}번째 멤버</div>
      <div>닉네임 : {who.nickname}</div>
      <div>소개 : {who.description}</div>
      <div>역할 : {who.role}</div>

      <More onClick={handleMore}>더보기</More>
      {
        // isClicked가 true이면 Modal, false이면 null
        isClicked ? <Modal>{who.name}에 대해 더 알고 싶으신가요?</Modal> : null
      }
      <Modal>{who.name}에 대해 더 알고 싶으신가요?</Modal>
    </>
  );
};

export default AboutWhom;
