import { useLocation } from "react-router-dom";

const GameDetails = () => {
  const location = useLocation();
  const game = location.state;
  console.log(game);
  return (
    <div className="game-details-container">
      <p className="game-details-title">{game.name}</p>

      {/* PICTURE AND TEXTS */}
      <div className="game-details-picture-texts-container">
        {/* GAME PICTURE */}
        <div className="game-details-picture-container">
          <img
            className="game-details-picture"
            src={game.background_image}
            alt={game.id}
          />
        </div>
        {/* GAME PICTURE */}
        <div className="game-details-texts-container">
          <p>texts</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
