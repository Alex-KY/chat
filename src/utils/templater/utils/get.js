function get (obj, path, defaultValue) {
  console.warn(obj, path)
  const keys = path.split('.');

  let result = obj;
  for (let key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;        
    }
  }

  return result ?? defaultValue; // "??" — [оператор нулевого слияния](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) (не поддерживается старыми браузерами, для них нужен полифилл)
};

export default get