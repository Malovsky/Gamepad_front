const Game = ({ game }) => {
  console.log(game);
  return (
    <div className="game-card-container">
      <img
        className="game-card-background"
        src={game.background_image}
        alt={game.name}
      />
    </div>
  );
};

export default Game;
