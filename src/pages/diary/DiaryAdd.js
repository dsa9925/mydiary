import React from "react";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const DiaryAdd = () => {
  // Link 태그 아닌 방식으로 path 전달 및 이동
  const navigate = useNavigate();
  // 기능을 정의하겠다.
  const handleClickMenu = () => {
    // 이전 path로 가기
    navigate(-1);
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        My DiaryAdd
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 추가화면</h2>
      </Main>
      <Footer>2023.11.30 copyright</Footer>
    </>
  );
};

export default DiaryAdd;
