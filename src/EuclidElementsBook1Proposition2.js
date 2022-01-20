import { distance } from "./utils";

const dotAPosition = {
  x: window.innerWidth / 2 - 100,
  y: window.innerHeight / 2
};
const dotBPosition = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};
const dotCPosition = {
  x: dotAPosition.x + 200 * Math.cos(-Math.PI / 3),
  y: dotAPosition.y + 200 * Math.sin(-Math.PI / 3)
};
const dotDPosition = {
  x: dotAPosition.x + 200 * Math.cos((-2 * Math.PI) / 3),
  y: dotAPosition.y + 200 * Math.sin((-2 * Math.PI) / 3)
};
const dotEPosition = {
  x:
    dotAPosition.x +
    distance(dotAPosition, dotBPosition) * Math.cos((-2 * Math.PI) / 3),
  y:
    dotAPosition.y +
    distance(dotAPosition, dotBPosition) * Math.sin((-2 * Math.PI) / 3)
};
const dotFPosition = {
  x:
    dotAPosition.x +
    distance(dotAPosition, dotBPosition) * Math.cos(-Math.PI / 3),
  y:
    dotAPosition.y +
    distance(dotAPosition, dotBPosition) * Math.sin(-Math.PI / 3)
};
const dotGPosition = {
  x: dotDPosition.x + distance(dotAPosition, dotBPosition),
  y: dotDPosition.y
};

export default {
  initialState: "dotA-dotB-lineAB-dotC",
  states: {
    "dotA-dotB-lineAB-dotC": {
      actions: [
        { text: "drawLine(A, C)", addedState: "lineAC" },
        { text: "drawLine(B, C)", addedState: "lineBC" }
      ]
    },
    "dotA-dotB-lineAB-dotC-lineAC": {
      actions: [{ text: "drawTriangle(A, C)", addedState: "triangleACD-dotD" }]
    },
    "dotA-dotB-lineAB-dotC-lineBC": {
      actions: []
    },
    "dotA-dotB-lineAB-dotC-lineAC-triangleACD-dotD": {
      actions: [
        { text: "drawCircle(A, AB)", addedState: "circleA_AB-dotE-dotF" }
      ]
    },
    "dotA-dotB-lineAB-dotC-lineAC-triangleACD-dotD-circleA_AB-dotE-dotF": {
      actions: [{ text: "drawCircle(D, DE)", addedState: "circleD_DE-dotG" }]
    }
  },
  drawings: {
    dotA: {
      position: dotAPosition
    },
    dotB: {
      position: dotBPosition
    },
    dotC: {
      position: dotCPosition
    },
    dotD: {
      position: dotDPosition
    },
    dotE: {
      position: dotEPosition
    },
    dotF: {
      position: dotFPosition
    },
    dotG: {
      position: dotGPosition
    }
  }
};
