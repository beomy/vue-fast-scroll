import FastScroll from './FastScroll.vue'

const fastScroll = FastScroll
const install = function (Vue, globalOptions) {
  Vue.component(FastScroll.name, FastScroll)
}
const VueFastScroll = { install, fastScroll }

export default VueFastScroll
export { install, fastScroll }