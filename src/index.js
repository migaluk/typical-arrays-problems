
exports.min = function min (array) {
  if ( Array.isArray(array) && array.length) {
  const minValue = Math.min.apply(null, array);
  return minValue;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if ( Array.isArray(array) && array.length) {
  const maxValue = Math.max.apply(null, array);
  return maxValue;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if ( Array.isArray(array) && array.length) {
  var sum = 0;
  for ( var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  const avgValue = sum / array.length;
  return avgValue;
  } else {
  return 0;
  }
}
