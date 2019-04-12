import FastScroll from './FastScroll.vue'

const install = function (Vue, globalOptions) {
  Vue.component(FastScroll.name, FastScroll)
}
const VueFastScroll = { install }

export default VueFastScroll
export { install }