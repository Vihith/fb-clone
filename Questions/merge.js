function merge(m, n) {
  let index = 0
  while (n.length > 0 && m[index]) {
    if (m[index] > n[0]) {
      m.splice(index, 0, n.shift());
    }
    index++;
  }
  return [...m, ...n];
}

console.log(merge([10, 30, 500, 600, 8000], [0, 200, 1000]))