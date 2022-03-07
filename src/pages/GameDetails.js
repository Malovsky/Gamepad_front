import { useLocation } from "react-router-dom";

const GameDetails = () => {
  const location = useLocation();
  const game = location.state;
  console.log(game);
  return <div className="game-details-container">GameDetails Component</div>;
};

export default GameDetails;
