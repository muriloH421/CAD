import "./new-board.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";
import VectorSvg from "../../assets/Vector.svg";
import Svg from "../../assets/1 1 (1).svg";

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
          Sobre Nós
        </a>
        <a href="/about" className="NewBoardBoard_a6">
          colaborar
        </a>{" "}
        <img src={VectorSvg} />
      </nav>
      <img src={Svg} className="NewBoardBoard_img2" />
      <div className="NewBoardBoard_div1">
        {" "}
        <h1 className="NewBoardBoard_header1">Sobre nós 😁 </h1>
        <p className="NewBoardBoard_p1">
          A CAD é um empresa comprometida em fornecer soluçoes inovdoras e
          eficazes para melhorar a vida das pessoas com deficiencia. Nossa
          missao é promover a inclusão e a independência, garantindo que todos
          tenham acesso ás mesmas oportunidades
          <h1 className="NewBoardBoard_header9">Nossos serviços 👇</h1>
          <div className="NewBoardBoard_div3">
            <div>
              <h2 className="NewBoardBoard_header7">
                Programas de capacitação
                <p className="NewBoardBoard_p3">
                  Realizaremos treinamentos e workshops para empresas e
                  comunidade promovendo a conscientização e a inclusão.
                </p>
              </h2>
            </div>
            <div className="NewBoardBoard_div4">
              <h2 className="NewBoardBoard_header6">
                Consultoria em Acessibilidade
                <p className="NewBoardBoard_p4">
                  Oferecemos orientação especialização para empresas e
                  instituição, ajudando-as a tornar seus espaços e serviços mais
                  acessíveis 
                </p>
              </h2>
            </div>
            <div>
              <h2 className="NewBoardBoard_header8">
                Tecnologia Assistiva
                <p className="NewBoardBoard_p5">
                  Desenvolvemos e fornecemos soluções tecnológicas
                  personalizadas para atender ás necessidades especificas de
                  cada individuo.
                </p>
              </h2>
            </div>
          </div>
        </p>
        <div>
          <h1 className="NewBoardBoard_header10">
            FAÇA A DIFERENÇA CONOSCO
            <p>This is a paragrap.</p>
          </h1>
        </div>
      </div>
    </div>
  ),
  isSnippet: true,
  environmentProps: {
    windowWidth: 1166,
  },
});
