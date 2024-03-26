<template>
  <div class="app-home-container">
    <!-- header -->

    <!-- content -->
    <main>
      <!-- 画布区域 -->
      <div id="workspace">
        <div class="canvas-box">
          <div class="inside-shadow"></div>
          <canvas id="canvas" :class="state.ruler ? 'design-stage-grid' : ''"></canvas>
        </div>
      </div>
    </main>
  </div>
</template>
<script name="Home" setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
  menuActive: 1,
  show: false,
  toolsBarShow: true,
  attrBarShow: true,
  select: null,
  ruler: false,
});
</script>
<style lang="less" scoped>
.app-home-container {
  height: 100vh;

  > main {
    width: 100%;
    height: 100%;
  }
}
</style>