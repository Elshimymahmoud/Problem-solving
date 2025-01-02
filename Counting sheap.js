function CountSheep(arr) {
  let count = 0;

  arr.map((x) => {
    if (x === true) {
      count++;
    }
  });
}
