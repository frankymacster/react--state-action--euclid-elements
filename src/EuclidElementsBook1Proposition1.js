import { distance } from "./utils";

const lineAB__circleA_AB__circleB_AB = {
  actions: [
    { text: "drawLine(A, C)", addedState: "lineAC" },
    { text: "drawLine(A, D)", addedState: "lineAD" },
    { text: "drawLine(B, C)", addedState: "lineBC" },
    { text: "drawLine(B, D)", addedState: "lineBD" },
    { text: "drawLine(C, D)", addedState: "lineCD" },
    { text: "drawCircle(D, AB)", addedState: "circleD_AB" },
    { text: "drawCircle(D, CD)", addedState: "circleD_CD" },
    { text: "drawCircle(C, AB)", addedState: "circleC_AB" },
    { text: "drawCircle(C, CD)", addedState: "circleC_CD" }
  ]
};
const lineAB__circleA_AB__circleB_AB__lineAC = {
  actions: [
    { text: "drawLine(A, D)", addedState: "lineAD" },
    { text: "drawLine(B, C)", addedState: "lineBC" },
    { text: "drawLine(B, D)", addedState: "lineBD" },
    { text: "drawLine(C, D)", addedState: "lineCD" },
    { text: "drawCircle(C, AB)", addedState: "circleC_AB" },
    { text: "drawCircle(C, CD)", addedState: "circleC_CD" },
    { text: "drawCircle(D, AB)", addedState: "circleD_AB" },
    { text: "drawCircle(D, CD)", addedState: "circleD_CD" }
  ]
};
const lineAB__circleA_AB__circleB_AB__lineBC = {
  actions: [
    { text: "drawLine(A, C)", addedState: "lineAC" },
    { text: "drawLine(A, D)", addedState: "lineAD" },
    { text: "drawLine(B, D)", addedState: "lineBD" },
    { text: "drawLine(C, D)", addedState: "lineCD" },
    { text: "drawCircle(C, AB)", addedState: "circleC_AB" },
    { text: "drawCircle(C, CD)", addedState: "circleC_CD" },
    { text: "drawCircle(D, AB)", addedState: "circleD_AB" },
    { text: "drawCircle(D, CD)", addedState: "circleD_CD" }
  ]
};
const lineAB__circleA_AB__circleB_AB__lineAC__lineBC = {
  actions: [{ text: "GOAL!!!" }]
};

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

export default {
  initialState: "dotA-dotB-lineAB",
  states: {
    "dotA-dotB-lineAB": {
      actions: [
        { text: "drawCircle(A, AB)", addedState: "circleA_AB" },
        { text: "drawCircle(B, AB)", addedState: "circleB_AB" }
      ]
    },
    "dotA-dotB-lineAB-circleA_AB": {
      actions: [
        { text: "drawCircle(B, AB)", addedState: "circleB_AB-dotC-dotD" }
      ]
    },
    "dotA-dotB-lineAB-circleB_AB": {
      actions: [
        { text: "drawCircle(A, AB)", addedState: "circleA_AB-dotC-dotD" }
      ]
    },
    "dotA-dotB-lineAB-circleA_AB-circleB_AB-dotC-dotD": lineAB__circleA_AB__circleB_AB,
    "dotA-dotB-lineAB-circleB_AB-circleA_AB-dotC-dotD": lineAB__circleA_AB__circleB_AB,
    "dotA-dotB-lineAB-circleA_AB-circleB_AB-dotC-dotD-lineAC": lineAB__circleA_AB__circleB_AB__lineAC,
    "dotA-dotB-lineAB-circleB_AB-circleA_AB-dotC-dotD-lineAC": lineAB__circleA_AB__circleB_AB__lineAC,
    "dotA-dotB-lineAB-circleA_AB-circleB_AB-dotC-dotD-lineBC": lineAB__circleA_AB__circleB_AB__lineBC,
    "dotA-dotB-lineAB-circleB_AB-circleA_AB-dotC-dotD-lineBC": lineAB__circleA_AB__circleB_AB__lineBC,
    "dotA-dotB-lineAB-circleA_AB-circleB_AB-dotC-dotD-lineAC-lineBC": lineAB__circleA_AB__circleB_AB__lineAC__lineBC,
    "dotA-dotB-lineAB-circleA_AB-circleB_AB-dotC-dotD-lineBC-lineAC": lineAB__circleA_AB__circleB_AB__lineAC__lineBC,
    "dotA-dotB-lineAB-circleB_AB-circleA_AB-dotC-dotD-lineAC-lineBC": lineAB__circleA_AB__circleB_AB__lineAC__lineBC,
    "dotA-dotB-lineAB-circleB_AB-circleA_AB-dotC-dotD-lineBC-lineAC": lineAB__circleA_AB__circleB_AB__lineAC__lineBC
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
    }
  }
};
