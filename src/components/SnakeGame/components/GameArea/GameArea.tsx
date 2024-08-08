import { Fragment } from "react";

import type { Point, SnakePosition } from "../../types/types";
import { GAME_AREA_SIZE } from "../../constants/constants";
import { doesSnakePositionContainPoint } from "../../utils/utils";

type Props = {
  isGameStopped: boolean;
  snakePosition: SnakePosition;
  foodPosition: Point | null;
};

function GameArea({ isGameStopped, snakePosition, foodPosition }: Props) {
  return (
    <div
      className={`relative w-full h-full bg-white dark:bg-black ${isGameStopped ? "blur-sm" : ""}`}
    >
      {/* Todo: optimise the number of rendered elements */}
      {[...Array(GAME_AREA_SIZE).keys()].map((_, x) => (
        <Fragment key={`id-${x}`}>
          {[...Array(GAME_AREA_SIZE).keys()].map((_, y) =>
            !doesSnakePositionContainPoint(snakePosition, { x, y }) ? (
              <div
                key={`id-${x}-${y}`}
                style={{
                  top: `${y}rem`,
                  left: `${x}rem`,
                }}
                className={`absolute w-4 h-4 bg-black dark:bg-white`}
              />
            ) : null,
          )}
        </Fragment>
      ))}
      {foodPosition && (
        <div
          style={{
            top: `${foodPosition.y}rem`,
            left: `${foodPosition.x}rem`,
          }}
          className={`absolute w-4 h-4 bg-accent-2`}
        />
      )}
    </div>
  );
}

export default GameArea;
