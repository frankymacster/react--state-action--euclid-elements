import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { distance } from "./utils";
import EuclidElementsBook1Proposition1 from "./EuclidElementsBook1Proposition1";
import EuclidElementsBook1Proposition2 from "./EuclidElementsBook1Proposition2";
import EuclidElementsBook1Proposition3 from "./EuclidElementsBook1Proposition3";

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
  const [selectedConfig, setSelectedConfig] = useState(null);

  const configs = {
    EuclidElementsBook1Proposition1,
    EuclidElementsBook1Proposition2,
    EuclidElementsBook1Proposition3
  };

  return (
    <>
      <button
        onClick={() =>
          setSelectedConfig(configs.EuclidElementsBook1Proposition1)
        }
      >
        EuclidElementsBook1Proposition1
      </button>
      <button
        onClick={() =>
          setSelectedConfig(configs.EuclidElementsBook1Proposition2)
        }
      >
        EuclidElementsBook1Proposition2
      </button>
      <button
        onClick={() =>
          setSelectedConfig(configs.EuclidElementsBook1Proposition3)
        }
      >
        EuclidElementsBook1Proposition3
      </button>
      {selectedConfig && <Renderer config={selectedConfig} />}
    </>
  );
}

function Renderer({ config }) {
  const [state, setState] = useState(config.initialState);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const displayedShapes = state.split("-");

  const onKeyDown = (event) => {
    const actions = config?.states[state]?.actions;
    switch (event.key) {
      case "ArrowUp":
        setSelectedIndex((selectedIndex - 1) % actions.length);
        break;
      case "ArrowDown":
        setSelectedIndex((selectedIndex + 1) % actions.length);
        break;
      case "Enter":
        actions[selectedIndex].addedState &&
          setState(state + "-" + actions[selectedIndex].addedState);
        break;
      default:
        break;
    }
  };

  return (
    <div {...{ onKeyDown }} tabIndex="0">
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
          } else if (displayedShape.includes("triangle")) {
            return (
              <>
                <motion.line
                  x1={config.drawings["dot" + displayedShape[8]].position.x}
                  y1={config.drawings["dot" + displayedShape[8]].position.y}
                  x2={config.drawings["dot" + displayedShape[9]].position.x}
                  y2={config.drawings["dot" + displayedShape[9]].position.y}
                  stroke="white"
                  style={{ strokeWidth }}
                  variants={draw}
                />
                <motion.line
                  x1={config.drawings["dot" + displayedShape[9]].position.x}
                  y1={config.drawings["dot" + displayedShape[9]].position.y}
                  x2={config.drawings["dot" + displayedShape[10]].position.x}
                  y2={config.drawings["dot" + displayedShape[10]].position.y}
                  stroke="white"
                  style={{ strokeWidth }}
                  variants={draw}
                />
                <motion.line
                  x1={config.drawings["dot" + displayedShape[10]].position.x}
                  y1={config.drawings["dot" + displayedShape[10]].position.y}
                  x2={config.drawings["dot" + displayedShape[8]].position.x}
                  y2={config.drawings["dot" + displayedShape[8]].position.y}
                  stroke="white"
                  style={{ strokeWidth }}
                  variants={draw}
                />
              </>
            );
          }
        })}
      </motion.svg>
      <div class="action-list" style={{ padding: "20px" }}>
        <>
          {config?.states[state]?.actions.map((action, i) => (
            <div>
              <div style={{ display: "inline-block", paddingRight: "10px" }}>
                {selectedIndex === i ? ">" : " "}
              </div>
              <div
                style={{ display: "inline-block" }}
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
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
