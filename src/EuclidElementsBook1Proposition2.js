import {
  distance,
  angleBetweenVectors,
  vectorDifference,
  lineCircleIntersection
} from "./utils";

const dotAPosition = {
  x: window.innerWidth / 2 - 100,
  y: window.innerHeight / 2
};
const dotBPosition = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};
const dotCPosition = {
  x: window.innerWidth / 2 + 100,
  y: window.innerHeight / 2 - 100
};
const angle = angleBetweenVectors(
  vectorDifference(dotAPosition, dotCPosition),
  {
    x: 100,
    y: 0
  }
);
const dotDPosition = {
  x:
    dotAPosition.x +
    distance(dotAPosition, dotCPosition) * Math.cos(angle + (-2 * Math.PI) / 3),
  y:
    dotAPosition.y +
    distance(dotAPosition, dotCPosition) * Math.sin(angle + (-2 * Math.PI) / 3)
};
const [dotEPosition] = lineCircleIntersection(dotDPosition, {
  center: dotAPosition,
  radius: distance(dotAPosition, dotBPosition)
});
const [dotFPosition] = lineCircleIntersection(dotCPosition, {
  center: dotAPosition,
  radius: distance(dotAPosition, dotBPosition)
});
const [dotGPosition] = lineCircleIntersection(dotCPosition, {
  center: dotDPosition,
  radius: distance(dotDPosition, dotEPosition)
});

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
    },
    "dotA-dotB-lineAB-dotC-lineAC-triangleACD-dotD-circleA_AB-dotE-dotF-circleD_DE-dotG": {
      actions: [{ text: "GOAL!!!" }]
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
