import Mock from 'mockjs'

Mock.mock('/user/login',{
  "code": 20000,
  "data": {
    "token": "admin"
  }
})

Mock.mock('/resource/list',{
  "success":'ok',
  "demo2": [
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
  "demo3":[
    {
      "title": "基础信息资源类别：",
      "childer": [{
        "value": "不限",
        "active": true
      },
        {
          "value": "空间地理库",
          "active": false
        },
        {
          "value": "人口信息库",
          "active": false
        },
        {
          "value": "法人信息库",
          "active": false
        },
        {
          "value": "信用专题库",
          "active": false
        },
        {
          "value": "电子证件库",
          "active": false
        }
      ]
    },
    {
      "title": "共享级别：",
      "childer": [{
        "value": "不限",
        "active": true
      },
        {
          "value": "无条件共享",
          "active": false
        },
        {
          "value": "有条件共享",
          "active": false
        },
        {
          "value": "不予共享",
          "active": false
        }
      ]
    },
    {
      "title": "主题区域：",
      "childer": [{
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
    }
  ]
})
Mock.mock('/table/fenlei', {
})
