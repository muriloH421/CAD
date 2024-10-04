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
        <img src={VectorSvg} />
      </nav>
      <div className="PageLoginBoard_header1">
        <h1 className="PageLoginBoard_header2"> LOGIN</h1>
        <form className="PageLoginBoard_form2">
          <label className="PageLoginBoard_label3">Email:</label>
          <br />
          <input type="text" className="PageLoginBoard_input4" />
          <br />
          <label className="PageLoginBoard_label4">Senha:</label>
          <br />
          <input type="text" className="PageLoginBoard_input5" />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            className="PageLoginBoard_input6"
          />
        </form>
      </div>
    </div>
  ),
  isSnippet: true,
  environmentProps: {
    windowWidth: 1475,
    windowHeight: 908,
  },
});
