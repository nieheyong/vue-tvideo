<template>
  <div class="side-navbar">
    <div class="nav-box">
      <div :style="{transform:'translateY('+ (34 * activeIndex +11) +'px)'}" class="nav-slider"></div>
      <div v-for="(item, index) in navbarItems" :key="item" class="nav-item">
        <div @click="menuClicked(item,index)" :class="{'selected':index==activeIndex}" class="nav-item-text">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNavbar",
  data() {
    return {
      navbarItems: [
        "精选",
        "电视剧",
        "电影",
        "VIP会员",
        "综艺",
        "动漫",
        "音乐",
        "纪录片",
        "微电影",
        "体育",
        "NBA"
      ],
      activeIndex: 0
    };
  },
  watch: {
    $route(to, from) {
      this.updateActiveIndex(to);
    }
  },
  mounted() {
    this.updateActiveIndex(this.$route);
  },
  beforeRouteUpdate(to) {
    this.updateActiveIndex(to);
  },
  methods: {
    updateActiveIndex: function(route) {
      if (route.name == "home") {
        this.activeIndex = 0;
      } else if (route.name == "category") {
        this.activeIndex = this.navbarItems.indexOf(route.params.categoryName);
      }
    },
    menuClicked: function(item, index) {
      if (item == "精选") {
        this.$router.push("/");
      } else {
        this.$router.push({ name: "category", params: { categoryName: item } });
      }
    }
  }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>

