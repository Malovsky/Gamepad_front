const Game = ({ game }) => {
  return (
    <div className="game-card-container">
      <img
        className="game-card-background"
        src={game.background_image}
        alt={game.name}
      />
      <div className="game-card-title-container">
        <p>{game.name}</p>
      </div>
    </div>
  );
};

export default Game;
