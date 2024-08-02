import React from "react";
import { Container } from "../../styles/GlobalStyle";
import { Div } from "./styled";

export default function Login() {
  return (
    <Container>
      <Div>
        <h2>Login Visitador</h2>
        <p>Email:</p>
        <input type="text"></input>
        <p>Senha:</p>
        <input type="password"></input>
      </Div>
      <button type="button">Entrar</button>
    </Container>
  );
}
