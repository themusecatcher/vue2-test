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