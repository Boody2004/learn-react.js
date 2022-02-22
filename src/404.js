import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="404">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to yhe home page...</Link>
    </div>
  );
};

export default NotFound;
