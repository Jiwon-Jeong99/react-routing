import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: ${(props) => props.btnColor || "blue"};
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`;

const ButtonDom = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <>
      <ButtonDom>
        <Button onClick={() => handleClick("/love")} btnColor="green">
          Love
        </Button>
        <Button onClick={() => handleClick("/")} btnColor="red">
          Home
        </Button>
        <Button onClick={() => handleClick("/about")} btnColor="orange">
          About
        </Button>
      </ButtonDom>
    </>
  );
};

export default NavBar;
