<template>
  <!-- 페이지 배경 + 카드 래퍼 (샘플처럼 흰 바탕) -->
  <div class="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
    <div class="w-full max-w-[820px] bg-white border border-gray-300 shadow-sm rounded-md p-10">

      <!-- 상단 타이틀 + 얇은 선 -->
      <header class="text-center mb-8">
        <h1 class="text-3xl font-extrabold tracking-wider">RESUME</h1>
        <div class="mt-3 h-px bg-neutral-400"></div>
      </header>

     <!-- 🔴 프로필 박스 교체본 -->
    <section class="border border-neutral-300 p-6">
    <div
        class="w-full"
        style="display:grid; grid-template-columns: 200px 1fr; gap:28px;"
    >
        <!-- 좌: 사진(샘플 감성: 살짝 작은 직사각형) -->
        <div class="flex justify-center items-start">
        <img
            src="@/assets/profile.jpg"
            alt="프로필"
            class="w-[150px] h-[190px] object-cover rounded-sm border border-gray-200"
        />
        </div>

        <!-- 우: 이름 + 정보표 -->
        <div>
        <!-- 이름: 더 크고 굵게, 행간 타이트 -->
        <h2 class="text-[34px] leading-[1.05] font-semibold mb-3">KIM JANGSU</h2>

        <!-- 표: 라벨 고정폭, 행간 조정 -->
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


      <!-- 아래 섹션들은 나중에 추가 -->
    </div>
  </div>
</template>
