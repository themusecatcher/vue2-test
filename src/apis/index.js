import request from '@/utils/request'
const apis = {
  region: '/api/common/region'
}
export function region (parameter) {
  return request({
    url: apis.region,
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
