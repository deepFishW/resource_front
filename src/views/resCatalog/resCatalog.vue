<template>
  <div>
    <div id="view" clock>
      <demo-filter :get-list="filterList" @get-sel-data="getFilterSelData" @set-time="setTime"></demo-filter>
      <view-layout :view-data="viewList"  :view-time="viewTime"></view-layout>
      <pre>
   			选中的数据：{{this.filterSelData}}
   		</pre>
    </div>
  </div>
</template>
<script>
  import { getResList } from '@/api/function'
//  import axios from 'axios'
  import demoFilter from '../../components/demo-filter.vue'
  import viewLayout from '../../components/view-layout.vue'
  export default {
    name: 'resCatalog',
    components: {
      demoFilter,viewLayout
    },
    data() {
      return {
        viewList: [],
        viewTime: {
          time: true,
          msg: '数据拼命加载中...'
        },
        param: {},
        filterList: [],
        filterSelData: [], // 过滤选中的数据
        demo2:{
          "list": [
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
            ]
        },
        demo3:{
          "list": [
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
        }
      }

    },
    created() {
  /*    this.$http.get(this.$api.searchSelect.filter, {}, res => {
        if (res.success) {
          this.filterList = res.list2
          this.viewList = res.list1
        } else {
          this.filterList = res.list2
        }
      })*/
      getResList().then(response => {
        console.log(response.data)
        this.filterList = response.list2
        this.viewList = response.list1
      })
  /*    // 请求数据
      this.$ajax(this.demo2, this.param, 'get').then(res => {
        this.viewList = res.list
        return this.setRequest(this.demo3, this.param, 'get')
      }).then(res => {
        this.filterList = res.list
      })*/

    },
    mounted() {
      this.setTime(1000, 0, false)
    },
    methods: {
      // 封装 axios
 /*     setRequest(url, data = {}, method = 'get') {
        return new Promise((resolve, reject) => {
          axios({
            url,
            method,
            data
          }).then(res => {
            resolve(res.data)
          }).catch(err => {
            reject(err)
          })
        })
      },*/

      // 获取筛选组件选中的值
      getFilterSelData(data) {
        this.filterSelData = data
      },

      // 模拟延时显示数据视图
      setTime(startTime, endTime, bool) {
        setTimeout(() => {
          this.viewTime.time = bool
          setTimeout(() => {
            this.viewTime.time = false
          }, endTime)
        }, startTime)
      }
    }
  }
</script>
<style rel="stylesheet">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  section {
    width: 100%;
    height: 100%;
  }

  [v-clock] {
    display: none;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  /* 布局组件:start */
  .view-warp {
    flex: 1;
    overflow: hidden;
    margin: auto;
    display: flex;
  }

  .view-box {
    /*overflow: auto;*/
    /*width: 1220px;*/
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: 0 -10px;
  }

  .view-flex {
    padding: 10px;
    cursor: pointer;
    transition: ease .5s;
    transform-style: preserve-3d;
  }

  .view-flex:hover {
    transform: translateY(-10px);
    transition: ease .5s;
  }

  .view-item {
    border: 1px solid #999999;
    display: flex;
    width: 205px;
    height: 251px;
  }

  .view-item>span {
    margin: auto;
  }

  .view-no-data {
    margin: auto;
  }

  /* 布局组件:end */

  /* 过滤列表:start */
  .demo {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    margin-bottom: 15px;
    min-height: 140px;
    height: auto !important;
    height: 140px;
  }

  .demo-warp {
    display: flex;
    max-width: 1200px;
    /*margin: auto;*/
    height: 100%;
    flex-direction: column;
    padding: 15px 0;
  }

  .demo-flex {
    display: flex;
    margin-bottom: 15px;
  }

  .demo-flex:last-of-type {
    margin-bottom: 0;
  }

  .demo-title {
    flex-basis: 70px;
    margin-top: 5px;
  }

  .demo-content {
    display: flex;
    flex: 1;
  }

  .demo-tab {
    flex: 1;
    margin-right: 15px;
    height: 35px;
    overflow: hidden;
  }

  .demo-tab span {
    display: inline-block;
    margin: 0 5px 15px 5px;
    cursor: pointer;
    padding: 5px 10px;
    color: #999999;
  }

  .demo-more {
    margin-top: 5px;
    cursor: pointer;
  }

  .demo-active {
    color: #00ab6e!important;
    border-radius: 3px;
    border: 1px solid #00ab6e;
  }

  .demo-tab span:hover {
    /*background-color: #09F;*/
    /*color: white;*/
    /*border-radius: 3px;*/
  }

  .demo-hide {
    min-height: 35px;
    height: auto !important;
  }
  #view{
    font-size:14px;
  }
</style>
