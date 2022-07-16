var maximum69Number = function (num) {
  let array = (num + "").split("");
  let max = num;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "6") {
      array[i] = "9";
      max = Number(array.join(""));
      break;
    }
  }

  return max;
};