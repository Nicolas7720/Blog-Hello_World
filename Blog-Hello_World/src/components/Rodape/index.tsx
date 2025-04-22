import style from "./rodape.module.css";
import MarcaRegistrada from "../../../public/assets/marca_registrada.svg";
const Rodape = () => {
  return (
    <footer className={style.rodape}>
      <img src={MarcaRegistrada} alt="Logo Marca Registrada" />
    </footer>
  );
};

export default Rodape;
