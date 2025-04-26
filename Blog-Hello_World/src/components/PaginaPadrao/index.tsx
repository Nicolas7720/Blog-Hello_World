import { Banner } from "../Banner";
import stylesBanner from "../../components/Banner/banner.module.css";
import CirculoColorido from "../../../public/assets/circulo_colorido.png";
import MinhaFoto from "../../../public/assets/Eu.jpg";
import { Outlet } from "react-router";

const PaginaPadrao = () => {
  return (
    <main>
      <Banner.Root className={stylesBanner.banner}>
        <div className={stylesBanner.apresentacao}>
          <Banner.Titulo className={stylesBanner.titulo} text="Olá, Mundo!" />
          <Banner.Paragrafo
            className={stylesBanner.paragrafo}
            text="Bem-vindos! Eu sou Nícolas Antônio, estudante de Front-end e Engenharia de Software."
          />
        </div>
        <div className={stylesBanner.imagens}>
          <Banner.Image
            className={stylesBanner.circuloColorido}
            src={CirculoColorido}
            aria-hidden={true}
          />
          <Banner.Image
            className={stylesBanner.minhaFoto}
            src={MinhaFoto}
            alt="Foto do Nicolas Antônio"
          />
        </div>
      </Banner.Root>
      <Outlet />
    </main>
  );
};

export default PaginaPadrao;
