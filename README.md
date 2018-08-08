# OnObj

Helper function to map/reduce/filter objects.

## Table of Contents

- [OnObj](#onobj)
    - [Table of Contents](#table-of-contents)
    - [Usage](#usage)
    - [Support](#support)
    - [Contributing](#contributing)

## Usage

```js
onObj.keys.map(k => k.repeat(2))({ a: 0, b: 1 })
// ['aa', 'bb']
```

```js
onObj.entries.reduce((acc, a) => [...acc, a.toString()], [])({ a: 0, b: 1 })
// ['a,0', 'b,1']
```

## Support

Please [open an issue](https://github.com/elcoosp/onObj/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/elcoosp/onObj/compare/).
