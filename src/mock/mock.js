import Mock from 'mockjs'

Mock.mock('/user/login',{
  "code": 20000,
  "data": {
    "token": "admin"
  }
})

Mock.mock('/resource/list',{
  "success":'ok',
  "list1": [
    {
    "title": "1"
  },
    {
      "title": "2"
    },
    {
      "title": "3"
    },
    {
      "title": "4"
    },
    {
      "title": "5"
    },
    {
      "title": "6"
    },
    {
      "title": "7"
    },
    {
      "title": "8"
    },
    {
      "title": "9"
    },
    {
      "title": "10"
    },
  ],
  "list2":[
    {
    "value": "不限",
    "active": true
  },
    {
      "value": "公共安全",
      "active": false
    },
    {
      "value": "健康保障",
      "active": false
    },
    {
      "value": "社会保障",
      "active": false
    },
    {
      "value": "食品药品安全",
      "active": false
    },{
      "value": "安全生产",
      "active": false
    },{
      "value": "价格监督",
      "active": false
    },{
      "value": "能源安全",
      "active": false
    },{
      "value": "城乡建设",
      "active": false
    },{
      "value": "社区治理",
      "active": false
    },{
      "value": "生态环保",
      "active": false
    },{
      "value": "应急维稳",
      "active": false
    },{
      "value": "信用体系",
      "active": false
    }
  ]
})
Mock.mock('/table/fenlei', {
})
