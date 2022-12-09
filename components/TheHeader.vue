<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-white lg:px-12 shadow border-solid border-t-2 border-header bg-header relative z-30"
  >
    <div
      class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 lg:pb-0"
    >
      <div class="flex items-center flex-shrink-0 text-gray-800">
        <router-link to="/">
          <img
            class="w-[40px] md:w-[80px]"
            src="~/assets/img/section_1/ultimate_logo.png"
            alt="Golden_Collagen"
          />
        </router-link>
      </div>
      <!-- <div class="block lg:hidden">
        <button
          id="nav"
          class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> -->
    </div>

    <div
      class="menu hidden w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8"
    >
      <div class="md:text-xl font-bold text-black lg:flex-grow">
        <a
          href="#about-product"
          class="clickable block mt-4 lg:inline-block lg:mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          عن المنتج
        </a>
        <a
          href="#features"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          مميزات المنتج
        </a>
        <a
          href="#benefits"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          خصائص المنتج
        </a>
        <a
          href="#testimonial"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          التقييم
        </a>
        <a
          href="#price"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          السعر
        </a>
        <a
          href="#form"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          الطلب
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // showMenu: false,
    };
  },
};
</script>
