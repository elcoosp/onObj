const proxyGet = get =>
  new Proxy(
    {},
    {
      get
    }
  )

const proxifyTwoLevel = what =>
  proxyGet((_, prop) =>
    proxyGet((_, method) => (...methodArgs) => (...args) =>
      what[prop](...args)[method](...methodArgs)
    )
  )

const onObj = proxifyTwoLevel(Object)

module.exports = onObj
