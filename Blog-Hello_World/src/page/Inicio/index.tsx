import { Banner } from "../../components/Banner";
import { Post } from "../../components/Post";

import stylesBanner from "../../components/Banner/banner.module.css";
import stylePosts from "./inicio.module.css";
import stylePost from "../../components/Post/post.module.css";

import CirculoColorido from "../../../public/assets/circulo_colorido.png";
import MinhaFoto from "../../../public/assets/Eu.jpg";

import posts from "../../../public/json/posts.json";

const Inicio = () => {
  return (
    <main>
      <Banner.Root className={stylesBanner.banner}>
        <div className={stylesBanner.apresentacao}>
          <Banner.Titulo className={stylesBanner.titulo} text="Olá, Mundo!" />
          <Banner.Paragrafo
            className={stylesBanner.paragrafo}
            text="Bem-vindos! Eu sou Nícolas Antônio, estudante de Front-end e Engenharia de Software. Aqui falarei sobre tecnologia"
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
      <ul className={stylePosts.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Post.Root className={stylePost.post}>
                <Post.Capa
                  className={stylePost.capa}
                  src={`../../../public/posts/${post.id}/capa.png`}
                  alt="Imagem de capa do post"
                />
                <Post.Titulo className={stylePost.titulo}>
                  {post.titulo}
                </Post.Titulo>
                <Post.Botao className={stylePost.botaoLer}>Ler</Post.Botao>
              </Post.Root>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Inicio;
