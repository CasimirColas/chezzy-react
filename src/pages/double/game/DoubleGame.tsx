import { useParams } from "react-router";
import "./DoubleGame.css";

function DoubleGame() {
  const { gameId } = useParams();
  return (
    <div>
      <h1>double game</h1>
      <p>your are in game: {gameId}</p>
    </div>
  );
}

export default DoubleGame;
