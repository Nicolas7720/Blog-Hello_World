import { PostModelo } from "../../components/PostModelo";

import sobreMimStyles from "./SobreMim.module.css";

import fotoCapa from "../../../public/assets/sobre_mim_capa.png";
import fotoSobreMim from "../../../public/assets/Eu.jpg";

const Sobre_Mim = () => {
  return (
    <main>
      <PostModelo.Root className={PostModelo.Styles.postModeloContainer}>
        <PostModelo.Capa
          className={PostModelo.Styles.fotoCapa}
          fotoCapa={fotoCapa}
        />
        <PostModelo.Titulo nivel={2} className={PostModelo.Styles.titulo}>
          titulo
        </PostModelo.Titulo>
        <div className={PostModelo.Styles.postConteudoContainer}>
          <PostModelo.Titulo nivel={4} className={sobreMimStyles.subtitulo}>
            Olá, eu sou o Nicolas
          </PostModelo.Titulo>
          <img
            src={fotoSobreMim}
            alt="Imagem do Nicolas"
            className={sobreMimStyles.fotoSobreMim}
          />

          <p className={sobreMimStyles.paragrafo}>
            Olá, eu sou o Nicolas, estudante de Engenharia de Software na
            UNINTER
          </p>
          <p className={sobreMimStyles.paragrafo}>
            Minha história em programação começou em 2023, quando eu iniciei o
            curso de Python do Gustavo Guanabara no Youtube
          </p>
          <p className={sobreMimStyles.paragrafo}>
            E desde então eu ando evoluindo o meu conhecimento e aprendendo
            novas linguagens de programação
          </p>
        </div>
      </PostModelo.Root>
    </main>
  );
};

export default Sobre_Mim;
