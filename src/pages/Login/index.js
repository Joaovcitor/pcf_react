import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyle";
import { Div } from "./styled";
import * as examplesActions from "../../store/modules/examples/actions";

export default function Login() {
  const dispach = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispach(examplesActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Div>
        <h2>Login Visitador</h2>
        <p>Email:</p>
        <input type="text"></input>
        <p>Senha:</p>
        <input type="password"></input>
      </Div>
      <button type="button" onClick={handleClick}>
        Entrar
      </button>
    </Container>
  );
}
