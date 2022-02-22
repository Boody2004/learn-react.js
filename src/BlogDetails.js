import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoding,
    error,
  } = UseFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {isLoding && <div>Loading...</div>}

      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
