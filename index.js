module.exports = array => {
  if (array instanceof Array) return array;
  if (array === null || array === undefined) return [];

  return [array];
};
