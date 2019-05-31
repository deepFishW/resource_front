// 修改state中的参数方法
const mutations = {
  show (state) { // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.show = true
  },
  hide (state) { // 同上
    state.show = false
  },
  newNum (state, sum) { // 这里面的参数除了state之外还传了需要增加的值sum
    state.changableNum += sum
  }
}

export default mutations
