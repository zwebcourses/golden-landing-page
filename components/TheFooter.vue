<template>
  <footer class="p-4 bg-header w-full flex flex-col justify-center items-center md:flex-row">
    <div class="w-full md:w-5/6">
      <ul class="md:mx-auto md:w-2/3 flex justify-between items-center mt-0">
        <li class="text-xs md:text-xl font-bold text-black hover:text-blue-400">
          سياسة الخصوصية
        </li>
        <li class="text-xs md:text-xl font-bold text-black hover:text-blue-400">
          سياسة الشحن
        </li>
        <li class="text-xs md:text-xl font-bold text-black hover:text-blue-400">
          من نحن
        </li>
        <li class="text-xs md:text-xl font-bold text-black hover:text-blue-400">
          الشروط والاحكام
        </li>
      </ul>
    </div>
    <div class="w-1/6 mt-2 mx-auto">
    <a href="https://instagram.com/goldencollagensa?igshid=YmMyMTA2M2Y=" target="_blank">
      <nuxt-img  format="webp"
      class="w-[30px]"
        src="/img/instagram.png"
        alt="instagram"
        style="pointer-events: none"
        onContextMenu="return false;"
      />
    </a>
    </div>
  </footer>
</template>
