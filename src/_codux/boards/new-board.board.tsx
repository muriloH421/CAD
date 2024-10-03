import "./new-board.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";

export default createBoard({
  name: "New Board",
  Board: () => (
    <div>
      <div />
      <nav className="NewBoardBoard_nav1">
        <a href="/home">Sobre Nós</a> | <a href="/projects">Projects</a> |{" "}
        <a href="/about">About</a> | <a href="/contact">Contact Us</a>
      </nav>
      <img
        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
        alt=""
      />
    </div>
  ),
  isSnippet: true,
});
