import { ThemeProvider } from "@mui/material";
import { useContext, useState } from "react";
import logo from "./../../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  CadastrarButton,
  CamposLogin,
  Container,
  LoginArea,
  LoginBox,
  theme,
  TypographyLogin,
} from "./style";
import { AuthContext } from "../../../contexts/auth";
import CircularColorProgress from "../../../components/CircularColorProgress";

export const SignUp = () => {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome !== "" && (email !== "") & (password !== "")) {
      signUp(email, password, nome);
    }
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
            <CadastrarButton label="Cadastrar" fullWidth type="submit">
              {loadingAuth ? <CircularColorProgress /> : "Cadastrar"}
            </CadastrarButton>
            <Link to="/"> Já tem uma conta? Entre</Link>
          </form>
        </LoginBox>
      </ThemeProvider>
    </Container>
  );
};
