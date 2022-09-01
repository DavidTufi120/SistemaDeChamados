import "./style.js";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { ThemeProvider } from "@mui/material/styles";
import {
  CamposLogin,
  Container,
  Form,
  LoginArea,
  LoginBox,
  LoginButton,
  theme,
  TypographyLogin,
} from "./style.js";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              label="E-mail"
              type="email"
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

            <LoginButton type="submit">Acessar</LoginButton>
            <Link to="/register">Criar uma conta agora!</Link>
          </form>
        </LoginBox>
      </ThemeProvider>
    </Container>
  );
}
