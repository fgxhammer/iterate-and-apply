module.exports =  (input, fun) => {
  if (typeof input !== 'object') {
    const x = input
    return fun(x)
  }

  const obj = JSON.parse(JSON.stringify(input))
  for (const i in obj) {
    if (typeof obj[i] === 'object' && obj[i] !== null) {
      iterateRecursiveAndApplyFun(obj[i])
    } else {
      if (obj[i]) {
        obj[i] = fun(obj[i])
      }
    }
  }
  return obj
}