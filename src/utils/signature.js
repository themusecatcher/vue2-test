import md5 from 'md5'
const secret = '5f39957fcae1c4e1d2d8a25ae38e5ec6'
export const appkey = 'gzwl_wz_b804cc6805'
export function getSigncode (params, method) {
  let str = ''
  if (Object.prototype.toString.call(params) === '[object FormData]') {
    const formKeys = params.keys()
    const keys = []
    for (const key of formKeys) {
      keys.push(key)
    }
    keys.sort()
    keys.forEach(key => {
      if (Object.prototype.toString.call(params.get(key)) !== '[object File]') {
        str += key
        str += params.get(key)
      }
    })
  } else {
    const keys = Object.keys(params)
    keys.sort()
    keys.forEach(key => {
      if (method === 'get') {
        if (!Array.isArray(params[key])) {
          if (typeof params[key] === 'object') {
            str += key
            str += JSON.stringify(params[key])
          } else {
            str += key
            str += params[key]
          }
        }
      } else {
        if ((typeof params[key] === 'string') || (typeof params[key] === 'number')) {
          str += key
          str += params[key]
        }
      }
    })
  }
  str = secret + str + secret
  str = md5(str.toUpperCase())
  return str
}