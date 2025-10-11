<template>
  <div class="min-h-screen bg-neutral-900 text-gray-100 flex justify-center items-center p-10">
    <div class="max-w-5xl w-full bg-neutral-800 rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Left Side -->
      <div class="flex flex-col items-center text-center space-y-4">
        <img
          src="@/assets/profile.jpg"
          alt="Profile Photo"
          class="w-40 h-40 rounded-full object-cover shadow-md border border-gray-600"
        />
        <h1 class="text-2xl font-bold">KIM JANGSU</h1>
        <p class="text-sm text-gray-400">Backend / Full-stack Engineer</p>
        <div class="space-y-1">
          <p>Email: <a href="mailto:jangsu7919@gmail.com" class="text-emerald-400 hover:underline">jangsu7919@gmail.com</a></p>
          <p>Location: Osaka, Japan</p>
          <p>
            GitHub:
            <a href="https://github.com/JangsuKim" target="_blank" class="text-emerald-400 hover:underline">
              JangsuKim
            </a>
          </p>
        </div>
      </div>

      <!-- Right Side -->
      <div class="md:col-span-2 space-y-6">
        <!-- Tech Stack -->
        <section>
          <h2 class="text-xl font-semibold border-b border-gray-600 pb-1 mb-2">Tech Stack</h2>
          <p>Java / Spring Boot / PHP / Laravel / Vue.js / MySQL</p>
        </section>

        <!-- Education -->
        <section>
          <h2 class="text-xl font-semibold border-b border-gray-600 pb-1 mb-2">学歴</h2>
          <p>乙支大学 医療経営学科 (2007 - 2011)</p>
        </section>

        <!-- Work Experience -->
        <section>
          <h2 class="text-xl font-semibold border-b border-gray-600 pb-1 mb-2">職務経歴</h2>
          <div class="space-y-2">
            <div>
              <p class="font-semibold">テストテクノロジー株式会社</p>
              <p class="text-sm text-gray-400">GX導入（Laravel + Vue.js）業務管理・不具合対応 (2024年〜現在)</p>
            </div>
            <div>
              <p class="font-semibold">某スポーツ系株式会社</p>
              <p class="text-sm text-gray-400">Bot Prevention / Fingerprint / Lucky Draw (2022.8〜2024.7)</p>
            </div>
          </div>
        </section>

        <!-- Certifications -->
        <section>
          <h2 class="text-xl font-semibold border-b border-gray-600 pb-1 mb-2">資格</h2>
          <ul class="list-disc list-inside">
            <li>JLPT N2 (2009)</li>
            <li>情報処理技術者試験 基本情報技術者 (2016)</li>
          </ul>
        </section>

        <!-- Self Introduction -->
        <section>
          <h2 class="text-xl font-semibold border-b border-gray-600 pb-1 mb-2">自己紹介</h2>
          <p>
            現在はLaravelとVue.jsを使用した業務管理システムの開発に携わっています。  
            日本での勤務経験を通じてチーム開発・コード品質・テスト文化の重要性を深く学びました。  
            今後はよりアーキテクチャ設計やパフォーマンス改善に注力していきたいと考えています。
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
