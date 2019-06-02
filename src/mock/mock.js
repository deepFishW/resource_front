import Mock from 'mockjs'

Mock.mock('/user/login',{
  "code": 20000,
  "data": {
    "token": "admin"
  }
})

Mock.mock('/user/list',{
})
Mock.mock('/table/fenlei', {
})
