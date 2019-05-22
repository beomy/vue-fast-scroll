const Vue = require('vue/dist/vue')
const VueFastScroll = require('../../dist/js/vue-fast-scroll')
Vue.use(VueFastScroll)

describe('VueFastScroll', () => {
  describe('installing plugin', () => {
    it('load component', () => {
      expect(typeof Vue.options.components['fastScroll']).toEqual('function')
    })
  })

  describe('check init props', () => {
    const vm = new Vue({
      template: `
        <fast-scroll ref="fastScroll" :key-list="fastScrollKeyList" :options="options">
          <ul slot="scrollList">
            <li :fast-scroll-key="'ㄱ'">가1</li>
          </ul>
        </fast-scroll>`,
      data () {
        return {
          options: {
            toggleDurationTime: 500,
            paddingScroll: 0
          },
          fastScrollKeyList: [
            { key: 'ㄱ', text: 'ㄱ' },
            { key: 'ㄴ', text: 'ㄴ' },
            { key: 'ㄷ', text: 'ㄷ' },
            { key: 'ㄹ', text: 'ㄹ' },
            { key: 'ㅁ', text: 'ㅁ' },
            { key: 'ㅂ', text: 'ㅂ' },
            { key: 'ㅅ', text: 'ㅅ' },
            { key: 'ㅇ', text: 'ㅇ' },
            { key: 'ㅈ', text: 'ㅈ' },
            { key: 'ㅊ', text: 'ㅊ' },
            { key: 'ㅋ', text: 'ㅋ' },
            { key: 'ㅌ', text: 'ㅌ' },
            { key: 'ㅍ', text: 'ㅍ' },
            { key: 'ㅎ', text: 'ㅎ' }
          ]
        }
      }
    }).$mount()

    it('init options', () => {
      expect(vm.$refs.fastScroll.$props.options).toEqual({
        toggleDurationTime: 500,
        paddingScroll: 0
      })
    })

    it('init keyList', () => {
      expect(vm.$refs.fastScroll.$props.keyList).toEqual([
        { key: 'ㄱ', text: 'ㄱ' },
        { key: 'ㄴ', text: 'ㄴ' },
        { key: 'ㄷ', text: 'ㄷ' },
        { key: 'ㄹ', text: 'ㄹ' },
        { key: 'ㅁ', text: 'ㅁ' },
        { key: 'ㅂ', text: 'ㅂ' },
        { key: 'ㅅ', text: 'ㅅ' },
        { key: 'ㅇ', text: 'ㅇ' },
        { key: 'ㅈ', text: 'ㅈ' },
        { key: 'ㅊ', text: 'ㅊ' },
        { key: 'ㅋ', text: 'ㅋ' },
        { key: 'ㅌ', text: 'ㅌ' },
        { key: 'ㅍ', text: 'ㅍ' },
        { key: 'ㅎ', text: 'ㅎ' }
      ])
    })
  })

  describe('change scroll item', () => {
    const vm = new Vue({
      template: `
        <fast-scroll ref="fastScroll" :key-list="fastScrollKeyList" :options="options">
          <ul slot="scrollList">
            <li v-for="(item, idx) in scrollList" :fast-scroll-key="item.key">{{ item.content }}</li>
          </ul>
        </fast-scroll>`,
      data () {
        return {
          scrollList: [
            { key: 'ㄱ', content: '가1' },
            { key: 'ㄴ', content: '나1' }
          ],
          options: {
            toggleDurationTime: 500,
            paddingScroll: 0
          },
          fastScrollKeyList: [
            { key: 'ㄱ', text: 'ㄱ' },
            { key: 'ㄴ', text: 'ㄴ' },
            { key: 'ㄷ', text: 'ㄷ' },
            { key: 'ㄹ', text: 'ㄹ' },
            { key: 'ㅁ', text: 'ㅁ' },
            { key: 'ㅂ', text: 'ㅂ' },
            { key: 'ㅅ', text: 'ㅅ' },
            { key: 'ㅇ', text: 'ㅇ' },
            { key: 'ㅈ', text: 'ㅈ' },
            { key: 'ㅊ', text: 'ㅊ' },
            { key: 'ㅋ', text: 'ㅋ' },
            { key: 'ㅌ', text: 'ㅌ' },
            { key: 'ㅍ', text: 'ㅍ' },
            { key: 'ㅎ', text: 'ㅎ' }
          ]
        }
      },
      methods: {
        addItem (key, content) {
          this.scrollList.push({
            key, content
          })
        },
        removeItem (idx) {
          const pos = this.scrollList.findIndex((val, index) => idx === index)
          this.scrollList.splice(pos, 1)
        }
      }
    }).$mount()

    it('add item', done => {
      vm.addItem('ㄷ', '다1')
      Vue.nextTick(() => {
        const elList = [...vm.$refs.fastScroll.$el.children[0].children[0].children].map(x => {
          const key = x.getAttribute('fast-scroll-key')
          const content = x.textContent
          return {
            key,
            content
          }
        })
        const receiveInfo = [
          { key: 'ㄱ', content: '가1' },
          { key: 'ㄴ', content: '나1' },
          { key: 'ㄷ', content: '다1' }
        ]
        expect(vm.$data.scrollList).toEqual(receiveInfo)
        expect(elList).toEqual(receiveInfo)
        done()
      })
    })

    it('remove item', done => {
      vm.removeItem(1)
      Vue.nextTick(() => {
        const elList = [...vm.$refs.fastScroll.$el.children[0].children[0].children].map(x => {
          const key = x.getAttribute('fast-scroll-key')
          const content = x.textContent
          return {
            key,
            content
          }
        })
        const receiveInfo = [
          { key: 'ㄱ', content: '가1' },
          { key: 'ㄷ', content: '다1' }
        ]
        expect(vm.$data.scrollList).toEqual(receiveInfo)
        expect(elList).toEqual(receiveInfo)
        done()
      })
    })
  })
})
