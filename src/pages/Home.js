import axios from "axios";
import Game from "../components/Game";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [games, setGames] = useState([]);
  const [totalGame, setTotalGame] = useState();
  const [searchBar, setSearchBar] = useState("");

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=1a2e4578488f4df3abb638368bf0812c&${page}&search=${searchBar}`
        );
        setTotalGame(response.data.count);
        setGames(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGames();
  }, []);

  return isLoading ? (
    <div className="home-container">
      <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
        <circle
          className="path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
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

        <div className="home-searchbar-container">
          <input
            type="text"
            placeholder="Search for a game ..."
            className="home-searchbar"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
          <p className="number-of-games">
            Search {totalGame.toLocaleString()} games
          </p>
        </div>
      </div>
      <h1 className="home-title-games-list">Most Relevance Games</h1>
      <div className="games-list-container">
        {games.map((game) => {
          return (
            <Link to={`/game/${game.id}`} key={game.id} state={game}>
              <Game key={game.id} game={game} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
