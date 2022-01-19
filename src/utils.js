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
  Math.sqrt(
    Math.pow(startPosition.x - endPosition.x, 2) +
      Math.pow(startPosition.y - endPosition.y, 2)
  );

export { arraysEqual, distance };
