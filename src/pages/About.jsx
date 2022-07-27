import React from "react";
import { Outlet } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";

const About = () => {
  return (
    <>
      <UserNavBar />
      <Outlet />
    </>
  );
};

export default About;
