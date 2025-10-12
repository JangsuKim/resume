<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/data/career'
    

defineProps<{
  projects: Project[]
  printMode?: boolean
}>()

const active = ref<number | null>(0) // 첫 항목을 기본 오픈

// height 트랜지션 유틸
function onEnter(el: Element) {
  const e = el as HTMLElement
  e.style.height = '0px'
  e.style.overflow = 'hidden'
  requestAnimationFrame(() => {
    e.style.height = e.scrollHeight + 'px'
  })
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
  requestAnimationFrame(() => {
    e.style.height = '0px'
  })
}
function onAfterLeave(el: Element) {
  const e = el as HTMLElement
  e.style.height = ''
  e.style.overflow = ''
}
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="(p, idx) in projects"
      :key="p.name + idx"
      class="border border-gray-200 rounded-md"
    >
      <!-- 헤더 -->
      <button
        type="button"
        class="w-full flex items-start justify-between gap-3 px-4 py-3 text-left hover:bg-gray-50 rounded-md"
        :aria-expanded="printMode || active === idx"
        :aria-controls="`proj-panel-${idx}`"
        @click="active = active === idx ? null : idx"
      >
        <div>
          <div class="text-sm font-semibold">
            {{ p.name }}
            <span v-if="p.period" class="ml-2 text-xs font-normal text-gray-500">（{{ p.period }}）</span>
          </div>
          <div v-if="p.overview?.length" class="mt-1 text-xs text-gray-600 line-clamp-2">
            {{ p.overview[0] }}
          </div>
        </div>
        <svg
          class="w-4 h-4 mt-1 shrink-0 transition-transform"
          :class="(printMode || active === idx) ? 'rotate-180' : ''"
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
        >
          <!-- ▼ 기본 / ▲ 펼침 시 회전 -->
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.2l3.71-2.97a.75.75 0 111.04 1.08l-4.24 3.4a.75.75 0 01-.94 0l-4.24-3.4a.75.75 0 01-.02-1.1z"/>
        </svg>
      </button>

      <!-- 패널 -->
      <transition
        @enter="onEnter" @after-enter="onAfterEnter"
        @leave="onLeave" @after-leave="onAfterLeave"
      >
        <div v-show="printMode || active === idx" :id="`proj-panel-${idx}`" class="px-4 pb-4">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div v-if="p.overview?.length">
              <h4 class="font-medium mb-1">プロジェクト概要</h4>
              <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li v-for="(v,i) in p.overview" :key="i">{{ v }}</li>
              </ul>
            </div>

            <div v-if="p.phases?.length">
              <h4 class="font-medium mb-1">担当フェーズ</h4>
              <p class="text-gray-700">{{ p.phases.join('、') }}</p>
            </div>

            <div v-if="p.responsibilities?.length">
              <h4 class="font-medium mb-1">業務内容</h4>
              <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li v-for="(v,i) in p.responsibilities" :key="i">{{ v }}</li>
              </ul>
            </div>

            <div v-if="p.achievements?.length">
              <h4 class="font-medium mb-1">実績・取り組み</h4>
              <ul class="list-disc pl-5 space-y-1 text-gray-700">
                <li v-for="(v,i) in p.achievements" :key="i">{{ v }}</li>
              </ul>
            </div>

            <div v-if="p.tech" class="md:col-span-2">
              <h4 class="font-medium mb-1">使用技術</h4>
              <div class="flex flex-wrap gap-2 text-xs">
                <template v-if="p.tech?.os?.length">
                  <span class="px-2 py-1 rounded border">{{ 'OS: ' + p.tech.os.join(', ') }}</span>
                </template>
                <template v-if="p.tech?.languages?.length">
                  <span class="px-2 py-1 rounded border">{{ '言語: ' + p.tech.languages.join(', ') }}</span>
                </template>
                <template v-if="p.tech?.db?.length">
                  <span class="px-2 py-1 rounded border">{{ 'DB: ' + p.tech.db.join(', ') }}</span>
                </template>
                <template v-if="p.tech?.others?.length">
                  <span class="px-2 py-1 rounded border">{{ 'その他: ' + p.tech.others.join(', ') }}</span>
                </template>
                <template v-if="p.tech?.team">
                  <span class="px-2 py-1 rounded border">{{ '体制: ' + p.tech.team }}</span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
