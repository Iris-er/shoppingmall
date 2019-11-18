import request from '@/utils/http'

export function login(data) {
  return request({
    url: 'admin/auth/login',
    method: 'post',
    data
  })
}