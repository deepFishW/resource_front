<template>
  <div class="view-warp">
    <div class="view-box" v-if="!viewTime.time">
      <div class="view-flex" v-for="(v,k) in viewData" :key="k" :style="style">
        <div class="view-item">
          <span>{{v.title}}</span>
        </div>
      </div>
    </div>
    <div class="view-no-data" v-else>{{viewTime.msg}}</div>
  </div>
</template>
<script type="text/javascript">
export default{
  props: {
    viewData: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: "25%"
    },
    height: {
      type: String,
      default: "300px"
    },
    viewTime: {
      type: Object,
      default: {
        time: true,
        msg: '数据加载中...'
      }
    }
  },
  computed: {
    style() {
      return {
        width: `${this.width.replace(/%+/, '')}%`,
        height: `${this.height.replace(/px+/, '')}px`
      }
    }
  }
}
</script>
<style rel="stylesheet">

</style>
