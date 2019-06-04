import request from '@/utils/http'
/**
 * 获取设备列表
 * @param SessionId
 * @param UserName
 */
export function getResList(param) {
  return request({
    url: '/resource/list',
    method: 'get',
    params: param
  })
}
