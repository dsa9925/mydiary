import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  // Link 태그 아닌 방식으로 path 전달 및 이동
  const navigate = useNavigate();
  // 기능을 정의하겠다.
  const handleClickMenu = () => {
    // 이전 path로 가기
    navigate(-1);
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_home.svg">
        My Diary
      </Header>

      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          웹서비스 첫화면(index)
        </h2>
        <Link to="/diary">다이어리 가기</Link>
      </Main>

      <Footer>2023.11.30 copyright</Footer>
    </>
  );
};

export default Index;
