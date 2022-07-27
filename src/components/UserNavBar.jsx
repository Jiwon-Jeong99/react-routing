// information.js에 있는 nickname만 뽑음
import React from "react";
import data from "../data/information";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserNavBarDom = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserNavBar = () => {
  return (
    //   data의 members를 map 돌려ㅑ야함
    <>
      <UserNavBarDom>
        {data.members.map((member, i) => (
            // 여기로 연결해줄게
          <Link to={`/about/${member.nickname}`} key={i}>
            {member.nickname}
          </Link>
        ))}
      </UserNavBarDom>
    </>
  );
};

export default UserNavBar;
