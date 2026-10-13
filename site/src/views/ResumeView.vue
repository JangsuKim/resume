<template>
  <div class="resume-page min-h-screen bg-gray-100 py-10 px-4">
    <!-- 스케일러 래퍼: 카드 전체(내용 포함)를 그룹으로 스케일 -->
    <div
      class="resume-print-wrapper mx-auto select-none"
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
            class="resume-profile w-full"
            style="display:grid; grid-template-columns: 1fr 200px; gap:4px;"
          >
            <!-- 좌: 이름 + 정보표 (텍스트) -->
            <div class="resume-profile-details pl-12">
              <h2 class="text-[30px] leading-[1.05] font-semibold mb-3">
                {{ profile.name }}
                <span class="resume-name-ja text-[20px] text-gray-600 font-normal ml-2">({{ profile.nameJa }})</span>
              </h2>

              <table class="w-full text-[15px] leading-[1.35]">
                <tbody>
                  <tr class="align-top">
                    <td class="w-[72px] text-gray-500 pb-2">age</td>
                    <td class="pb-2">{{ age }}歳 ({{ birthDateLabel }})</td>
                  </tr>
                  <tr class="align-top">
                    <td class="w-[72px] text-gray-500 pb-2">e-mail</td>
                    <td class="pb-2">
                      <a :href="`mailto:${profile.email}`" class="hover:underline">{{ profile.email }}</a>
                    </td>
                  </tr>
                  <tr class="align-top">
                    <td class="text-gray-500 pb-2">mobile</td>
                    <td class="pb-2">{{ profile.mobile }}</td>
                  </tr>
                  <tr class="align-top">
                    <td class="text-gray-500 pb-2">address</td>
                    <td class="pb-2">{{ profile.address }}</td>
                  </tr>
                  <tr class="align-top">
                    <td class="text-gray-500">Web</td>
                    <td>
                      <a :href="profile.github.url" target="_blank" rel="noopener" class="hover:underline">
                        🧑‍💻 [{{ profile.github.label }}]
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- 우: 사진 (조금 더 왼쪽으로 당김) -->
            <div class="resume-profile-photo flex justify-start items-start pr-10 relative right-10">
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
        <section class="resume-qualifications mt-8 border-t border-gray-200 pt-3 pl-8">
          <div class="resume-qualifications-grid" style="display:grid; grid-template-columns: 110px 1fr; column-gap:18px;">
            <div class="flex items-start">
              <h3 class="font-semibold text-lg">免許・資格</h3>
            </div>
            <div>
              <div class="space-y-2 text-[15px] leading-[1.5]">
                <div
                  v-for="qualification in profile.qualifications"
                  :key="qualification.name"
                  class="resume-qualification-row"
                  style="display:grid; grid-template-columns: 1fr 450px;"
                >
                  <span>{{ qualification.name }}</span>
                  <span class="text-neutral-600 text-left">({{ qualification.date }})</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 링크 -->
        <section class="resume-career-link mt-8 border-t border-gray-200 pt-3 pl-7 relative z-10">
          <div class="resume-career-link-content flex items-center justify-between gap-3">
            <h3 class="shrink-0 whitespace-nowrap font-semibold text-lg">職務経歴書</h3>
            <RouterLink
              :to="{ name: 'CareerPage' }"
              class="resume-career-link-action inline-flex shrink-0 whitespace-nowrap items-center gap-2 text-blue-600 hover:text-gray-900 transition-colors"
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
const profile = {
  name: 'KIM JANGSU',
  nameJa: 'キム・ジャンス',
  birthDate: { year: 1985, month: 8, day: 19 },
  email: 'jangsoo719@gmail.com',
  mobile: '080-3733-6561',
  address: '大阪府東大阪市高井田元町2-12-5-1410',
  github: {
    label: 'GitHub',
    url: 'https://github.com/JangsuKim',
  },
  qualifications: [
    { name: 'JLPT 2級', date: '2009年2月' },
    { name: 'TOEIC 750点', date: '2023年2月' },
    { name: '情報処理産業技士', date: '2016年11月' },
  ],
}

const birthDateLabel = `${profile.birthDate.year}-${String(profile.birthDate.month).padStart(2, '0')}-${String(profile.birthDate.day).padStart(2, '0')}`

const age = computed(() => {
  const today = new Date()
  let value = today.getFullYear() - profile.birthDate.year
  const hasHadBirthday =
    today.getMonth() + 1 > profile.birthDate.month ||
    (today.getMonth() + 1 === profile.birthDate.month && today.getDate() >= profile.birthDate.day)

  if (!hasHadBirthday) value -= 1
  return value
})

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
    @page {
      size: A4 portrait;
      margin: 0;
    }

    html,
    body {
      margin: 0;
      background: white !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .resume-page {
      min-height: 0 !important;
      padding: 0 !important;
      background: white !important;
    }

    /* Chrome의 84% 인쇄 배율과 같은 레이아웃 축소를 적용한다. */
    .resume-print-wrapper {
      width: 689px !important;
      margin: 0 auto !important;
    }

    .print-scale {
      transform: none !important;
      zoom: 0.84;
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
    }
  }

  @media screen and (max-width: 767px) {
    .resume-page { padding: 1rem !important; }
    .resume-print-wrapper { width: 100% !important; }
    .print-scale { width: 100% !important; transform: none !important; }
    .resume-profile { grid-template-columns: 1fr !important; gap: 1.25rem !important; }
    .resume-profile-details { padding-left: 0 !important; }
    .resume-name-ja { display: block; margin: .5rem 0 0 !important; }
    .resume-profile-photo { position: static !important; right: auto !important; justify-content: center !important; padding-right: 0 !important; }
    .resume-profile-photo img { margin: 0 !important; transform: none !important; }
    .resume-qualifications { padding-left: 0 !important; }
    .resume-career-link { padding-left: 0 !important; }
    .resume-career-link-content { justify-content: space-between; }
    .resume-qualifications-grid { grid-template-columns: 1fr !important; gap: .75rem !important; }
    .resume-qualification-row { grid-template-columns: 1fr auto !important; gap: 1rem !important; }
  }

  @media screen and (min-width: 768px) {
    .resume-career-link-content { justify-content: flex-start; gap: 1.5rem; }
    .resume-career-link-action { margin-left: 3.5rem; }
  }
</style>
