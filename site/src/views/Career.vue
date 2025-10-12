<template>
  <!-- 바깥 래퍼: 가로 스크롤 허용 -->
  <div class="min-h-screen bg-gray-100 flex justify-center py-10 px-4 overflow-x-auto">
    <!-- A4 카드: 고정 폭(축소 안 됨) -->
    <div class="relative w-[820px] min-w-[820px] bg-white border border-gray-300 shadow-sm rounded-md p-10 pt-16 mx-auto">
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
defineOptions({ name: 'CareerPage' })
</script>
