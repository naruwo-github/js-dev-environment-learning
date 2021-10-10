import { helloWorld } from './sub'

helloWorld()

const asynchronous = async (arg) => {
  // pollyfillが必要な変数（async await部分）
  return await arg
}
console.log(asynchronous('hey'))
