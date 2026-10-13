<script setup lang="ts">
type Item = {
  year: string
  title: string
  subtitle?: string
  desc?: string
}

const items: Item[] = [
  { year: '2010', title: '乙支大学校 卒業', subtitle: '2005.03 ~ 2010.02', desc: '観光学科' },
  { year: '2011', title: '富士フィルム韓国支社 入社', subtitle: '2011.06 ~ 2015.02', desc: '電子材料事業部、総務部員' },
  { year: '2016', title: 'Javaプログラマー課程', subtitle: '2016.07 ~ 2017.02', desc: 'IT勉強スタート、韓国産業人力公団 主管' },
  { year: '2017', title: 'KS情報システム 入社', subtitle: '2017.04 ~ 2018.03', desc: '2017来日、SIer' },
  { year: '2018', title: 'テクノプロ テクノプロIT社 入社', subtitle: '2018.04 ~ 2022.08', desc: 'SIer' },
  { year: '2022', title: '楽天グループ 入社', subtitle: '2022.08 ~ 2024.07', desc: '自社開発、楽天ブックス' },
  { year: '2024', title: 'ブーストテクノロジー 入社', subtitle: '2024.07 ~ 2025.12', desc: '大阪へ移住、自社開発' },
  { year: '2025', title: 'アソビュー 業務委託参画', subtitle: '2025.12 ~ 現在', desc: 'バックエンド開発・保守・セキュリティ対応' },
]
</script>

<template>
  <header class="px-6 pt-3 pb-1 text-left border-b border-slate-200">
    <h2 class="text-lg font-semibold tracking-wide text-slate-800">
      学歴・職歴（タイムライン）
    </h2>
  </header>

  <div class="timeline-container relative px-5 py-3">
    <ul class="timeline-list relative space-y-1.5">
      <!-- 연도·원과 같은 기준점에서 이어지는 세로선 -->
      <div class="timeline-line absolute left-[20%] top-0 h-full w-px bg-slate-200"></div>
      <li v-for="(it, i) in items" :key="i" class="relative flex items-start">
        <!-- 왼쪽(20%): 연도 -->
        <div class="timeline-year w-[20%] pt-1.5 pr-3 text-center">
          <span class="text-2xl font-bold leading-none tracking-tight text-slate-400">
            {{ it.year }}
          </span>
        </div>

        <div class="timeline-dot absolute left-[20%] top-1/3 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-slate-500 shadow-sm"></div>

        <!-- 오른쪽(80%): 내용 -->
        <div
          class="timeline-card w-[70%] origin-left rounded-md bg-white px-3 py-1.5 transition
                 duration-200 ease-out hover:scale-110 hover:shadow-md hover:ring-1 hover:ring-slate-200"
        >
          <h3 class="text-[18px] leading-tight font-semibold text-slate-900">{{ it.title }}</h3>
          <p v-if="it.subtitle" class="text-[14px] leading-tight text-slate-600">
            {{ it.subtitle }}
          </p>
          <p v-if="it.desc" class="text-[14px] leading-tight text-slate-600">
            {{ it.desc }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .timeline-card { width: calc(70% - 1rem); margin-left: 1rem; }
}

@media screen and (max-width: 767px) {
  .timeline-container { padding-left: .75rem !important; padding-right: .25rem !important; }
  .timeline-list {
    --year-column: 24%;
    --track-position: calc(var(--year-column) + 6px);
  }
  .timeline-line { left: var(--track-position) !important; }
  .timeline-year { width: var(--year-column) !important; flex: none; padding-top: 1.25rem !important; text-align: left; transform: translateX(-.5rem); }
  .timeline-dot { left: var(--track-position) !important; top: 1.75rem; transform: translateX(-50%); }
  .timeline-card { width: calc(100% - var(--year-column) - 22px) !important; margin-left: 22px; flex: none; }
  .timeline-card:hover { transform: none; }
}
</style>
