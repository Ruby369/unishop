import {request} from '../util/request.js'

export function getGroomList(){
  return request({
    url:'/home/multidata'
  })
}

export function getGoodsItem(page){
  return request({
    url:'/home/data',
    data:{
      type:'pop',
      page
    }
  })
}

