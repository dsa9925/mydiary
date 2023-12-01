import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);
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
        My DiaryEdit
      </Header>

      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 수정화면 {param.pk} 글 수정
        </h2>
      </Main>

      <Footer>2023.11.30 copyright</Footer>
    </>
  );
};

export default DiaryEdit;
