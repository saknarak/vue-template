function genNamespace(module, types) {
  const newObj = {}

  Object.keys(types).forEach((type) => {
    newObj[type] = {}
    Object.keys(types[type]).forEach((key) => {
      newObj[type][key] = module + ':' + key
    })
  })
  return newObj
}

export default {
  genNamespace,
}
