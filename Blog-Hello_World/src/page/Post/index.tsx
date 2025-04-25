import posts from "../../../public/json/posts.json";
import { Link, Route, Routes, useParams } from "react-router";
import ReactMarkdown from "react-markdown";

import NaoEncontrada from "../NaoEncontrada";
import { PostModelo } from "../../components/PostModelo";
import PaginaPadrao from "../../components/PaginaPadrao";

import stylePost from "../../components/PostCard/post.module.css";
import styleBotao from "../../components/PostCard/botao.module.css";
import styles from "../Post/post.module.css";
import "./Post.css";
import { PostCard } from "../../components/PostCard";

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  if (!post) {
    return <NaoEncontrada />;
  }
  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo.Root className={PostModelo.Styles.postModeloContainer}>
              <PostModelo.Capa
                fotoCapa={`../../../public/posts/${post?.id}/capa.png`}
                className={PostModelo.Styles.fotoCapa}
              />
              <PostModelo.Titulo nivel={2} className={PostModelo.Styles.titulo}>
                {post?.titulo}
              </PostModelo.Titulo>
              <div className="post-markdown-container">
                <ReactMarkdown>{post?.texto}</ReactMarkdown>
              </div>
              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h2>
              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
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
                        <PostCard.Botao className={styleBotao.botaoPrincipal}>
                          Ler
                        </PostCard.Botao>
                      </PostCard.Root>
                    </Link>
                  </li>
                ))}
              </ul>
            </PostModelo.Root>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
