<template>
  <div class="video-card-container">
    <div @click="showDetail=true" @mouseenter="showDetail=true" @mouseleave="showDetail=false" :style="backgroundImage" class="video-card">
      <span v-show="!showDetail&&videoInfo.isVip" class="vip">VIP</span>
      <!-- <div class="video-detail"> -->
      <div v-if="showDetail" class="video-detail">
        <!-- <video autoplay loop muted :src="videoInfo.shortVideos"></video> -->
        <div class="video-detail-ft">
          <div class="score">{{videoInfo.score}}</div>
          <div class="video-name">
            {{videoInfo.name}}
          </div>
          <div class="video-tag">
            <div class="category">
              {{videoInfo.categories[0]}} | {{videoInfo.categories[1]}}
            </div>
            <div class="actors">
              <span v-for="actor in videoInfo.actors" :key="actor">{{actor}}</span>
            </div>
          </div>
          <div class="comment-user"> {{videoInfo.comment.userName}} :</div>
          <div class="comment">
            {{videoInfo.comment.comment}}
          </div>
          <div class="button-container">
            <div class="left-button">
              <i class="material-icons icon-button">favorite_border</i>
            </div>
            <div class="devider">
            </div>
            <div class="left-button">
              <a :href="videoInfo.link" target="_blank">
                <i class="material-icons icon-button">play_circle_outline</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="figure-detail">
      <div class="score">{{videoInfo.score}}</div>
      <div class="name">{{videoInfo.name}}</div>
      <div class="desc">{{videoInfo.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoCard',
  data() {
    return {
      showDetail: false
    }
  },
  computed: {
    backgroundImage: function() {
      return { 'background-image': 'url(' + this.videoInfo.coverImg + ')' }
      // return this.showDetail
      //   ? {}
      //   : { 'background-image': 'url(' + this.videoInfo.coverImg + ')' }
    }
  },
  props: ['videoInfo']
}
</script>
<style src="./index.scss" lang="scss" scoped></style>
