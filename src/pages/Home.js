import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBar, setSearchBar] = useState("");

  const [totalGame, setTotalGame] = useState();

  useEffect(() => {
    const fetchGames = async () => {};
    fetchGames();
  }, []);

  // key : process.env.API_KEY_RAWG
  return isLoading ? (
    <div className="home-container">
      <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
        <circle
          class="path"
          fill="none"
          stroke-width="6"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  ) : (
    <div className="home-container">
      <div className="home-title-search-container">
        <div className="home-title-logo">
          <img
            src="./gamepad-logo.png"
            alt="Logo gamepad"
            className="home-logo"
          />
          <p>Gamepad</p>
        </div>

        <div className="home-searchbar">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Home;
