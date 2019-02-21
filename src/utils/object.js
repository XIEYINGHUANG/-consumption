export const isBetweenDate = (from, to) => {
  const fromTimeStamp = new Date(from)
  const toTimeStamp = new Date(to)
  if (Date.now() > fromTimeStamp && Date.now() < toTimeStamp) {
    return true
  }
  return false
}