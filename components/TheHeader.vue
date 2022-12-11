<template>
  <nav
    class="flex items-center justify-between flex-wrap md:px-12 border-header bg-header relative z-30"
  >
    <div class="flex justify-between w-auto w-full pl-6 pr-2 pb-0">
      <div class="flex items-center">
        <router-link to="/">
          <nuxt-img
            class="w-[40px] md:w-[80px]"
            src="/img/section_1/ultimate_logo.png"
            alt="Golden_Collagen"
            style="pointer-events: none"
            onContextMenu="return false;"
          />
        </router-link>
      </div>
      <div class="menu w-auto flex-grow flex items-center md:px-8">
        <div class="md:text-xl font-bold text-black flex-grow">
          <a
            href="#about-product"
            class="inline-block md:hidden p-2 clickable text-[0.5rem] hover:text-header rounded hover:bg-black mr-2"
          >
            عن المنتج
          </a>
          <a
            href="#how-to-use-product"
            class="inline-block md:hidden p-2 clickable text-[0.5rem] hover:text-header rounded hover:bg-black mr-2"
          >
            طريقة الاستخدام
          </a>
          <a
            href="#testimonial"
            class="inline-block md:hidden p-2 clickable text-[0.5rem] hover:text-header rounded hover:bg-black mr-2"
          >
            اراء المستخدمين
          </a>
          <a
            href="#about-product"
            class="hidden md:inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
          >
            عن المنتج
          </a>
          <a
            href="#features"
            class="hidden md:inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
          >
            مميزات المنتج
          </a>
          <a
            href="#benefits"
            class="hidden md:inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
          >
            خصائص المنتج
          </a>
          <a
            href="#how-to-use-product"
            class="hidden md:inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
          >
            طريقة الاستخدام
          </a>
          <a
            href="#testimonial"
            class="hidden md:inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
          >
            التقييم
          </a>
          <a
            href="#price"
            class="hidden md:inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
          >
            السعر
          </a>
          <a
            href="#form"
            class="hidden md:inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
          >
            الطلب
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    // showMenu: false,
  }),
};
</script>
