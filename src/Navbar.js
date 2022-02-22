import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} className="logo" alt="logo" />

      <h1>The Dojo Blog</h1>

      <div className="links">
        <Link
          to="/"
          style={{
            color: "#fff",
            backgroundColor: "#4ed9ff",
            borderRadius: "5px",
          }}
        >
          Home
        </Link>

        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
