import React from "react";
import "./StyleApp.css";
import Header from "./components/Header";
import Text from "./components/Text";
import Social from "./components/Social";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Text />
        <Social />
        <Team />
      </div>
    </div>
  );
}

export default App;
