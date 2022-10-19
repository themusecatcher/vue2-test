/*
  formatDate = 'YYYY-MM-DD'
  formatDate = 'YYYY-MM-DD HH:mm'
  formatDate = 'YYYY-MM-DD HH:mm:ss'
*/
// 默认format：YYYYMMDD，默认分隔符seq：'-'，默认格式类型lang：'US'
export function dateFormat (timestamp, format = 'YYYYMMDD', seq = '-', lang = 'US') {
  if (!isFinite(timestamp)) return '--'
  if (String(timestamp).length === 10) {
    timestamp = timestamp * 1000
  }
  var date = new Date(timestamp)
  var Y = date.getFullYear()
  var M = date.getMonth() + 1
  M = M < 10 ? '0' + M : M
  var D = date.getDate()
  D = D < 10 ? '0' + D : D
  var hour = date.getHours()
  hour = hour < 10 ? '0' + hour : hour
  var min = date.getMinutes()
  min = min < 10 ? '0' + min : min
  var sec = date.getSeconds()
  sec = sec < 10 ? '0' + sec : sec
  if (lang === 'CN') {
    Y += '年'
    M += '月'
    D += '日'
    hour += '时'
    min += '分'
    sec += '秒'
    if (format === 'YYYY') {
      return Y // 2021年
    } else if (format === 'YYYYMM') { // 2021年07月
      return Y + M
    } else if (format === 'YYYYMMDD') { // 2021年07月12日
      return Y + M + D
    } else if (format === 'HH:mm:ss') { // 10时20分35秒
      return hour + min + sec
    } else if (format === 'YYYYMMDD HH:mm') { // 2021年07月12日 10时20分
      return Y + M + D + ' ' + hour + ':' + min
    } else if (format === 'YYYYMMDD HH:mm:ss') { // 2021年07月12日 10时20分35秒
      return Y + M + D + ' ' + hour + min + sec
    } else {
      return '--'
    }
  } else {
    if (format === 'YYYY') {
      return Y // 2021
    } else if (format === 'YYYYMM') { // 2021-07
      return Y + seq + M
    } else if (format === 'YYYYMMDD') { // 2021-07-12
      return Y + seq + M + seq + D
    } else if (format === 'HH:mm:ss') { // 10:20:35
      return hour + ':' + min + ':' + sec
    } else if (format === 'YYYYMMDD HH:mm') { // 2021-07-12 10:20
      return Y + seq + M + seq + D + ' ' + hour + ':' + min
    } else if (format === 'YYYYMMDD HH:mm:ss') { // 2021-07-12 10:20:35
      return Y + seq + M + seq + D + ' ' + hour + ':' + min + ':' + sec
    } else {
      return '--'
    }
  }
}
