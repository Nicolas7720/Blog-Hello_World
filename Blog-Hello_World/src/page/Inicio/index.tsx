import { PostCard } from "../../components/PostCard";

import stylePosts from "./inicio.module.css";
import stylePost from "../../components/PostCard/post.module.css";

import posts from "../../../public/json/posts.json";
import { Link } from "react-router";

const Inicio = () => {
  return (
    <main>
      <ul className={stylePosts.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <PostCard.Root className={stylePost.post}>
                  <PostCard.Capa
                    className={stylePost.capa}
                    src={`../../../public/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                  />
                  <PostCard.Titulo className={stylePost.titulo}>
                    {post.titulo}
                  </PostCard.Titulo>
                  <PostCard.Botao className={stylePost.botaoLer}>
                    Ler
                  </PostCard.Botao>
                </PostCard.Root>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Inicio;
