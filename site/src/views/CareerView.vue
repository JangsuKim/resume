<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4">
    <!-- 스케일러 래퍼: 카드 전체를 scale로 축소/확대, 바깥 너비도 scale에 맞춰 보정 -->
    <div
      class="mx-auto select-none"
      :style="{ width: (BASE_WIDTH * effectiveScale) + 'px' }"
      style="touch-action: pan-y; -ms-touch-action: pan-y;"
      @dblclick.prevent="toggleMode"
      @touchstart="onTouchStart"
      @touchmove.prevent="onTouchMove"
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

const BASE_WIDTH = 820
const OUTER_PADDING = 32

type Mode = 'fit' | 'actual'
const mode = ref<Mode>('fit')

const fitScale = ref(1)
const scale = ref(1)

// 🔹 내부 줌 한계(원하시면 숫자만 조정)
const MIN_SCALE = 0.5
const MAX_SCALE = 1.4

const effectiveScale = computed(() => (mode.value === 'fit' ? fitScale.value : scale.value))

function computeFit() {
  const vw = window.innerWidth
  const available = Math.max(0, vw - OUTER_PADDING)
  fitScale.value = Math.min(1, available / BASE_WIDTH)
}

function toggleMode() {
  if (mode.value === 'fit') {
    mode.value = 'actual'
    scale.value = clamp(fitScale.value, MIN_SCALE, 1)
  } else {
    mode.value = 'fit'
  }
}

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))

/* ----------------- 🔹 내부 ‘핀치줌’ 구현 ----------------- */
let pinchStartDist = 0
let pinchStartScale = 1
const getDist = (t0: Touch, t1: Touch) => {
  const dx = t0.clientX - t1.clientX
  const dy = t0.clientY - t1.clientY
  return Math.hypot(dx, dy)
}

function onTouchStart(e: TouchEvent) {
  if (e.touches.length === 2) {
    // 기본 브라우저 핀치줌 대신 내부 줌 사용
    e.preventDefault()
    if (e.touches[0] && e.touches[1]) {
      pinchStartDist = getDist(e.touches[0], e.touches[1])
    }
    // 핀치 시작 시 'actual' 모드로 전환해 제어권 확보
    if (mode.value === 'fit') {
      mode.value = 'actual'
      scale.value = clamp(fitScale.value, MIN_SCALE, 1)
    }
    pinchStartScale = scale.value
  }
}

function onTouchMove(e: TouchEvent) {
  if (e.touches.length === 2 && pinchStartDist > 0) {
    e.preventDefault()
    if (e.touches[0] && e.touches[1]) {
      const dist = getDist(e.touches[0], e.touches[1])
      const factor = dist / pinchStartDist
      // 부드럽게: 약간의 감쇠(민감도 ↓)
      const target = pinchStartScale * Math.pow(factor, 0.85)
      scale.value = clamp(+target.toFixed(3), MIN_SCALE, MAX_SCALE)
    }
  }
}

// 기존 더블탭 토글 유지
let lastTouch = 0
function onTouchEnd(e: TouchEvent) {
  if (e.touches.length < 2) {
    pinchStartDist = 0
  }
  const now = Date.now()
  if (now - lastTouch < 300) {
    // 두 손가락 제스처 직후엔 더블탭 토글 방지
    if (e.changedTouches && e.changedTouches.length === 1) {
      toggleMode()
      e.preventDefault()
    }
  }
  lastTouch = now
}
/* ------------------------------------------------------- */

onMounted(() => {
  computeFit()
  window.addEventListener('resize', computeFit, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', computeFit)
})
</script>
