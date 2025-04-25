import styles from "./NaoEncontrada.module.css";
import styleBotao from "../../components/PostCard/botao.module.css";
import erro404 from "../../../public/assets/erro_404.png";
import { PostCard } from "../../components/PostCard";
import { useNavigate } from "react-router";

const NaoEncontrada = () => {
  const navegar = useNavigate();
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página ou volte para a página
          inicial
        </p>
        <div
          className={styles.botaoContainer}
          onClick={() => {
            navegar(-1);
          }}
        >
          <PostCard.Botao
            className={`${styleBotao.botaoPrincipal} ${styleBotao.lg}`}
          >
            Voltar
          </PostCard.Botao>
        </div>
        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Cachorro de óculos e vestido como humano"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};

export default NaoEncontrada;
