function arraysEqual(array1, array2) {
  // https://bobbyhadz.com/blog/javascript-check-if-two-arrays-have-same-elements
  if (array1.length === array2.length) {
    return array1.every((element) => {
      if (array2.includes(element)) {
        return true;
      }

      return false;
    });
  }

  return false;
}

const distance = (startPosition, endPosition) =>
  norm(vectorDifference(startPosition, endPosition));

const vectorDifference = (vector1, vector2) => ({
  x: vector2.x - vector1.x,
  y: vector2.y - vector1.y
});

const dotProduct = (vector1, vector2) =>
  vector1.x * vector2.x + vector1.y * vector2.y;

const norm = (vector) =>
  Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));

const angleBetweenVectors = (vector1, vector2) =>
  Math.acos(dotProduct(vector1, vector2) / (norm(vector1) * norm(vector2)));

// https://math.stackexchange.com/questions/1744354/project-a-point-within-a-circle-onto-its-edge
const lineCircleIntersection = (vector__line, circle) => {
  const x1 =
    circle.center.x +
    (circle.radius * (vector__line.x - circle.center.x)) /
      distance(vector__line, circle.center);
  const x2 =
    circle.center.x -
    (circle.radius * (vector__line.x - circle.center.x)) /
      distance(vector__line, circle.center);

  return [
    {
      x: x1,
      y:
        ((x1 - circle.center.x) * (vector__line.y - circle.center.y)) /
          (vector__line.x - circle.center.x) +
        circle.center.y
    },
    {
      x: x2,
      y:
        ((x2 - circle.center.x) * (vector__line.y - circle.center.y)) /
          (vector__line.x - circle.center.x) +
        circle.center.y
    }
  ];
};

export {
  arraysEqual,
  distance,
  dotProduct,
  norm,
  vectorDifference,
  angleBetweenVectors,
  lineCircleIntersection
};
