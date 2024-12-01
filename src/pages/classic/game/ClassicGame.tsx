import { useParams } from "react-router";
import "./ClassicGame.css";

function ClassicGame() {
  const { gameId } = useParams();
  return (
    <div>
      <h1>classic game</h1>
      <p>your are in game: {gameId}</p>
    </div>
  );
}

export default ClassicGame;
