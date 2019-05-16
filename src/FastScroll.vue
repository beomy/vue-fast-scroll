<template>
  <div>
    <div class="scroll-list" ref="scrollList">
      <slot name="scrollList"></slot>
    </div>
    <div class="index-list" ref="indexList">
      <ul @touchmove.prevent.stop="scrollToSearch">
        <li v-for="(item, i) of keyList"
          :key="i"
          :fast-scroll-key="item.key"
          @click="scrollToSearch">{{ item.text }}</li>
      </ul>
    </div>
    <transition name="fade">
        <div v-if="fastScrollToggle" class="fast-scroll-toggle">{{ findKey }}</div>
    </transition>
  </div>
</template>

<script>
const OPTIONS = {
  toggleDurationTime: 500,
  paddingScroll: 0
}

export default {
  name: 'fastScroll',
  props: {
    options: {
      type: Object,
      default () {
        return OPTIONS
      }
    },
    keyList: {
      type: Array,
      default () {
        return [
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
  },

  data () {
    return {
      findKey: '',
      fastScrollToggle: false,
      fastScrollToggleId: null,
      fastScrollIndex: {}
    }
  },

  computed: {
    mergedOptions () {
      return Object.assign({}, OPTIONS, this.options)
    }
  },

  watch: {
    findKey () {
      clearTimeout(this.fastScrollToggleId)
      this.fastScrollToggle = true
      this.fastScrollToggleId = setTimeout((x) => {
        this.fastScrollToggle = false
      }, this.mergedOptions.toggleDurationTime)
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.setFastScrollIndex()
    })
  },

  methods: {
    scrollToSearch (e) {
      const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY
      for (const key in this.fastScrollIndex) {
        const value = this.fastScrollIndex[key]
        if (value > clientY) {
          this.findKey = key
          break
        }
      }

      if (this.findKey !== '') {
        try {
          const dom = this.$refs.scrollList.querySelector(`[fast-scroll-key=${this.findKey}]`)
          if (dom) {
            dom.scrollIntoView()
            window.scrollTo(0, window.scrollY - this.mergedOptions.paddingScroll)
          }
        } catch (e) {
          console.error(e)
        }
      }
    },

    setFastScrollIndex () {
      for (const item of this.keyList) {
        const clientReact = this.$refs.indexList.querySelector(`[fast-scroll-key="${item.key}"]`).getBoundingClientRect()
        this.fastScrollIndex[item.key] = clientReact.y + clientReact.height
      }
    }
  }
}
</script>
