import { useParams } from "react-router";
import posts from "../../../public/json/posts.json";
import { PostModelo } from "../../components/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.css";

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  console.log(post);
  return (
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
    </PostModelo.Root>
  );
};

export default Post;
