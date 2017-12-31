<template>
  <div class="home-page">
    <TopLoading :isLoading="loading"></TopLoading>
    <HeadSlideShow></HeadSlideShow>
    <div :style="{width:$store.getters.contentWidth+'px'}" class="main-container">
      <section v-for="(category,index) in categorys" :key="index" class="category-box">
        <span class="category-name">{{category.name}}</span>
        <div class="content">
          <VideoCard v-for="(video,index) in category.videos" :key="index" v-if="index<$store.getters.videoColumns" :video-info="video"></VideoCard>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TopLoading from "@/components/TopLoading";
import HeadSlideShow from "@/components/HeadSlideShow";
import VideoCard from "@/components/VideoCard";
import getVideos from "@/api";
export default {
  name: "Home",
  data() {
    return {
      categorys: [],
      loading: false
    };
  },
  components: { TopLoading, HeadSlideShow, VideoCard },
  mounted() {
    let self = this;
    let categoryNames = ["电影大片", "电视剧", "动漫", "音乐", "微电影"];
    let promiseList = categoryNames.map(function() {
      return getVideos(20);
    });
    self.loading = true;
    Promise.all(promiseList).then(function(res) {
      self.loading = false;
      categoryNames.forEach((name, i) => {
        self.categorys.push({
          name: name,
          videos: res[i]
        });
      });
    });
  }
};
</script>
<style scoped  src="./Index.scss" lang="scss"></style>
