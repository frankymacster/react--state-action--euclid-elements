import {
  distance,
  vectorDifference,
  angleBetweenVectors,
  lineCircleIntersection
} from "./utils";

const vector__dotAPosition = {
  x: window.innerWidth / 2 - 100,
  y: window.innerHeight / 2
};
const vector__dotBPosition = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2 - 50
};
const vector__dotCPosition = {
  x: vector__dotAPosition.x + 100,
  y: vector__dotAPosition.y + 100
};
const vector__dotDPosition = {
  x: vector__dotAPosition.x + 300,
  y: vector__dotAPosition.y + 100
};
const vector__lineCDdirection = vectorDifference(
  vector__dotCPosition,
  vector__dotDPosition
);
const vector__lineACdirection = vectorDifference(
  vector__dotCPosition,
  vector__dotAPosition
);
const angle__lineCDdirection_lineACdirection = angleBetweenVectors(
  vector__lineCDdirection,
  vector__lineACdirection
);
const angle__lineCE = angle__lineCDdirection_lineACdirection - Math.PI / 3;
const vector__dotEPosition = {
  x:
    vector__dotCPosition.x +
    distance(vector__dotAPosition, vector__dotCPosition) *
      Math.cos(-angle__lineCE),
  y:
    vector__dotCPosition.y +
    distance(vector__dotAPosition, vector__dotCPosition) *
      Math.sin(-angle__lineCE)
};
const [, vector__dotFPosition] = lineCircleIntersection(vector__dotEPosition, {
  center: vector__dotAPosition,
  radius: distance(vector__dotAPosition, vector__dotBPosition)
});
const [vector__dotGPosition] = lineCircleIntersection(vector__dotCPosition, {
  center: vector__dotEPosition,
  radius: distance(vector__dotEPosition, vector__dotFPosition)
});
const [vector__dotHPosition] = lineCircleIntersection(vector__dotDPosition, {
  center: vector__dotCPosition,
  radius: distance(vector__dotCPosition, vector__dotGPosition)
});

export default {
  initialState: "dotA-dotB-lineAB-dotC-dotD-lineCD",
  states: {
    "dotA-dotB-lineAB-dotC-dotD-lineCD": {
      actions: [{ text: "drawLine(A, C)", addedState: "lineAC" }]
    },
    "dotA-dotB-lineAB-dotC-dotD-lineCD-lineAC": {
      actions: [{ text: "drawTriangle(A, C)", addedState: "triangleACE-dotE" }]
    },
    "dotA-dotB-lineAB-dotC-dotD-lineCD-lineAC-triangleACE-dotE": {
      actions: [{ text: "drawCircle(A, AB)", addedState: "circleA_AB" }]
    },
    "dotA-dotB-lineAB-dotC-dotD-lineCD-lineAC-triangleACE-dotE-circleA_AB": {
      actions: [
        {
          text: "extendLineToCircleEdge(AE, circleA_AB)",
          addedState: "dotF-lineAF"
        }
      ]
    },
    "dotA-dotB-lineAB-dotC-dotD-lineCD-lineAC-triangleACE-dotE-circleA_AB-dotF-lineAF": {
      actions: [
        {
          text: "drawCircle(E, EF)",
          addedState: "circleE_EF"
        }
      ]
    },
    "dotA-dotB-lineAB-dotC-dotD-lineCD-lineAC-triangleACE-dotE-circleA_AB-dotF-lineAF-circleE_EF": {
      actions: [
        {
          text: "extendLineToCircleEdge(EC, circleE_EF)",
          addedState: "dotG-lineCG"
        }
      ]
    },
    "dotA-dotB-lineAB-dotC-dotD-lineCD-lineAC-triangleACE-dotE-circleA_AB-dotF-lineAF-circleE_EF-dotG-lineCG": {
      actions: [
        {
          text: "drawCircle(C, CG)",
          addedState: "circleC_CG-dotH"
        }
      ]
    },
    "dotA-dotB-lineAB-dotC-dotD-lineCD-lineAC-triangleACE-dotE-circleA_AB-dotF-lineAF-circleE_EF-dotG-lineCG-circleC_CG-dotH": {
      actions: [
        {
          text: "GOAL!!!"
        }
      ]
    }
  },
  drawings: {
    dotA: {
      position: vector__dotAPosition
    },
    dotB: {
      position: vector__dotBPosition
    },
    dotC: {
      position: vector__dotCPosition
    },
    dotD: {
      position: vector__dotDPosition
    },
    dotE: {
      position: vector__dotEPosition
    },
    dotF: {
      position: vector__dotFPosition
    },
    dotG: {
      position: vector__dotGPosition
    },
    dotH: {
      position: vector__dotHPosition
    }
  }
};
