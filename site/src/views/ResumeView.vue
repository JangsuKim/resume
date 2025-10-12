<template>
  <!-- 스케일러 래퍼: 화면이 좁으면 카드 전체를 축소해서 1페이지에 보이도록 -->
  <div class="min-h-screen bg-gray-100 py-10 px-4">
    <!-- 시각상 실제 너비를 scale에 맞춰 중앙 정렬 -->
    <div class="mx-auto" :style="{ width: (BASE_WIDTH * scale) + 'px' }">
      <!-- 실제 카드는 고정폭(820px) 유지, 시각만 축소 -->
      <div
        class="bg-white border border-gray-300 shadow-sm rounded-md p-10"
        style="width: 820px;"
        :style="{
          transform: `scale(${scale})`,
          transformOrigin: 'top left'
        }"
      >

        <!-- 상단 타이틀 + 얇은 선 -->
        <header class="text-center mb-8">
          <h1 class="text-3xl font-extrabold tracking-wider">RESUME</h1>
          <div class="mt-3 h-px bg-neutral-400"></div>
        </header>

        <!-- 프로필 박스 -->
        <section>
        <div
            class="w-full"
            style="display:grid; grid-template-columns: 1fr 200px; gap:10px;"
        >
            <!-- 좌: 이름 + 정보표 (텍스트) -->
            <div class="pl-14">
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

            <!-- 우: 사진 (살짝 오른쪽 정렬, 공백 메움) -->
            <div class="flex justify-end items-start pr-14">
            <img
                src="@/assets/profile.jpg"
                alt="프로필"
                class="w-[150px] h-[190px] object-cover rounded-sm border border-gray-200 ml-auto"
            />
            </div>
        </div>
        </section>


        <!-- 인셋 콘텐츠 패널 -->
        <section class="mt-4 pt-4">
          <ResumeTimeline />
        </section>

        <!-- 資格・認定 : 고정 2컬럼 그리드 -->
        <section class="mt-8 border-t border-gray-200 pt-4 pl-8">
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
                  <span>情報処理産業棋士</span>
                  <span class="text-neutral-600 text-left">(2016年11月)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 링크 -->
        <section class="mt-8 border-t border-gray-200 pt-4 pl-8">
          <div class="flex items-start gap-6">
            <h3 class="font-semibold text-lg">職務経歴書へ</h3>
            <RouterLink
              to="/career"
              class="inline-flex items-center gap-2 text-blue-600 hover:text-gray-900 transition-colors"
            >
              職務経歴書へ <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ResumeTimeline from '@/components/ResumeTimeline.vue'

/**
 * 카드의 기준 폭(px). 현재 레이아웃이 820px을 기준으로 설계되어 있습니다.
 * 바꾸고 싶으면 숫자만 변경하세요(예: 840, 900 등). 자동으로 스케일이 재계산됩니다.
 */
const BASE_WIDTH = 820

/**
 * 바깥 컨테이너의 좌우 여백 합(px). 상단 <div class="... px-4"> 기준 16px*2 = 32px.
 * 페이지 여백을 바꾸면 같이 조정하세요.
 */
const OUTER_PADDING = 32

const scale = ref(1)
const computeScale = () => {
  const vw = window.innerWidth
  const available = Math.max(0, vw - OUTER_PADDING)
  // 데스크톱에서는 1(원본 크기), 모바일 등 좁은 화면에서는 화면 폭에 맞게 축소
  scale.value = Math.min(1, available / BASE_WIDTH)
}

onMounted(() => {
  computeScale()
  window.addEventListener('resize', computeScale, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', computeScale)
})
</script>
