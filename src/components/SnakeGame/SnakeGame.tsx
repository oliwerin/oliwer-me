import { GameArea } from "./components";
import { useRunGame } from "./hooks/hooks";
import { Button } from "./components/index";

import "./SnakeGame.css";

function SnakeGame() {
  const {
    hasGameStarted,
    // isGamePaused,
    isGameStopped,
    snakePosition,
    foodPosition,
    swipeHandlers,
    setHasGameStarted,
    // setIsGamePaused,
    hasGameBeenPlayed,
    setHasGameBeenPlayed,
  } = useRunGame();

  const score = snakePosition.length - 1;

  return (
    <div className="snakeGame">
      <div {...swipeHandlers} className="gameContainer">
        {isGameStopped && <div className="overlay" />}

        <GameArea
          isGameStopped={isGameStopped}
          snakePosition={snakePosition}
          foodPosition={foodPosition}
        />

        {!hasGameStarted && (
          <div className="controls">
            {hasGameBeenPlayed && (
              <>
                <p>Game over</p>
                <p>
                  You scored {score} {score === 1 ? "point" : "points"}
                </p>
              </>
            )}
            <Button
              label={hasGameBeenPlayed ? "Play again" : "Play"}
              onClick={() => {
                setHasGameStarted(true);
                setHasGameBeenPlayed(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SnakeGame;
