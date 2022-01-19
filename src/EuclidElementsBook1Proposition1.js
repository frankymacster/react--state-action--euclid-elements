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

export default {
  initialState: "lineAB",
  states: {
    lineAB: {
      actions: [
        { text: "drawCircle(A, AB)", addedState: "circleA_AB" },
        { text: "drawCircle(B, AB)", addedState: "circleB_AB" }
      ]
    },
    "lineAB-circleA_AB": {
      actions: [{ text: "drawCircle(B, AB)", addedState: "circleB_AB" }]
    },
    "lineAB-circleB_AB": {
      actions: [{ text: "drawCircle(A, AB)", addedState: "circleA_AB" }]
    },
    "lineAB-circleA_AB-circleB_AB": lineAB__circleA_AB__circleB_AB,
    "lineAB-circleB_AB-circleA_AB": lineAB__circleA_AB__circleB_AB,
    "lineAB-circleA_AB-circleB_AB-lineAC": lineAB__circleA_AB__circleB_AB__lineAC,
    "lineAB-circleB_AB-circleA_AB-lineAC": lineAB__circleA_AB__circleB_AB__lineAC,
    "lineAB-circleA_AB-circleB_AB-lineBC": lineAB__circleA_AB__circleB_AB__lineBC,
    "lineAB-circleB_AB-circleA_AB-lineBC": lineAB__circleA_AB__circleB_AB__lineBC,
    "lineAB-circleA_AB-circleB_AB-lineAC-lineBC": lineAB__circleA_AB__circleB_AB__lineAC__lineBC,
    "lineAB-circleA_AB-circleB_AB-lineBC-lineAC": lineAB__circleA_AB__circleB_AB__lineAC__lineBC,
    "lineAB-circleB_AB-circleA_AB-lineAC-lineBC": lineAB__circleA_AB__circleB_AB__lineAC__lineBC,
    "lineAB-circleB_AB-circleA_AB-lineBC-lineAC": lineAB__circleA_AB__circleB_AB__lineAC__lineBC
  }
};
