<template>
  <div :style="{width:$store.state.appRightWidth+'px'}" class="top-loading-container " :class="{active:showLoading}">
    <span v-show="isLoading">
      <span class="loading-icon">
        <i class="material-icons fa-spin">data_usage</i>
      </span> 正在努力加载中...</span>
    <span v-show="!isLoading"> 已为您更新了最新内容</span>
  </div>
</template>

<script>
export default {
  name: "TopLoading",
  data() {
    return {
      showLoading: false
    };
  },
  watch: {
    isLoading(newVal, oldVal) {
      if (newVal) {
        this.timeOut && window.clearTimeout(this.timeOut);
        this.showLoading = true;
      } else {
        this.timeOut = window.setTimeout(
          () => (this.showLoading = false),
          1000
        );
      }
    }
  },
  props: ["isLoading"]
};
</script>
<style src="./index.scss" lang="scss" scoped></style>

