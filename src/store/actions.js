// 实现异步调用修改参数值方法
const actions = {
  hide (context) {
    context.commit('hide')
  },
  show (context) {
    context.commit('show')
  },
  getNewNum (context, num) {
    context.commit('newNum', num)
  }
}

export default actions
