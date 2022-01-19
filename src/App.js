import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { arraysEqual, distance } from "./utils";
import config from "./EuclidElementsBook1Proposition1";

const dotRadius = 4;
const strokeWidth = 4;
const dotAPosition = {
  x: window.innerWidth / 2 - 100,
  y: window.innerHeight / 2
};
const dotBPosition = {
  x: window.innerWidth / 2 + 100,
  y: window.innerHeight / 2
};
const dotCPosition = {
  x:
    dotAPosition.x +
    distance(dotAPosition, dotBPosition) * Math.cos(-Math.PI / 3),
  y:
    dotAPosition.y +
    distance(dotAPosition, dotBPosition) * Math.sin(-Math.PI / 3)
};
const dotDPosition = {
  x:
    dotAPosition.x +
    distance(dotAPosition, dotBPosition) * Math.cos(Math.PI / 3),
  y:
    dotAPosition.y +
    distance(dotAPosition, dotBPosition) * Math.sin(Math.PI / 3)
};

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
  const [displayedShapes, setDisplayedShapes] = useState(config.initialState);

  console.log(displayedShapes);
  console.log(
    "config?.states[displayedShapes]",
    config?.states[displayedShapes]
  );

  return (
    <div>
      <motion.svg
        width={window.innerWidth}
        height={window.innerHeight / 2}
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx={dotAPosition.x}
          cy={dotAPosition.y}
          r={dotRadius}
          fill="white"
          stroke="white"
          strokeWidth="1"
        />
        <motion.text
          x={dotAPosition.x + 20}
          y={dotAPosition.y + 20}
          fill="white"
          stroke="white"
          fontSize={25}
        >
          A
        </motion.text>
        <motion.circle
          cx={dotBPosition.x}
          cy={dotBPosition.y}
          r={dotRadius}
          fill="white"
          stroke="white"
        />
        <motion.text
          x={dotBPosition.x + 20}
          y={dotBPosition.y + 20}
          fill="white"
          stroke="white"
          fontSize={25}
        >
          B
        </motion.text>
        <motion.line
          x1={dotAPosition.x}
          y1={dotAPosition.y}
          x2={dotBPosition.x}
          y2={dotBPosition.y}
          stroke="white"
          style={{ strokeWidth }}
        />
        {displayedShapes.includes("circleA_AB") && (
          <motion.circle
            cx={dotAPosition.x}
            cy={dotAPosition.y}
            r={distance(dotAPosition, dotBPosition)}
            stroke="white"
            variants={draw}
            style={{ strokeWidth }}
          />
        )}
        {displayedShapes.includes("circleB_AB") && (
          <motion.circle
            cx={dotBPosition.x}
            cy={dotBPosition.y}
            r={distance(dotAPosition, dotBPosition)}
            stroke="white"
            variants={draw}
            style={{ strokeWidth }}
          />
        )}
        {displayedShapes.includes("circleA_AB") &&
          displayedShapes.includes("circleB_AB") && (
            <>
              <motion.circle
                cx={dotCPosition.x}
                cy={dotCPosition.y}
                r={dotRadius}
                fill="white"
                stroke="white"
                variants={draw}
              />
              <motion.text
                x={dotCPosition.x + 20}
                y={dotCPosition.y + 20}
                fill="white"
                stroke="white"
                fontSize={25}
                variants={draw}
              >
                C
              </motion.text>
              <motion.circle
                cx={dotDPosition.x}
                cy={dotDPosition.y}
                r={dotRadius}
                fill="white"
                stroke="white"
                variants={draw}
              />
              <motion.text
                x={dotDPosition.x + 20}
                y={dotDPosition.y + 20}
                fill="white"
                stroke="white"
                fontSize={25}
                variants={draw}
              >
                D
              </motion.text>
            </>
          )}
        {displayedShapes.includes("lineAC") && (
          <motion.line
            x1={dotAPosition.x}
            y1={dotAPosition.y}
            x2={dotCPosition.x}
            y2={dotCPosition.y}
            stroke="white"
            style={{ strokeWidth }}
            variants={draw}
          />
        )}
        {displayedShapes.includes("lineBC") && (
          <motion.line
            x1={dotBPosition.x}
            y1={dotBPosition.y}
            x2={dotCPosition.x}
            y2={dotCPosition.y}
            stroke="white"
            style={{ strokeWidth }}
            variants={draw}
          />
        )}
        {displayedShapes.includes("lineAD") && (
          <motion.line
            x1={dotAPosition.x}
            y1={dotAPosition.y}
            x2={dotDPosition.x}
            y2={dotDPosition.y}
            stroke="white"
            style={{ strokeWidth }}
            variants={draw}
          />
        )}
        {displayedShapes.includes("lineBD") && (
          <motion.line
            x1={dotBPosition.x}
            y1={dotBPosition.y}
            x2={dotDPosition.x}
            y2={dotDPosition.y}
            stroke="white"
            style={{ strokeWidth }}
            variants={draw}
          />
        )}
        {displayedShapes.includes("lineCD") && (
          <>
            <motion.line
              x1={dotCPosition.x}
              y1={dotCPosition.y}
              x2={dotDPosition.x}
              y2={dotDPosition.y}
              stroke="white"
              style={{ strokeWidth }}
              variants={draw}
            />
            <motion.circle
              cx={dotDPosition.x}
              cy={(dotDPosition.y + dotCPosition.y) / 2}
              r={dotRadius}
              fill="white"
              stroke="white"
              variants={draw}
            />
            <motion.text
              x={dotDPosition.x + 20}
              y={(dotDPosition.y + dotCPosition.y) / 2 + 20}
              fill="white"
              stroke="white"
              fontSize={25}
              variants={draw}
            >
              E
            </motion.text>
          </>
        )}
      </motion.svg>
      <div class="action-list">
        <>
          {config?.states[displayedShapes]?.actions.map((action, i) => (
            <div
              key={action.text}
              onClick={() =>
                action.addedState &&
                setDisplayedShapes(displayedShapes + "-" + action.addedState)
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
