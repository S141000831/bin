import request from '@/utils/request'

export function getBook(params) {
  return request({
    url: '/api/show_books',
    method: 'get',
    params
  })
}
