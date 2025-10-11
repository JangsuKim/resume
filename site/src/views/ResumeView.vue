<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 flex flex-col md:flex-row">
    <!-- 좌측 프로필 -->
    <aside class="w-full md:w-1/3 bg-white shadow md:min-h-screen border-r p-6">
      <div class="flex flex-col items-center">
        <div class="w-32 h-32 rounded-full bg-gray-200 mb-4" />
        <h1 class="text-2xl font-bold">KIM JANGSU</h1>
        <p class="text-sm text-gray-500">Backend / Full-stack Engineer</p>
      </div>
      <ul class="mt-6 text-sm space-y-2">
        <li><strong>Email:</strong> jangsoo719@gmail.com</li>
        <li><strong>Location:</strong> Osaka, Japan</li>
        <li><strong>GitHub:</strong> <a class="text-blue-600" href="https://github.com/JangsuKim">JangsuKim</a></li>
      </ul>
      <div class="mt-6">
        <h2 class="text-base font-semibold border-b pb-1 mb-3">Tech Stack</h2>
        <div class="flex flex-wrap gap-2 text-xs">
          <span class="px-2 py-1 bg-gray-100 rounded">Java</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Spring Boot</span>
          <span class="px-2 py-1 bg-gray-100 rounded">PHP</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Laravel</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Vue.js</span>
          <span class="px-2 py-1 bg-gray-100 rounded">MySQL</span>
        </div>
      </div>
    </aside>

    <!-- 우측 본문 -->
    <main class="flex-1 p-6 md:p-10">
      <section class="mb-8">
        <h2 class="text-lg font-bold border-b pb-1 mb-3">学歴</h2>
        <div class="flex justify-between text-sm py-2 border-b">
          <div>
            <p class="font-semibold">乙支大学校 観光学科</p>
            <p class="text-gray-500">卒業</p>
          </div>
          <span class="text-gray-400 whitespace-nowrap">2007–2011</span>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-lg font-bold border-b pb-1 mb-3">職務経歴</h2>
        <div class="flex justify-between text-sm py-2 border-b">
          <div>
            <p class="font-semibold">ブーストテクノロジーズ株式会社</p>
            <p class="text-gray-500">GX製品（Laravel + Vue.js）新機能・不具合対応</p>
          </div>
          <span class="text-gray-400 whitespace-nowrap">2024.7–現在</span>
        </div>
        <div class="flex justify-between text-sm py-2 border-b">
          <div>
            <p class="font-semibold">楽天グループ株式会社</p>
            <p class="text-gray-500">Bot Prevention / Fingerprint / Lucky Draw</p>
          </div>
          <span class="text-gray-400 whitespace-nowrap">2022.8–2024.7</span>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-lg font-bold border-b pb-1 mb-3">資格</h2>
        <ul class="text-sm list-disc pl-5 space-y-1">
          <li>JLPT N2（2009）</li>
          <li>情報処理産業技士（2016）</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-bold border-b pb-1 mb-3">自己紹介</h2>
        <p class="text-sm leading-relaxed text-gray-700">
          （여기에 자기소개 문구를 넣어주세요. 이후 i18n으로 JA/KR/EN 전환 예정）
        </p>
      </section>
    </main>
  </div>
</template>
