import "./page-login.board.css";
import "./new-board.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";
import VectorSvg from "../../assets/Vector.svg";

export default createBoard({
  name: "New Board",
  Board: () => (
    <div className="NewBoardBoard_div1">
      <nav className="NewBoardBoard_nav1">
        <a href="/home" className="NewBoardBoard_a3">
          deficiencia
        </a>
        <a href="/home" className="NewBoardBoard_a4">
          centro de ajuda
        </a>
        <a href="/home" className="NewBoardBoard_a5">
          sobre nós
        </a>
        <a href="/about" className="NewBoardBoard_a6">
          colaborar
        </a>{" "}
        <img src={VectorSvg} className="PageLoginBoard_img1" />
      </nav>