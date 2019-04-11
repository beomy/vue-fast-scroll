<template>
  <div ref="fastWrapper">
    <slot name="fastScrollItems"></slot>
    <div class="side_indexer">
      <ul ref="keyList"
        @touchmove.prevent.stop="scrollToSearch">
        <li v-for="(item, i) of keyList"
          :key="i"
          :fast-scroll-index="i"
          @click="scrollToSearch">{{ item.text }}</li>
      </ul>
    </div>
    <transition name="fade">
        <div v-if="fastScrollToggle" class="fastScrollToggle">{{ findKey }}</div>
    </transition>
  </div>
</template>

<script>
export default {
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
      if (this.fastScrollIndex[this.keyList[this.keyList.length - 1].key] === 0) {
        this.setFastScrollIndex()
      }

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
            window.scrollTo(0, window.scrollY - dom.clientHeight)
          }
        } catch (e) {
          console.log(e)
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
<!--<style scoped>
  .fastScrollToggle {
    position: fixed;
    top: 45%;
    left: 45%;
    background-color: #2a2b31;
    color: #fff;
    opacity: 0.7;
    border-radius: 60px;
    font-size: 40px;
    width: 60px;
    height: 60px;
    padding-left: 11px;
  }
  .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>-->
