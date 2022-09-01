import { Navigate } from "react-router-dom";

export default function RouteWrapper({
  loggedComponent,
  defaultComponent,
  isPrivate,
}) {
  const loading = false;
  const auth = false;
  if (loading) {
    return <div>oi</div>;
  }
  if (auth && !isPrivate) {
    return <Navigate replace to="/dashboard" />; // direciona para a tela de Login
  } else if (!auth && isPrivate) {
    return <Navigate replace to="/" />; //direciona para a página inicial
  }

  return auth ? loggedComponent : defaultComponent;
}
