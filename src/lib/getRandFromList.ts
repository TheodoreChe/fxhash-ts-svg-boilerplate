export function getRandFromList<T>(list: Array<T>) {
  return list[Math.floor(fxrand() * list.length)]
}
