const getters = {
  isShows (state) { // 方法名随意，主要是来承载变化的show的值
    return state.show
  },
  getchangableNum () { // 方法名随意用来承载变化的changableNum的值
    return state.changableNum
  }
}
export default getters
