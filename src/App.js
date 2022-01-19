import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { distance } from "./utils";
import config from "./EuclidElementsBook1Proposition1";

const dotRadius = 4;
const strokeWidth = 4;

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function App() {
  const [state, setState] = useState(config.initialState);
  const displayedShapes = state.split("-");

  return (
    <div>
      <motion.svg
        width={window.innerWidth}
        height={window.innerHeight / 2}
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        initial="hidden"
        animate="visible"
      >
        {displayedShapes.map((displayedShape) => {
          if (displayedShape.includes("dot")) {
            return (
              <>
                <motion.circle
                  cx={config.drawings[displayedShape].position.x}
                  cy={config.drawings[displayedShape].position.y}
                  r={dotRadius}
                  fill="white"
                  stroke="white"
                  strokeWidth="1"
                  variants={draw}
                />
                <motion.text
                  x={config.drawings[displayedShape].position.x + 20}
                  y={config.drawings[displayedShape].position.y + 20}
                  fill="white"
                  stroke="white"
                  fontSize={25}
                  variants={draw}
                >
                  {displayedShape[3]}
                </motion.text>
              </>
            );
          } else if (displayedShape.includes("line")) {
            return (
              <>
                <motion.line
                  x1={config.drawings["dot" + displayedShape[4]].position.x}
                  y1={config.drawings["dot" + displayedShape[4]].position.y}
                  x2={config.drawings["dot" + displayedShape[5]].position.x}
                  y2={config.drawings["dot" + displayedShape[5]].position.y}
                  stroke="white"
                  style={{ strokeWidth }}
                  variants={draw}
                />
              </>
            );
          } else if (displayedShape.includes("circle")) {
            return (
              <>
                <motion.circle
                  cx={config.drawings["dot" + displayedShape[6]].position.x}
                  cy={config.drawings["dot" + displayedShape[6]].position.y}
                  r={distance(
                    config.drawings["dot" + displayedShape[8]].position,
                    config.drawings["dot" + displayedShape[9]].position
                  )}
                  stroke="white"
                  style={{ strokeWidth }}
                  variants={draw}
                />
              </>
            );
          }
        })}
      </motion.svg>
      <div class="action-list">
        <>
          {config?.states[state]?.actions.map((action, i) => (
            <div
              key={action.text}
              onClick={() =>
                action.addedState && setState(state + "-" + action.addedState)
              }
            >
              <TypeWriterEffect
                textStyle={{ fontFamily: "Courier", fontSize: 16 }}
                startDelay={i * 1000}
                cursorColor="#39ff14"
                hideCursorAfterText
                text={action.text}
                typeSpeed={50}
              />
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
