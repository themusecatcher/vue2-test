import md5 from 'md5'
const secret = '5f39957fcae1c4e1d2d8a25ae38e5ec6'
export const appkey = 'gzwl_wz_b804cc6805'
export function getSigncode (params, type) {
  const objectKeyArr = Object.keys(params)
  objectKeyArr.sort()
  let str = ''
  objectKeyArr.forEach(key => {
    if (type === 'get') {
      if (typeof params[key] === 'object') {
        str += key
        str += JSON.stringify(params[key])
      } else {
        str += key
        str += params[key]
      }
    } else {
      if ((typeof params[key] === 'string') || (typeof params[key] === 'number')) {
        str += key
        str += params[key]
      }
    }
  })
  str = secret + str + secret
  str = md5(str.toUpperCase())
  return str
}
