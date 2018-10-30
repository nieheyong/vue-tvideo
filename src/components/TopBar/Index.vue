<template>
  <div class="top-bar">
    <div class="logo-container">
      <a href="https://v.qq.com/" target="_blank" class="logo"></a>
    </div>
    <div class="search-container">
      <div class="search-box">
        <input @focus="showSeachHelper=true" @blur="showSeachHelper=false" type="text" class="search-input" placeholder="敦刻尔克">
        <a target="_blank" href="https://v.qq.com/x/hotlist/search">
          <i class="material-icons hot">equalizer</i>
        </a>
        <button type="button" class="search-btn">
          <i class="material-icons search-icon ">search</i>
          全网搜
        </button>
      </div>
      <div v-if="showSeachHelper" class="seach-helper-container">
        <div class="recent-search">
          <div class="s-title">最近搜索
            <i class="material-icons delete-icon">delete</i>
          </div>
          <div class="recent-search-box">
            <div class="hs-item" v-for="name in recentSearchs" :key="name">
              {{name}}
            </div>
          </div>
        </div>
        <div class="s-title">热门搜索</div>
        <div class="hs-item" v-for="(name,index) in hotSearchs" :key="name">
          <span class="index-num" :class="{top1:index===0,top2:index===1,top3:index===2}"> {{index+1}}. </span>
          {{name}}
        </div>
      </div>
    </div>
    <div class="tool-container">
      <div>
        <i class="material-icons icon-button">replay</i>
        <i class="material-icons icon-button">query_builder</i>
        <i class="material-icons icon-button">favorite_border</i>
        <i class="material-icons icon-button">get_app</i>
      </div>
      <a class="user-pic" target="_blank_" href="https://github.com/nieheyong/vue-tvideo">
        <svg height="24" width="24" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data() {
    return {
      showSeachHelper: false,
      hotSearchs: [
        '柒个我',
        '羞羞的铁拳',
        '极光之恋',
        '致我们单纯的小美好',
        '熊出没之探险日记',
        '花谢花飞花满天',
        '龙日一你死定了'
      ],
      recentSearchs: [
        '柒个我',
        '羞羞的铁拳',
        '极光之恋',
        '龙日一你死定了',
        '熊出没之探险日记'
      ]
    }
  }
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
