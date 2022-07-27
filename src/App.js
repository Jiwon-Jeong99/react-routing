import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Love from "./pages/Love";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import AboutWhom from "./components/AboutWhom";

const AppDom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function App() {
  return (
    <>
      {/* NavBar는 항상 있는 애니까 위에 따로 놔두기 */}
      <AppDom>
        <NavBar />
        <Routes>
          {/* 기본 페이지 element */}
          {/* path로 url을 변경하면, Home 페이지로 간다 */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path=":nickname" element={<AboutWhom />}></Route>
            {/* <Route path="jiwon" element={<div>지원 상세페이지</div>}></Route>
            <Route
              path="jeong"
              element={<div>정지원의 상세페이지</div>}
            ></Route>
            <Route path="leon" element={<div>레옹이의 상세페이지</div>}></Route> */}
          </Route>
          <Route path="/love" element={<Love />}></Route>
          
        </Routes>
      </AppDom>
    </>
  );
}

export default App;
