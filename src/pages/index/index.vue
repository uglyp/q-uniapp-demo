<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <view class="text-center text-4xl main-title-color mt-4 test-unocss-apply">q-uniapp</view>
    <view class="text-center text-2xl mt-2 mb-8">uniapp 开发框架</view>
    <view class="text-justify max-w-100 m-auto text-4 indent mb-2">{{ description }}</view>
    <view class="mt-8 text-center">
      <text class="text-green-400">在线文档：</text>
      <!-- #ifndef H5 -->
      https://uglyp.github.io/q-uniapp-docs/
      <!-- #endif -->
      <!-- #ifdef H5 -->
      <a href="https://uglyp.github.io/q-uniapp-docs/" target="_blank">
        https://uglyp.github.io/q-uniapp-docs/
      </a>
      <!-- #endif -->
    </view>
    <view class="mt-4 text-center">
      <text class="text-green-400">在线预览：</text>
      <!-- #ifndef H5 -->
      https://uglyp.github.io/q-uniapp-demo/
      <!-- #endif -->
      <!-- #ifdef H5 -->
      <a href="https://uglyp.github.io/q-uniapp-demo/" target="_blank">
        https://uglyp.github.io/q-uniapp-demo/
      </a>
      <!-- #endif -->
    </view>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const author = ref('uglyp')
const description = ref(
  'q-uniapp 是一个集成了多种工具和技术的 uniapp 开发模板，由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI + VSCode 构建，模板具有代码提示、自动格式化、统一配置、代码片段等功能，并内置了许多常用的基本组件和基本功能。',
)

onLoad(() => {
  console.log(author)
})

/** 激活“分享给好友” */
onShareAppMessage((options: Page.ShareAppMessageOption): Page.CustomShareContent => {
  console.log('options:', options)
  return {
    title: 'q-uniapp',
    desc: 'q-uniapp 演示示例',
    path: '/pages/index/index?id=xxx',
  }
})
</script>

<style>
.main-title-color {
  color: #d14328;
}

.test-unocss-apply {
  @apply m-4;
}
</style>
