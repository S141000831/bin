import request from '@/utils/request'

export function addBook(params) {
  return request({
    url: '/book/add_book',
    method: 'get',
    params
  })
}


export function getBook() {
  return request({
    url: '/book/show_books',
    method: 'get',
  })
}
