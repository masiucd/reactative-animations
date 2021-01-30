export const randomNumber = (num = 10) => Math.floor(Math.random() * num)

const arrayMoveMutate = <T>(xs: T[], from: number, to: number) => {
  const startIndex = from < 0 ? xs.length + from : from
  if (startIndex >= 0 && startIndex < xs.length) {
    const endIndex = to < 0 ? xs.length + to : to
    const [x] = xs.splice(from, 1)
    xs.splice(endIndex, 0, x)
  }
}

const arrayMove = <T>(xs: T[], from: number, to: number) => {
  const list = [...xs]
  arrayMoveMutate(list, from, to)
  return list
}

export { arrayMove, arrayMoveMutate }
