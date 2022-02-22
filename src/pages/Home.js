import BlogList from "../components/BlogList";
import UseEffect from "../components/UseFetch";

const Home = () => {
  const {
    data: blogs,
    isLoding,
    error,
  } = UseEffect("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div className="err">{error}</div>}
      {isLoding && <div>Loding...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
