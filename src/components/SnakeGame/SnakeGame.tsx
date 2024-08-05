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
      <h2>The Snake game</h2>

      <p>
        Maneuver the snake around the screen to consume food, while avoiding
        collisions with the screen edges and the snake's own body.
      </p>

      <p>
        <b>Controls:</b> use ←, ↑, →, ↓ keyboard buttons or swipe gestures to
        maneuver the snake
      </p>

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

      <p>
        <i>
          I've always been fond of video games. Here's a&nbsp;small tribute to
          the game many of us enjoyed as kids.
        </i>
      </p>
    </div>
  );
}

export default SnakeGame;
