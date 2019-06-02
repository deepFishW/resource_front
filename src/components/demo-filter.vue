<template>
  <div class="demo">
    <div class="demo-warp">
      <div class="demo-flex" v-for="(v,k) in getList" :key="k">
        <span class="demo-title">{{v.title}}</span>
        <div class="demo-content">
          <div class="demo-tab" :class="isShow ? 'demo-hide' : ''">
							<span v-for="(val, key) in v.childer" :key="key"
                    :class="{'demo-active': val.active}"
                    @click="tabClick(val,key,k)">{{val.value}}</span>
          </div>
        </div>
        <div class="demo-more" @click="isShow = !isShow" v-if="v.childer.length >= 14">更多</div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default{
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
