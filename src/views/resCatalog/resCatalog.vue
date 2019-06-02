<template>
  <div>
    <section id="view" clock>
      <demo-filter :get-list="filterList" @get-sel-data="getFilterSelData" @set-time="setTime"></demo-filter>
      <view-layout :view-data="viewList" width="25%" height="300px" :view-time="viewTime"></view-layout>
      <pre>
   			选中的数据：{{this.filterSelData}}
   		</pre>
    </section>
  </div>
</template>
<script>
  import axios from 'axios'
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
          "list": [{
            "title": "11"
          },
            {
              "title": "22"
            },
            {
              "title": "33"
            },
            {
              "title": "44"
            },
            {
              "title": "55"
            },
            {
              "title": "66"
            }
          ]
        },
        demo3:{
          "list": [{
            "title": "分类：",
            "childer": [{
              "value": "全部",
              "active": true
            },
              {
                "value": "漂浮素材",
                "active": false
              },
              {
                "value": "效果元素",
                "active": false
              },
              {
                "value": "卡通手绘",
                "active": false
              },
              {
                "value": "装饰图案",
                "active": false
              },
              {
                "value": "图标元素",
                "active": false
              },
              {
                "value": "促销标签",
                "active": false
              },
              {
                "value": "边框纹理",
                "active": false
              },
              {
                "value": "不规则图形",
                "active": false
              },
              {
                "value": "表情包213123",
                "active": false
              },
              {
                "value": "表情包2323",
                "active": false
              },
              {
                "value": "表情包1111",
                "active": false
              },
              {
                "value": "表情包3333",
                "active": false
              },
              {
                "value": "表情包444",
                "active": false
              }
            ]
          },
            {
              "title": "格式：",
              "childer": [{
                "value": "全部",
                "active": true
              },
                {
                  "value": "PSD",
                  "active": false
                },
                {
                  "value": "AI",
                  "active": false
                },
                {
                  "value": "EPS",
                  "active": false
                }
              ]
            },
            {
              "title": "排序：",
              "childer": [{
                "value": "推荐",
                "active": true
              },
                {
                  "value": "昨日热门",
                  "active": false
                },
                {
                  "value": "最新上传",
                  "active": false
                },
                {
                  "value": "热门下载",
                  "active": false
                },
                {
                  "value": "热门收藏",
                  "active": false
                }
              ]
            }
          ]
        }
      }

    },
    created() {


      // 请求数据
      this.setRequest(this.demo2, this.param, 'get').then(res => {
        this.viewList = [...res.list]
        return this.setRequest(this.demo3, this.param, 'get')
      }).then(res => {
        this.filterList = [...res.list]
      })

    },
    mounted() {
      this.setTime(1000, 0, false)
    },
    methods: {
      // 封装 axios
      setRequest(url, data = {}, method = 'get') {
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
      },

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
    overflow: auto;
    width: 1220px;
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
    height: 100%;
    border: 1px solid red;
    display: flex;
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
    margin: auto;
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
    background-color: #09F;
    color: white !important;
    border-radius: 3px;
  }

  .demo-tab span:hover {
    background-color: #09F;
    color: white;
    border-radius: 3px;
  }

  .demo-hide {
    min-height: 35px;
    height: auto !important;
  }
</style>
