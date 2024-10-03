import "./new-board.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";
import VectorSvg from "../../assets/Vector.svg";

export default createBoard({
  name: "New Board",
  Board: () => (
    <div className="NewBoardBoard_div1">
      <nav className="NewBoardBoard_nav1">
        <div className="NewBoardBoard_div1">
          <img src={VectorSvg} className="NewBoardBoard_img2" />
        </div>
        <div className="NewBoardBoard_div2">
          <a href="/contact" className="NewBoardBoard_a4">
            Contact Us
          </a>
          <a href="/home" className="NewBoardBoard_a3">
            Sobre Nós
          </a>
          <a href="/home" className="NewBoardBoard_a2">
            Sobre Nós
          </a>
        </div>{" "}
      </nav>
    </div>
  ),
  isSnippet: true,
  environmentProps: {
    windowBackgroundColor: "#ffffff",
  },
});
