<script setup lang="ts">
type Size = 'xl' | 'lg' | 'md' | 'sm'

type TechItem = {
  name: string
  icon: string
  size?: Size
  note?: string
}

type TechGroup = {
  title: string
  items: TechItem[]
  defaultSize?: Size
}

const props = defineProps<{ groups: TechGroup[] }>()

// ---------- ① 크기 매핑 ----------
const sizePx = (s?: Size, fallback: Size = 'md') => {
  const v = s ?? fallback
  switch (v) {
    case 'xl': return 56
    case 'lg': return 44
    case 'md': return 36
    case 'sm': return 28
    default:   return 36
  }
}

// ---------- ② 안정적인 아이콘 폴백 ----------
const FALLBACK_ICON: Record<string, string> = {
  Laravel: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line.svg',
  'Amazon Web Services': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line.svg',
}

// 이미지 로드 실패 시 폴백 처리
function onImgError(e: Event, name: string) {
  const el = e.target as HTMLImageElement
  const fb = FALLBACK_ICON[name]
  if (fb && el.src !== fb) {
    el.src = fb
  } else {
    el.alt = `${name} (icon missing)`
    el.style.background = '#f5f5f5'
    el.style.border = '1px solid #ddd'
  }
}
</script>

<template>
  <section class="pt-1">
    <div class="space-y-6">
      <div v-for="(group, gi) in props.groups" :key="gi">
        <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-2">
          {{ group.title }}
        </h3>

        <div class="grid grid-cols-6 gap-x-6 gap-y-4">
          <div
            v-for="(it, ii) in group.items"
            :key="ii"
            class="flex flex-col items-center text-center"
          >
            <img
              :src="it.icon"
              :alt="it.name"
              :style="{
                width: sizePx(it.size, group.defaultSize || 'md') + 'px',
                height: sizePx(it.size, group.defaultSize || 'md') + 'px',
                objectFit: 'contain'
              }"
              loading="lazy"
              decoding="async"
              referrerpolicy="no-referrer"
              @error="onImgError($event, it.name)"
            />

            <span
              class="mt-1 leading-tight text-gray-800"
              :style="{
                fontSize: sizePx(it.size, group.defaultSize || 'md') <= 28 ? '10px' : '11px',
                fontWeight: (it.size === 'lg' || it.size === 'xl') ? '700' : '400'    // ✅ lg만 bold
              }"
            >
              {{ it.name }}
            </span>

            <span v-if="it.note" class="text-[10px] text-gray-500">{{ it.note }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
