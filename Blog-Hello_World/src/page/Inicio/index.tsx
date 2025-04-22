import { Banner } from "../../components/Banner";
import CirculoColorido from "../../../public/assets/circulo_colorido.png";
import MinhaFoto from "../../../public/assets/Eu.jpg";
import styles from "../../components/Banner/banner.module.css";
import Style from "./inicio.module.css";

import posts from "../../../public/json/posts.json";

const Inicio = () => {
  return (
    <main>
      <Banner.Root className={styles.banner}>
        <div className={styles.apresentacao}>
          <Banner.Titulo className={styles.titulo} text="Olá, Mundo!" />
          <Banner.Paragrafo
            className={styles.paragrafo}
            text="Bem-vindos! Eu sou Nícolas Antônio, estudante de Front-end e Engenharia de Software. Aqui falarei sobre tecnologia"
          />
        </div>
        <div className={styles.imagens}>
          <Banner.Image
            className={styles.circuloColorido}
            src={CirculoColorido}
            aria-hidden={true}
          />
          <Banner.Image
            className={styles.minhaFoto}
            src={MinhaFoto}
            alt="Foto do Nicolas Antônio"
          />
        </div>
      </Banner.Root>
      <ul className={Style.posts}>
        {posts.map((post) => {
          return <li key={post.id}>hello</li>;
        })}
      </ul>
    </main>
  );
};

export default Inicio;
