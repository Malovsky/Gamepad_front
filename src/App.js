import "./App.css";
import "./spinner.scss";
import Header from "./components/Header";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";

function App() {
  // TODO
  const [token, setToken] = useState(Cookies.get("token") || null);

  const setUser = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <Router>
      <Header token={token} setUser={setUser}></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<GameDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
