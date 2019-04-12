<template>
  <div ref="fastWrapper">
    <slot name="fastScrollItems"></slot>
    <div class="side-indexer">
      <ul ref="keyList"
        @touchmove.prevent.stop="scrollToSearch">
        <li v-for="(item, i) of keyList"
          :key="i"
          :fast-scroll-index="i"
          @click="scrollToSearch">{{ item.text }}</li>
      </ul>
    </div>
    <transition name="fade">
        <div v-if="fastScrollToggle" class="fast-scroll-toggle">{{ findKey }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'fastScroll',
  props: {
    keyList: {
      type: Array,
      default () {
        return [
          {key: 'ㄱ', text: 'ㄱ'},
          {key: 'ㄴ', text: 'ㄴ'},
          {key: 'ㄷ', text: 'ㄷ'},
          {key: 'ㄹ', text: 'ㄹ'},
          {key: 'ㅁ', text: 'ㅁ'},
          {key: 'ㅂ', text: 'ㅂ'},
          {key: 'ㅅ', text: 'ㅅ'},
          {key: 'ㅇ', text: 'ㅇ'},
          {key: 'ㅈ', text: 'ㅈ'},
          {key: 'ㅊ', text: 'ㅊ'},
          {key: 'ㅋ', text: 'ㅋ'},
          {key: 'ㅌ', text: 'ㅌ'},
          {key: 'ㅍ', text: 'ㅍ'},
          {key: 'ㅎ', text: 'ㅎ'}
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

  watch: {
    findKey () {
      clearTimeout(this.fastScrollToggleId)
      this.fastScrollToggle = true
      this.fastScrollToggleId = setTimeout((x) => {
        this.fastScrollToggle = false
      }, 500)
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.setFastScrollIndex()
    })
  },

  methods: {
    scrollToSearch (e) {
      this.setFastScrollIndex()

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
          const dom = this.$refs.fastWrapper.querySelector(`[fast-key=${this.findKey}]`)
          if (dom) {
            dom.scrollIntoView()
          }
        } catch (e) {
          console.error(e)
        }
      }
    },

    setFastScrollIndex () {
      for (const item of this.keyList) {
        const index = this.keyList.indexOf(item)
        const clientReact = this.$refs.keyList.querySelector(`[fast-scroll-index="${index}"]`).getBoundingClientRect()
        this.fastScrollIndex[item.key] = clientReact.y + clientReact.height
      }
    }
  }
}
</script>
