<template>
  <div class="common-page">
    <TopLoading :isLoading="loading"> </TopLoading>
    <div :style="{width:$store.getters.contentWidth+'px'}" class="container">
      <section class="filter-container">
        <div class="filterleft" :class="{'expand':expandFilter}">
          <SelectPiece name="类型" :options="types" @change="typeChange"></SelectPiece>
          <SelectPiece name="地区" :options="regions" @change="regionChange"></SelectPiece>
          <SelectPiece name="年份" :options="years" @change="yearChange"></SelectPiece>
          <SelectPiece name="自费" :options="feeTypes" @change="feeTypeChange"></SelectPiece>
        </div>
        <div class="filterright">
          <span @click="expandFilter=!expandFilter" :class="{'active':expandFilter}" class="expand-filter">
            <span v-show="expandFilter">收起选项</span>
            <span v-show="!expandFilter">展开选项</span>
            <i class="material-icons">expand_more</i>
          </span>
        </div>
      </section>

      <div class="devider"></div>
      <section class="top-bar">
        <div class="left">
          <span class="piece active">最新</span>
          <span class="piece">最热</span>
          <span class="piece">好评</span>
        </div>
        <div class="right">
          共
          <span class="number">5000</span>
          条筛选结果 1/56
        </div>
      </section>
      <section class="videos-container">
        <VideoCard v-for="(video,index) in videos" :key="index" :video-info="video"></VideoCard>
      </section>
    </div>
  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard/Index'
import SelectPiece from '@/components/SelectPiece/Index'
import TopLoading from '@/components/TopLoading/Index'

import getVideos from '@/common/api'
export default {
  name: 'CommonPage',
  data() {
    return {
      msg: 'common page',
      expandFilter: false,
      loading: false,
      types: [
        '全部',
        '院线',
        '剧情',
        '喜剧',
        '动作',
        '爱情',
        '犯罪',
        '冒险',
        '战争',
        '惊悚',
        '悬疑',
        '恐怖',
        '科幻',
        '奇幻',
        '家庭',
        '动画',
        '音乐',
        '歌舞',
        '历史',
        '传记',
        '武侠',
        '伦理',
        '纪录',
        '独播'
      ],
      regions: [
        '全部',
        '内地',
        '香港',
        '美国',
        '欧洲',
        '韩国',
        '日本',
        '台湾',
        '泰国',
        '印度',
        '其他'
      ],
      years: [
        '全部',
        '2017',
        '2016',
        '2015',
        '2014',
        '2013-2011',
        '2010-2006',
        '2005-2000',
        '90年代',
        '80年代',
        '其他'
      ],
      feeTypes: ['全部', '免费', '会员'],
      videos: []
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.updateVideos()
    next()
  },
  methods: {
    updateVideos: function() {
      let self = this
      self.loading = true
      getVideos(100).then(function(res) {
        self.videos = res
        self.loading = false
      })
    },
    typeChange: function(value) {
      this.updateVideos()
    },
    feeTypeChange: function(value) {
      this.updateVideos()
    },
    regionChange: function(value) {
      this.updateVideos()
    },
    yearChange: function(value) {
      this.updateVideos()
    }
  },
  components: {
    TopLoading,
    VideoCard,
    SelectPiece
  },
  mounted() {
    this.updateVideos()
    console.log(this.$router)
  }
}
</script>
<style  src="./Index.scss" lang="scss"></style>
