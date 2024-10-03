import "./new-board.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";
import AQuadroBrancoCanvaGoogleChrome0208202416241112Jpg from "../../assets/a - quadro branco - canva - google chrome 02_08_2024 16_24_11 1 (2).jpg";

export default createBoard({
  name: "New Board",
  Board: () => (
    <div className="NewBoardBoard_div1">
      <div>
        <nav className="NewBoardBoard_nav1">
          <a href="/home">Sobre Nós</a>
          <a href="/about">About</a> <a href="/contact">Contact Us</a>
        </nav>
      </div>
      <a href="/home" className="NewBoardBoard_a2"></a>
      <img
        src={AQuadroBrancoCanvaGoogleChrome0208202416241112Jpg}
        alt=""
        className="NewBoardBoard_img1"
      />
    </div>
  ),
  isSnippet: true,
});
