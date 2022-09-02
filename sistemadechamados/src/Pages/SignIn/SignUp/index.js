import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import logo from "./../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  CamposLogin,
  Container,
  LoginArea,
  LoginBox,
  theme,
  TypographyLogin,
} from "./style";

export const SignUp = () => {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container fixed>
      <ThemeProvider theme={theme}>
        <LoginBox>
          <LoginArea>
            <img src={logo} alt="Sistema Logo" />
          </LoginArea>
          <form onSubmit={handleSubmit}>
            <TypographyLogin variant="h2">LOGIN</TypographyLogin>
            <CamposLogin
              label="Nome"
              type="text"
              color="secondary"
              variant="outlined"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            ></CamposLogin>
            <CamposLogin
              label="E-mail"
              type="text"
              color="secondary"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></CamposLogin>
            <CamposLogin
              label="Senha"
              type="password"
              color="secondary"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></CamposLogin>
            <CamposLogin
              label="Confirmação de senha"
              type="password"
              color="secondary"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></CamposLogin>
            <Link to="/register">Cadastrar</Link>
            <Link to="/"> Já tem uma conta? Entre</Link>
          </form>
        </LoginBox>
      </ThemeProvider>
    </Container>
  );
};
