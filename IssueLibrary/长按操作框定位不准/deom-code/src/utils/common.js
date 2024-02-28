function showTwoNum(number) {
  return number < 10 ? '0' + number : number
}

export function getFormatDateTime() {
  const now = new Date()

  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let day = now.getDate()
  let hour = now.getHours()
  let minute = now.getMinutes()

  return `${year}年${month}月${day}日 ${showTwoNum(hour)}:${showTwoNum(minute)}`
}