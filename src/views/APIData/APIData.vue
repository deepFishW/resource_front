<template>
  <div>
    云接口页面
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        isShow: false
      }
    },
    props: {
      getList: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      tabClick(data, key, k) {
        // 添加 active ==> true 显示 `active样式`
        this.getList[k].childer.map(item => {
          item.active = false
        })
        this.getList[k].childer[key].active = true

        // 选中的数据
        let newArray = []
        this.getList.map(data => {
          data.childer.map(item => {
            if (item.active == true) {
              newArray.push(item)
            }
          })
        })
        this.$emit('get-sel-data', newArray)
        this.$emit('set-time', 0, 1000, true)
      }
    }
  }
</script>
<style rel="stylesheet">

</style>
