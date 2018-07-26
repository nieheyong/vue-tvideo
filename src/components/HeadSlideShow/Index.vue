<template>
  <a :href="activeItem.link" target="_blank" :style="{'background-image':'url('+ activeItem.img +')'}" class="head-slideShow">
    <div ref="sliderNav" class="slider-nav">
      <div @click.prevent="clickItem(item)" v-for="(item,index) in displayVideos" :key="index" class="nav-item" @mouseenter="hoverItem(index)" @mouseleave="mouseLeaveItem()" :class="{active:activeIndex===index}">
        <div class="name">{{item.name}}</div>
        <div class="desc">{{item.desc}}</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "HeadSlideShow",
  data() {
    return {
      activeIndex: 0,
      recommends: [
        {
          link: "https://v.qq.com/x/cover/9bpwhlgr1q7hmau/c0025pffuo8.html",
          img: "//puui.qpic.cn/tv/0/17141441_1680580/0",
          name: "回顾",
          desc: "2018浙江卫视跨年演唱会"
        },
        {
          link: "https://v.qq.com/x/cover/641dgjmod92qq07.html",
          img: "//img1.gtimg.com/v/pics/hv1/43/233/2255/146690833.jpg",
          name: "柒个我",
          desc: "张一山一人挑战七重性格"
        },
        {
          link: "https://v.qq.com/x/cover/eqlb7dqgi3cowez/t0025mttgj1.html",
          img: "//puui.qpic.cn/tv/0/17140881_1680580/0",
          name: "天籁之战",
          desc: "费玉清牵手张碧晨献唱"
        },
        {
          link: "https://v.qq.com/x/cover/cltmsz5k25rt04w.html",
          img: "//puui.qpic.cn/tv/0/16682466_1680580/0",
          name: "龙日一，你死定了",
          desc: "青春回忆杀！"
        },
        {
          link: "https://v.qq.com/x/cover/4xf4ni3vwii9kl1.html",
          img: "//img1.gtimg.com/v/pics/hv1/27/154/2257/146800722.jpg",
          name: "建军大业",
          desc: "全明星热血战争巨制"
        },
        {
          link: "https://v.qq.com/x/cover/v1bclez1csji5za.html",
          img: "//img1.gtimg.com/v/pics/hv1/231/107/2257/146788941.jpg",
          name: "大闹天竺",
          desc: "王宝强恶搞西游"
        },
        {
          link: "https://v.qq.com/x/cover/jb6wejrvi609u6f.html",
          img: "//img1.gtimg.com/tv/pics/hv1/182/74/2253/146520377.jpg",
          name: "花谢花飞花满天",
          desc: "何润东恋张馨予"
        },
        {
          link: "https://v.qq.com/x/cover/j18xzp93h4c1ofn.html",
          img: "//img1.gtimg.com/cartoon/pics/hv1/62/153/2257/146800502.jpg",
          name: "武庚纪2",
          desc: "商朝王子武庚逆袭记"
        },
        {
          link: "http://film.qq.com/film/p/topic/yyss2049/index.html",
          img: "//i.gtimg.cn/qqlive/images/20171227/i1514373918_1.jpg",
          name: "银翼杀手2049",
          desc: "最牛科幻大片"
        },
        {
          link: "https://v.qq.com/x/cover/4xf4ni3vwii9kl1.html",
          img: "//img1.gtimg.com/v/pics/hv1/27/154/2257/146800722.jpg",
          name: "建军大业",
          desc: "全明星热血战争巨制"
        },
        {
          link:
            "http://film.qq.com/film/p/topic/2017ydhd/index.html?ptag=v.focus",
          img: "//i.gtimg.cn/qqlive/images/20171229/i1514535464_1.jpg",
          name: "元旦特惠",
          desc: "VIP季卡45元"
        }
      ]
    };
  },
  computed: {
    activeItem: function() {
      return this.recommends[this.activeIndex];
    },
    displayCount: function() {
      let count = 7;
      let appRightWidth = this.$store.state.appRightWidth;
      if (appRightWidth > 1000) {
        ++count;
      }
      if (appRightWidth > 1100) {
        ++count;
      }
      if (appRightWidth > 1200) {
        ++count;
      }
      if (appRightWidth > 1300) {
        ++count;
      }
      return count;
    },
    displayVideos: function() {
      return this.recommends.slice(0, this.displayCount);
    }
  },
  methods: {
    clickItem: function(item) {
      window.open(item.link);
    },
    hoverItem: function(index) {
      this.activeIndex = index;
      this.userHover = true;
    },
    mouseLeaveItem: function() {
      this.userHover = false;
    }
  },
  mounted() {
    let self = this;
    this.sliderInterval = window.setInterval(() => {
      if (!self.userHover) {
        self.activeIndex++;
        if (self.activeIndex >= self.displayCount) {
          self.activeIndex = 0;
        }
      }
    }, 3000);
  },
  beforeDestroy() {
    window.clearInterval(this.sliderInterval);
  }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>