
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];

  return matrix.reduce((acc, el, ind) => {
    if(ind % 2 === 0) {
      acc.push(...el);
    } else {
      acc.push(...el.reverse());
    }
    return acc;
  }, [])
}
