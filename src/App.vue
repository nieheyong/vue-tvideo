<template>
  <div id="app">
    <SideNavbar />
    <div class="side-nav-padding"></div>
    <div class="app-right-container">
      <div ref="rightBox" class="app-right">
        <Topbar></Topbar>
        <router-view class="router-view"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from '@/components/SideNavBar/Index'
import Topbar from '@/components/TopBar/Index'
import { throttle } from './common/utils'

export default {
  name: 'app',
  components: {
    SideNavbar,
    Topbar
  },
  mounted() {
    var self = this
    var getAppRightWidth = function() {
      var width = window.getComputedStyle(self.$refs.rightBox)['width']
      self.$store.commit('updateAppRightWidth', Number.parseInt(width, 10))
    }
    window.addEventListener('resize', throttle(getAppRightWidth, 300))
    getAppRightWidth()
  }
}
</script>

<style lang="scss" scoped>
@import './scss/variables.scss';
#app {
  height: 100%;
  min-width: $app-min-width;
  display: flex;
  flex-direction: row;
}

.app-right-container {
  background: $main-background;
  border-top-left-radius: 4px;
  flex: 1;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  overflow-y: hidden;
}
.app-right {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.router-view {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
}
</style>
<style src="./scss/site.scss" lang="scss"></style>
