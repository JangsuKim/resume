<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4">
    <!-- 스케일러 래퍼: 카드 전체를 scale로 축소/확대, 바깥 너비도 scale에 맞춰 보정 -->
    <div
      class="mx-auto select-none"
      :style="{ width: (BASE_WIDTH * effectiveScale) + 'px' }"
      @dblclick.prevent="toggleMode"
      @touchend.passive="onTouchEnd"
    >
      <!-- A4 카드(고정 820px) - ‘그룹’으로 scale 적용 -->
      <div
        class="relative bg-white border border-gray-300 shadow-sm rounded-md p-10 pt-16"
        style="width: 820px;"
        :style="{
          transform: `scale(${effectiveScale})`,
          transformOrigin: 'top left'
        }"
      >
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

        <!-- (테스트용) 내용 블록 -->
        <div class="mt-8 space-y-3">
          <p class="text-sm text-gray-700">テスト用の段落 1</p>
          <p class="text-sm text-gray-700">テスト用の段落 2</p>
          <div class="h-64 bg-gray-50 border border-dashed border-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const BASE_WIDTH = 820     // 카드 설계 폭(px)
const OUTER_PADDING = 32   // 페이지 좌우 padding (px-4 = 16*2)

type Mode = 'fit' | 'actual'
const mode = ref<Mode>('fit')

const fitScale = ref(1)    // 화면폭에 맞춘 자동 스케일
const scale = ref(1)       // actual 모드에서 수동 스케일(필요 시 +/− 확장 가능)
const effectiveScale = computed(() => (mode.value === 'fit' ? fitScale.value : scale.value))

function computeFit() {
  const vw = window.innerWidth
  const available = Math.max(0, vw - OUTER_PADDING)
  fitScale.value = Math.min(1, available / BASE_WIDTH)
}

function toggleMode() {
  if (mode.value === 'fit') {
    mode.value = 'actual'
    // fit 상태 값을 시작점으로 사용 (0.5~1 범위로 클램프)
    scale.value = Math.min(1, Math.max(0.5, fitScale.value))
  } else {
    mode.value = 'fit'
  }
}

// 모바일 더블탭 감지
let lastTouch = 0
function onTouchEnd(e: TouchEvent) {
  const now = Date.now()
  if (now - lastTouch < 300) {
    toggleMode()
    e.preventDefault()
  }
  lastTouch = now
}

onMounted(() => {
  computeFit()
  window.addEventListener('resize', computeFit, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', computeFit)
})
</script>
