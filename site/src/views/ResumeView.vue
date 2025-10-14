<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4">
    <!-- 스케일러 래퍼: 카드 전체(내용 포함)를 그룹으로 스케일 -->
    <div
      class="mx-auto select-none"
      :style="{ width: (BASE_WIDTH * effectiveScale) + 'px' }"
      @dblclick.prevent="toggleMode"
      @touchend.passive="onTouchEnd"
    >
      <!-- A4 카드: 고정 폭, 시각만 scale -->
      <div
        class="relative bg-white border border-gray-300 shadow-sm rounded-md p-10 print-scale"
        style="width: 820px;"
        :style="{
          transform: `scale(${effectiveScale})`,
          transformOrigin: 'top left'
        }"
      >

        <!-- 상단 타이틀 + 얇은 선 -->
        <header class="text-center mb-8">
          <h1 class="text-3xl font-extrabold tracking-wider">RESUME</h1>
          <div class="mt-3 h-px bg-neutral-400"></div>
        </header>

        <!-- 프로필 박스 (내용 그대로) -->
        <section>
          <div
            class="w-full"
            style="display:grid; grid-template-columns: 1fr 200px; gap:4px;"
          >
            <!-- 좌: 이름 + 정보표 (텍스트) -->
            <div class="pl-12">
              <h2 class="text-[30px] leading-[1.05] font-semibold mb-3">
                KIM JANGSU
                <span class="text-[20px] text-gray-600 font-normal ml-2">(キム・ジャンス)</span>
              </h2>

              <table class="w-full text-[15px] leading-[1.35]">
                <tbody>
                  <tr class="align-top">
                    <td class="w-[72px] text-gray-500 pb-2">age</td>
                    <td class="pb-2">40歳 (1985-08-19)</td>
                  </tr>
                  <tr class="align-top">
                    <td class="w-[72px] text-gray-500 pb-2">e-mail</td>
                    <td class="pb-2">
                      <a href="mailto:jangsoo719@gmail.com" class="hover:underline">jangsoo719@gmail.com</a>
                    </td>
                  </tr>
                  <tr class="align-top">
                    <td class="text-gray-500 pb-2">mobile</td>
                    <td class="pb-2">080-3733-6561</td>
                  </tr>
                  <tr class="align-top">
                    <td class="text-gray-500 pb-2">address</td>
                    <td class="pb-2">大阪府大阪市東成区中本5-13-10</td>
                  </tr>
                  <tr class="align-top">
                    <td class="text-gray-500">Web</td>
                    <td>
                      <a href="https://github.com/JangsuKim" target="_blank" class="hover:underline">🧑‍💻 [GitHub]</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- 우: 사진 (조금 더 왼쪽으로 당김) -->
            <div class="flex justify-start items-start pr-10 relative right-10">
              <img
                src="@/assets/profile.jpg"
                alt="프로필"
                class="w-[150px] h-[190px] object-cover rounded-sm border border-gray-200 mr-auto translate-x-2"
              />
            </div>
          </div>
        </section>

        <!-- 타임라인 -->
        <section class="mt-4 pt-2">
          <ResumeTimeline />
        </section>

        <!-- 資格・認定 : 고정 2컬럼 그리드 -->
        <section class="mt-8 border-t border-gray-200 pt-3 pl-8">
          <div style="display:grid; grid-template-columns: 110px 1fr; column-gap:18px;">
            <div class="flex items-start">
              <h3 class="font-semibold text-lg">免許・資格</h3>
            </div>
            <div>
              <div class="space-y-2 text-[15px] leading-[1.5]">
                <div style="display:grid; grid-template-columns: 1fr 450px;">
                  <span>JLPT 2級</span>
                  <span class="text-neutral-600 text-left">(2009年2月)</span>
                </div>
                <div style="display:grid; grid-template-columns: 1fr 450px;">
                  <span>TOEIC 750点</span>
                  <span class="text-neutral-600 text-left">(2023年2月)</span>
                </div>
                <div style="display:grid; grid-template-columns: 1fr 450px;">
                  <span>情報処理産業棋士</span>
                  <span class="text-neutral-600 text-left">(2016年11月)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 링크 -->
        <section class="mt-8 border-t border-gray-200 pt-3 pl-7 relative z-10">
          <div class="flex items-start gap-6">
            <h3 class="font-semibold text-lg">職務経歴書</h3>
            <RouterLink
              :to="{ name: 'CareerPage' }"
              class="inline-flex items-center gap-2 text-blue-600 hover:text-gray-900 transition-colors pl-6"
            >
              職務経歴書へ移動 <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ResumeTimeline from '@/components/ResumeTimeline.vue'

const BASE_WIDTH = 820      // 카드 설계 폭(px)
const OUTER_PADDING = 32    // 페이지 좌우 padding(px-4 = 16*2)

type Mode = 'fit' | 'actual'   // fit=화면폭 맞춤, actual=100%
const mode = ref<Mode>('fit')

const fitScale = ref(1)     // 자동 스케일
const scale = ref(1)        // actual 모드 수동 스케일(필요 시 확장 가능)
const effectiveScale = computed(() => (mode.value === 'fit' ? fitScale.value : scale.value))

function computeFit() {
  const vw = window.innerWidth
  const available = Math.max(0, vw - OUTER_PADDING)
  fitScale.value = Math.min(1, available / BASE_WIDTH)
}

function toggleMode() {
  if (mode.value === 'fit') {
    mode.value = 'actual'
    scale.value = Math.min(1, Math.max(0.5, fitScale.value)) // fit 값을 시작점으로
  } else {
    mode.value = 'fit'
  }
}

// 모바일 더블탭 감지 (Fit ↔ 100%)
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

<style>
  @media print {
    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* A4에 맞춰 자동 축소 */
    .print-scale {
      transform: scale(0.72);
      transform-origin: top center;
    }
  }
</style>