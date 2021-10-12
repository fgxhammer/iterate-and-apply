module.exports =  (obj, fun) => {
  for (const i in obj) {
    if (typeof obj[i] === 'object' && obj[i] !== null) {
      iterateRecursiveAndApplyFun(obj[i])
    } else {
      if (obj[i]) {
        obj[i] = fun(obj[i])
      }
    }
  }
}