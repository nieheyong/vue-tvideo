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
      <div class="user-pic">
        <i class="material-icons md-icon-30">account_circle</i>
      </div>
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
      recentSearchs: ['柒个我', '羞羞的铁拳', '极光之恋', '龙日一你死定了', '熊出没之探险日记']
    }
  }
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
