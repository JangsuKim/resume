<template>
  <div class="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
    <!-- A4 카드 -->
    <div class="relative w-full max-w-[820px] bg-white border border-gray-300 shadow-sm rounded-md p-10 pt-16">
      <!-- 카드 좌측 상단 돌아가기 버튼 -->
      <RouterLink
        to="/"
        class="absolute left-6 top-6 flex items-center gap-1 text-blue-600 hover:text-gray-900 transition-colors"
      >
        <span class="text-lg">←</span>
        <span class="text-sm font-medium">履歴書に戻る</span>
      </RouterLink>

      <!-- 제목 -->
      <header class="text-center">
        <h1 class="text-3xl font-extrabold tracking-wider">職務経歴書</h1>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CareerPage'
});
</script>
