<template>
  <div class="select-piece">
    <span class="name">{{name}}</span>
    <span class="maohao">:</span>
    <div class="piece-container">
      <span class="items" @click="select(option,index)" :class="{active:index===activeIndex}" v-for="(option,index) in options" :key="index">{{option}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectPiece',
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    select: function(option, index) {
      this.activeIndex = index
      this.$emit('change', option)
    }
  },
  props: ['options', 'name']
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
