<template>
  <!-- 고정폭 카드 + 가로 스크롤 허용: 모바일에서도 데스크톱 레이아웃 유지 -->
  <div class="min-h-screen bg-gray-100 py-10 px-4 overflow-x-auto">
    <div class="w-[820px] min-w-[820px] mx-auto bg-white border border-gray-300 shadow-sm rounded-md p-10">

      <!-- 상단 타이틀 + 얇은 선 -->
      <header class="text-center mb-8">
        <h1 class="text-3xl font-extrabold tracking-wider">RESUME</h1>
        <div class="mt-3 h-px bg-neutral-400"></div>
      </header>

      <!-- 프로필 박스 -->
      <section>
        <div
          class="w-full"
          style="display:grid; grid-template-columns: 200px 1fr; gap:28px;"
        >
          <!-- 좌: 사진 -->
          <div class="flex justify-center items-start">
            <img
              src="@/assets/profile.jpg"
              alt="프로필"
              class="w-[150px] h-[190px] object-cover rounded-sm border border-gray-200"
            />
          </div>

          <!-- 우: 이름 + 정보표 -->
          <div>
            <h2 class="text-[30px] leading-[1.05] font-semibold mb-3">KIM JANGSU</h2>

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
        </div>
      </section>

      <!-- 타임라인 (컴포넌트 내부에서 relative/absolute 사용해도 안전) -->
      <section class="mt-4 pt-4">
        <ResumeTimeline />
      </section>

      <!-- 資格・認定 : 고정 2컬럼 그리드로 붕괴 방지 -->
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
</template>

<script setup lang="ts">
import ResumeTimeline from '@/components/ResumeTimeline.vue'
</script>
