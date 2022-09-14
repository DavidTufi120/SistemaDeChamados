import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.js";
import avatar from "../../assets/avatar.png";
import "./style.js";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import { useStyles } from "./style.js";

export default function Header() {
  const { user } = useContext(AuthContext);

  const style = useStyles();
  return (
    <div className={style.__sidebar}>
      <div className={style.__cover}>
        <img
          src={user.avatarUrl === null ? avatar : user.avatarUrl}
          alt="Foto avatar"
        />
      </div>

      <Link to="/dashboard">
        <FiHome color="#FFF" size={14} />
        Chamados
      </Link>
      <Link to="/dashboard">
        <FiUser color="#FFF" size={14} />
        Clientes
      </Link>
      <Link to="/dashboard">
        <FiSettings color="#FFF" size={14} />
        Configurações
      </Link>
    </div>
  );
}
