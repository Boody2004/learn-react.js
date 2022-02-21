import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
