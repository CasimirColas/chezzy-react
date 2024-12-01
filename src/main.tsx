import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import ClassicLobby from "./pages/classic/index/ClassicLobby";
import ClassicGame from "./pages/classic/game/ClassicGame";
import DoubleLobby from "./pages/double/index/DoubleLobby";
import DoubleGame from "./pages/double/game/DoubleGame";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route index element={<Home />} />
        <Route path="classic">
          <Route index element={<ClassicLobby />} />
          <Route path=":gameId" element={<ClassicGame />} />
        </Route>
        <Route path="double">
          <Route index element={<DoubleLobby />} />
          <Route path=":gameId" element={<DoubleGame />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
