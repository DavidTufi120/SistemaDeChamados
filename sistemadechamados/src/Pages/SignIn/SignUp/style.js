import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFF",
      light: "#FFF",
      contrastText: "#FFF",
    },
    text: {
      primary: "#FFF",
      secondary: "#FFF",
      hint: "#FFF",
    },
  },
});

export const Container = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #121212;

  & form {
    width: 50%;
    justify-content: center;

    & a {
      background-color: #024059;
      color: white;
      padding: 13px 41px;
      display: flex;
      margin-bottom: 20px;
      border-radius: 4px;
      justify-content: center;
    }

    @media (max-width: 505px) {
      width: 65%;
      justify-content: center;
    }
  }
`;

export const CadastrarButton = styled(Button)`
  justify-content: center;
  display: flex;
  margin: 5px 0 20px 0;
  background-color: #181c2e;
  padding: 10px 0;
  border-radius: 4px;
  color: white;
`;

export const LoginBox = styled(Box)`
  background: #000;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginArea = styled(Box)`
  display: flex;
  justify-content: center;
  background-color: #181c2e;
  width: 100%;

  & img {
    width: 80%;
    padding: 20px;
  }
`;

export const CamposLogin = styled(TextField)`
  width: 100%;
  margin-bottom: 20px;
  & fieldset {
    border-color: #fff;
  }
`;
export const TypographyLogin = styled(Typography)`
  color: #fff;
  text-align: center;
  margin: 0.5em 0;
`;
