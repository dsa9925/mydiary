import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Intro from "./pages/Intro";
import Index from "./pages/Index";
import DiaryIndex from "./pages/diary/Index";
import DiaryAdd from "./pages/diary/DiaryAdd";
import DiaryEdit from "./pages/diary/DiaryEdit";

function App() {
  return (
    <div className="layout">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Index />}></Route>
          <Route path="/diary" element={<DiaryIndex />}></Route>
          <Route path="/diary/add" element={<DiaryAdd />}></Route>
          <Route path="/diary/edit/:pk" element={<DiaryEdit />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
