import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} className="logo" alt="logo" />

      <h1>The Dojo Blog</h1>

      <div className="links">
        <a
          href="/"
          style={{
            color: "#fff",
            backgroundColor: "#4ed9ff",
            borderRadius: "5px",
          }}
        >
          Home
        </a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
