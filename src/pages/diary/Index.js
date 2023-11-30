import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Header>Diary Home</Header>

      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 첫화면</h2>
      </Main>

      <Footer>2023.11.30 copyright</Footer>
    </>
  );
};

export default Index;
