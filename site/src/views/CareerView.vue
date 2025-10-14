<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4">
    <!-- 스케일러 래퍼 -->
    <div
      class="mx-auto select-none"
      :style="{ width: (BASE_WIDTH * effectiveScale) + 'px' }"
      style="touch-action: pan-y; -ms-touch-action: pan-y;"
      @dblclick.prevent="toggleMode"
      @touchstart="onTouchStart"
      @touchmove.prevent="onTouchMove"
      @touchend.passive="onTouchEnd"
    >
      <!-- A4 카드 -->
      <div
        class="relative bg-white border border-gray-300 shadow-sm rounded-md p-10 pt-16"
        style="width: 820px;"
        :style="{ transform: `scale(${effectiveScale})`, transformOrigin: 'top left' }"
      >
        <!-- 좌측 상단 돌아가기 -->
        <RouterLink
          to="/"
          class="absolute left-6 top-6 flex items-center gap-1 text-blue-600 hover:text-gray-900 transition-colors"
        >
          <span class="text-lg">←</span>
          <span class="text-sm font-medium">履歴書に戻る</span>
        </RouterLink>

        <!-- 타이틀 -->
        <header class="text-center">
          <h1 class="text-3xl font-extrabold tracking-wider">職務経歴書</h1>
          <div class="mt-3 h-px bg-neutral-300"></div>
        </header>

        <!-- 메타(최종 업데이트, 링크 앵커) -->
        <div class="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>最終更新：2025-10-14</span>
          <nav class="space-x-4">
            <a href="#intro" class="hover:underline">自己紹介</a>
            <a href="#projects" class="hover:underline">プロジェクト</a>
            <a href="#skills" class="hover:underline">スキル</a>
          </nav>
        </div>

        <!-- 自己紹介 -->
        <section id="intro" class="mt-8">
          <h2 class="text-lg font-semibold tracking-wide">自己紹介</h2>
          <div class="mt-3 text-sm leading-7 text-gray-700">
            <!-- 要約 -->
            <p>
              大阪在住のバックエンドエンジニアのキム・ジャンスです。
              2017年に来日してから約8年間、Webアプリケーション開発に携わってきました。
              Java と PHP（Laravel）を中心に、要件定義から設計、実装、テスト、運用まで一貫して対応します。
              SIerでの5年に加え、直近は自社開発での3年を通じて、堅牢でメンテナンス性の高いシステムづくりと
              チーム開発の推進に注力しています。
            </p>

            <!-- 展開エリア -->
            <transition name="fade">
              <div v-if="showFullIntro" class="mt-3 space-y-3">
                <p>
                  大学では観光学を専攻し、日本語を学びました。富士フイルムの総務部での経験を経て、
                  将来を見据えて IT に転向。2016年に学習を開始し、翌年からエンジニアとしてのキャリアを歩んでいます。
                  現在はバックエンドを主軸にしつつ、フロントエンドやプロジェクト推進にも積極的に関わります。
                </p>

                <ul class="list-disc pl-5 space-y-1">
                  <li><span class="font-medium">技術スタック</span>：Java、PHP、TypeScript、Spring Boot、Laravel、Vue、MySQL、Redis、AWS、Docker、Linux</li>
                  <li><span class="font-medium">強み</span>：要件の抽象化から実装・検証までを着実に推進し、品質とスピードのバランスを取ること</li>
                  <li><span class="font-medium">価値観</span>：ユーザー体験と開発生産性の両立、チームで再現可能な仕組み化</li>
                </ul>

                <p>
                  直近はサステナビリティ領域の商用サービスでコア機能の設計・実装を担当。
                  以前は大規模 EC でチェックアウト領域の新機能開発や不正対策を経験し、
                  高トラフィック環境での性能・安定性向上に取り組みました。
                </p>

                <div class="pt-1 text-xs text-gray-600">
                  🔗 GitHub：
                  <a href="https://github.com/JangsuKim" target="_blank" rel="noopener" class="underline">
                    github.com/JangsuKim
                  </a>
                </div>
              </div>
            </transition>

            <!-- トグル -->
            <button
              type="button"
              class="mt-3 text-xs inline-flex items-center gap-1 px-2 py-1 rounded border 
                    text-gray-600 border-gray-300 bg-gray-100 hover:bg-gray-200 active:scale-[0.99]"
              @click="showFullIntro = !showFullIntro"
            >
              <span v-if="!showFullIntro">詳細を表示</span>
              <span v-else>詳細を閉じる</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                  <!-- 닫힘 상태에서는 위쪽(▲) -->
                  <path v-if="!showFullIntro" fill-rule="evenodd"
                    d="M10 17a1 1 0 01-.832-.445l-5-7A1 1 0 115.832 8.445L10 14.118l4.168-5.673a1 1 0 111.664 1.11l-5 7A1 1 0 0110 17z"
                    clip-rule="evenodd" />
                  <!-- 열림 상태에서는 아래쪽(▼) -->
                  <path v-else fill-rule="evenodd"
                    d="M10 3a1 1 0 01.832.445l5 7a1 1 0 01-1.664 1.11L10 5.882 5.832 11.555A1 1 0 114.168 10.445l5-7A1 1 0 0110 3z"
                    clip-rule="evenodd" />
                </svg>
            </button>
          </div>
        </section>


        <!-- プロジェクト -->
        <section id="projects" class="mt-10">
          <h2 class="text-lg font-semibold tracking-wide">プロジェクト</h2>
          <p class="mt-2 text-sm text-gray-600">※ 会社 → プロジェクトの2段アコーディオンです。</p>

          <div class="mt-4">
            <CompanyAccordion :companies="careerCompanies" :print-mode="printMode" />
          </div>
        </section>

        <!-- 스킬(자리만) -->
        <section id="skills" class="mt-10">
          <h2 class="text-lg font-semibold tracking-wide">テクニカルスキル</h2>
          <div class="mt-3 pl-2">
            <TechStackCompact :groups="techGroups" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import CompanyAccordion from '@/components/career/CompanyAccordion.vue'
import TechStackCompact from '@/components/TechStackCompact.vue'
import { careerCompanies } from '@/data/career'

// 🛠 CareerView.vue (상단 <script setup> 내부)
type Size = 'xl' | 'lg' | 'md' | 'sm'
type TechItem = { name: string; icon: string; size?: Size; note?: string }
type TechGroup = { title: string; items: TechItem[]; defaultSize?: Size }

// ✅ techGroups 정의를 아래처럼 수정 (point: satisfies)
const techGroups = [
  {
    title: 'Backend',
    items: [
      { name: 'Java',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', size: 'xl', note: '5年以上' },
      { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', size: 'xl', note: '5年以上' },
      { name: 'PHP',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', size: 'md', note: '1年以上' },
      { name: 'Laravel',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', size: 'md', note: '1年以上' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', size: 'lg', note: '3年以上' },
      { name: 'jQuery',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',         size: 'lg', note: '3年以上' },
      { name: 'Vue 3',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',           size: 'md', note: '1年以上' },
      { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',           size: 'md', note: '1年以上' },
      { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',             size: 'md', note: '1年以上' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',           size: 'lg', note: '3年以上' },
      { name: 'Oracle',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',         size: 'lg', note: '1年程度' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', size: 'md', note: '1年程度' },
      { name: 'Redis',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',           size: 'md', note: '半年程度' },
    ],
  },
  {
    title: 'Tools / Cloud',
    defaultSize: 'sm',
    items: [
      { name: 'Git',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', note: '4年以上'  },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', note: '4年以上'  },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', note: '5年以上'  },
      { name: 'Linux',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', note: '7年以上'  },
      { name: 'AWS', icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png', note: '2年以上'  },
    ],
  },
] satisfies TechGroup[]


const BASE_WIDTH = 820
const OUTER_PADDING = 32

type Mode = 'fit' | 'actual'
const mode = ref<Mode>('fit')

const fitScale = ref(1)
const scale = ref(1)
const showFullIntro = ref(false)

// 🔹 인쇄 모드 플래그 (before/after print에서 제어)
const printMode = ref(false)

// 내부 줌 범위
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

/* ----- 핀치줌 ----- */
let pinchStartDist = 0
let pinchStartScale = 1
const getDist = (t0: Touch, t1: Touch) => Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY)

function onTouchStart(e: TouchEvent) {
  if (e.touches.length === 2) {

    e.preventDefault()
    if (e.touches[0] && e.touches[1]) pinchStartDist = getDist(e.touches[0], e.touches[1])
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

      const target = pinchStartScale * Math.pow(factor, 0.85)
      scale.value = clamp(+target.toFixed(3), MIN_SCALE, MAX_SCALE)
    }
  }
}


let lastTouch = 0
function onTouchEnd(e: TouchEvent) {
  if (e.touches.length < 2) pinchStartDist = 0
  const now = Date.now()
  if (now - lastTouch < 300) {

    if (e.changedTouches && e.changedTouches.length === 1) {
      toggleMode()
      e.preventDefault()
    }
  }
  lastTouch = now
}
/* ------------------ */

// 🔹 인쇄 훅: beforeprint에 모두 펼치기
function handleBeforePrint() {
  printMode.value = true        // 회사·프로젝트 아코디언 전부 펼침
  showFullIntro.value = true    // 자기소개 상세 펼침
}
function handleAfterPrint() {
  printMode.value = false
}

onMounted(() => {
  computeFit()
  window.addEventListener('resize', computeFit, { passive: true })

  // 🔹 경력 페이지 진입 시 최상단으로
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

  // 🔹 프린트 훅 등록
  window.addEventListener('beforeprint', handleBeforePrint)
  window.addEventListener('afterprint', handleAfterPrint)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', computeFit)
  window.removeEventListener('beforeprint', handleBeforePrint)
  window.removeEventListener('afterprint', handleAfterPrint)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* 🔹 인쇄 최적화 */
@media print {
  /* 모든 그림자 제거 */
  .shadow-sm, .shadow,
  :deep(.shadow-sm), :deep(.shadow) {
    box-shadow: none !important;
  }

  /* 점선 테두리 → 실선으로 변경 */
  .border-dashed,
  :deep(.border-dashed) {
    border-style: solid !important;
  }

}
</style>
