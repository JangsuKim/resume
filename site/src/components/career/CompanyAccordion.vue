<script setup lang="ts">
import { ref, nextTick } from 'vue'
import type { CareerCompany } from '@/data/career'
import ProjectAccordion from './ProjectAccordion.vue'

defineProps<{
  companies: CareerCompany[]
  printMode?: boolean
}>()

const active = ref<number | null>(0) // 첫 회사 기본 오픈

// 🔹 아코디언 클릭 후 해당 요소로 스크롤
async function scrollToActive(idx: number) {
  await nextTick()
  const el = document.getElementById(`comp-panel-${idx}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

function onEnter(el: Element) {
  const e = el as HTMLElement
  e.style.height = '0px'
  e.style.overflow = 'hidden'
  requestAnimationFrame(() => e.style.height = e.scrollHeight + 'px')
}
function onAfterEnter(el: Element) {
  const e = el as HTMLElement
  e.style.height = ''
  e.style.overflow = ''
}
function onLeave(el: Element) {
  const e = el as HTMLElement
  e.style.height = e.scrollHeight + 'px'
  e.style.overflow = 'hidden'
  requestAnimationFrame(() => e.style.height = '0px')
}
function onAfterLeave(el: Element) {
  const e = el as HTMLElement
  e.style.height = ''
  e.style.overflow = ''
}
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="(c, idx) in companies"
      :key="c.company + idx"
      class="border border-gray-300 rounded-md"
    >
      <!-- 회사 헤더 -->
      <button
        type="button"
        class="w-full flex items-start justify-between gap-3 px-5 py-4 text-left bg-gray-50 hover:bg-gray-100 rounded-md"
        :aria-expanded="printMode || active === idx"
        :aria-controls="`comp-panel-${idx}`"
        @click="() => { active = active === idx ? null : idx; if (active === idx) scrollToActive(idx) }"
      >
        <div class="min-w-0">
          <div class="text-base font-semibold">
            {{ c.company }}
            <span class="ml-2 text-sm font-normal text-gray-500">（{{ c.period }}）</span>
          </div>
          <div class="mt-1 text-xs text-gray-600 truncate">
            {{ c.business || '' }}
          </div>
          <div class="mt-0.5 text-[11px] text-gray-500">
            区分：{{ c.roleType }} <span v-if="c.division">／ {{ c.division }}</span>
          </div>
        </div>

        <svg
          class="w-5 h-5 mt-0.5 shrink-0 transition-transform"
          :class="(printMode || active === idx) ? 'rotate-180' : ''"
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.2l3.71-2.97a.75.75 0 111.04 1.08l-4.24 3.4a.75.75 0 01-.94 0l-4.24-3.4a.75.75 0 01-.02-1.1z"/>
        </svg>
      </button>

      <!-- 회사 패널 -->
      <transition
        @enter="onEnter" @after-enter="onAfterEnter"
        @leave="onLeave" @after-leave="onAfterLeave"
      >
        <div v-show="printMode || active === idx" :id="`comp-panel-${idx}`" class="px-5 pb-5">
          <div class="mt-3">
            <ProjectAccordion :projects="c.projects" :print-mode="printMode" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
