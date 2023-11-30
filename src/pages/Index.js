import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header>My Diary</Header>

      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          웹서비스 첫화면(index)
        </h2>
      </Main>

      <Footer>2023.11.30 copyright</Footer>
    </>
  );
};

export default Index;
