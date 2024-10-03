import "./new-board.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";
import AQuadroBrancoCanvaGoogleChrome0208202416241112Jpg from "../../assets/a - quadro branco - canva - google chrome 02_08_2024 16_24_11 1 (2).jpg";
import VectorSvg from "../../assets/Vector.svg";

export default createBoard({
  name: "New Board",
  Board: () => (
    <div className="NewBoardBoard_div1">
      <nav className="NewBoardBoard_nav1">
        <a href="/home" className="NewBoardBoard_a3">
          tipos de deficiencia
        </a>
        <a href="/home" className="NewBoardBoard_a4">
          centro de ajuda
        </a>
        <a href="/home" className="NewBoardBoard_a5">
          Sobre Nós
        </a>
        <a href="/about" className="NewBoardBoard_a6">
          colaborar
        </a>{" "}
        <img src={VectorSvg} />
      </nav>
      <img
        src={AQuadroBrancoCanvaGoogleChrome0208202416241112Jpg}
        alt=""
        className="NewBoardBoard_img1"
      />
    </div>
  ),
  isSnippet: true,
  environmentProps: {
    windowWidth: 1041,
  },
});
