import MenuLink from "../MenuLink";
import styles from "./menu.module.css";
import { useLocation } from "react-router-dom";
const Menu = () => {
  const localizacao = useLocation();
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink
          className={`${styles.link} ${
            localizacao.pathname === "/" ? styles.linkDestacado : styles.link
          }`}
          to="/"
        >
          Início
        </MenuLink>
        <MenuLink
          className={`${styles.link} ${
            localizacao.pathname === "/sobremim"
              ? styles.linkDestacado
              : styles.link
          }`}
          to="/sobremim"
        >
          Sobre Mim
        </MenuLink>
      </nav>
    </header>
  );
};

export default Menu;
