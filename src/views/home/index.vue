<template>
  <div class="app-home-container">
    <!-- header -->
    <div class="app-head-container">header</div>
    <!-- content -->
    <main >
      <div class="app-menu-container">menu-left</div>
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
import { reactive, onMounted, provide } from 'vue';
import { fabric } from 'fabric';
import Editor, { 
  AlignGuidLinePlugin, 
  ControlsPlugin, 
  ControlsRotatePlugin, 
  WorkspacePlugin 
} from '@/core'
// 创建编辑器
const canvasEditor = new Editor();
console.log(canvasEditor, 'canvasEditor')
const state = reactive({
  menuActive: 1,
  show: false,
  toolsBarShow: true,
  attrBarShow: true,
  select: null,
  ruler: false,
});
onMounted(() => {
  // 初始化fabric
  const canvas = new fabric.Canvas('canvas', {
    fireRightClick: true, // 启用右键，button的数字为3
    stopContextMenu: true, // 禁止默认右键菜单
    controlsAboveOverlay: true, // 超出clipPath后仍然展示控制条
  });

  // 初始化编辑器
  canvasEditor.init(canvas);
  canvasEditor.use(AlignGuidLinePlugin);
  canvasEditor.use(ControlsPlugin);
  canvasEditor.use(ControlsRotatePlugin);
  canvasEditor.use(WorkspacePlugin);
  state.show = true;

  provide('canvasEditor', canvasEditor);
});
</script>
<style lang="less" scoped>
.app-home-container {
  height: 100vh;

  .app-head-container {
    height: 50px;
    width: 100%;
    background: yellow;
  }
  .app-menu-container {
    width: 380px;
    height: 100%;
    background: blue;
    display: flex;
    position: relative;
  }
  > main {
    display: flex;
    width: 100%;
    height: calc(100% - 50px);
  }

  .canvas-box {
  position: relative;
}
  // 画布内阴影
  // .inside-shadow {
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   box-shadow: inset 0 0 9px 2px #0000001f;
  //   z-index: 2;
  //   pointer-events: none;
  // }

  #canvas {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }

  #workspace {
    flex: 1;
    width: 100%; 
    position: relative; 
    background: #f1f1f1;
    overflow: hidden;
  }
}
</style>