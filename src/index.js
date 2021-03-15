exports.min = function min (array) {

  if ((array.length !== undefined) || (array.length !== NaN) || (array.length !== null)) // доделат ьпроверку на пустой массив
  {
    let minInArray = array[0];
    for (i = 0; i < array.length; i++) {
    if (array[i] < minInArray)
    minInArray = array[i];
    }

  return minInArray; }

else return 0;
}

exports.max = function max (array) {


  let maxInArray = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > maxInArray)
    maxInArray = array[i];
  }
  return maxInArray;
}

exports.avg = function avg (array) {


  let sum = 0;

  for (i = 0; i < array.length; i++) {
    sum = sum + (+array[i].toFixed());
  }
  let avgOfArray = sum / array.length;

  return avgOfArray;
}

