import { GameArea } from "./components";
import { useRunGame } from "./hooks/hooks";
import { Button } from "./components/index";

function SnakeGame() {
  const {
    hasGameStarted,
    // TODO: Add pause UI
    // isGamePaused,
    isGameStopped,
    snakePosition,
    foodPosition,
    swipeHandlers,
    setHasGameStarted,
    // TODO: Add pause UI
    // isGamePaused,
    hasGameBeenPlayed,
    setHasGameBeenPlayed,
  } = useRunGame();

  const score = snakePosition.length - 1;

  return (
    <div className="relative w-[320px] h-[320px] rounded-md overflow-hidden">
      <div {...swipeHandlers} className="relative w-full h-full">
        <GameArea
          isGameStopped={isGameStopped}
          snakePosition={snakePosition}
          foodPosition={foodPosition}
        />

        {isGameStopped && (
          <div className="absolute top-0 flex items-center justify-center w-full h-full">
            {!hasGameStarted && (
              <div className="flex flex-col items-center justify-between">
                {hasGameBeenPlayed && (
                  <>
                    <p className="font-serif text-white dark:text-black mb-1">
                      Game over
                    </p>
                    <p className="font-serif text-white dark:text-black mb-3">
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
        )}
      </div>
    </div>
  );
}

export default SnakeGame;
