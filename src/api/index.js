import request from '@/utils/request'
const apis = {
  dictByType: '/api/dict/byType'
}
export function dictByType (parameter) {
  return request({
    url: apis.dictByType,
    method: 'get',
    params: parameter
  })
}
// get
export function getAction (url, parameter) {
  return request({
    url: url,
    method: 'get',
    params: parameter
  })
}
// post
export function postAction (url, parameter) {
  return request({
    url: url,
    method: 'post',
    data: parameter
  })
}
