import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function RouteWrapper({
  loggedComponent,
  defaultComponent,
  isPrivate,
}) {
  const { auth, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Buscando Usuário</div>;
  }
  if (auth && !isPrivate) {
    return <Navigate replace to="/dashboard" />; // direciona para a tela de Login
  } else if (!auth && isPrivate) {
    return <Navigate replace to="/" />; //direciona para a página inicial
  }

  return auth ? loggedComponent : defaultComponent;
}
