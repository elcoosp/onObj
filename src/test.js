const onObj = require('./index.js')

test('should map object keys', () => {
  const expected = onObj.keys.map(k => k.repeat(2))({ a: 0, b: 1 })

  expect(expected).toEqual(['aa', 'bb'])
})

test('should reduce object entries', () => {
  const expected = onObj.entries.reduce((acc, a) => [...acc, a.toString()], [])(
    { a: 0, b: 1 }
  )

  expect(expected).toEqual(['a,0', 'b,1'])
})
