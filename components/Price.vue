<template>
  <section
    id="price"
    class="block bg-price-mobile-cover bg-cover bg-center my-8 pt-8 pb-4 mb-8"
  >
    <div class="w-full mx-auto flex items-center justify-center">
      <div
        class="h-24 md:h-[150px] w-full md:w-[993px] rounded-[20px] md:rounded-[50px] bg-gradient-to-r from-header to-yellow-800 p-1"
      >
        <div
          class="h-full w-full rounded-[20px] md:rounded-[50px] bg-[#1a1b1a] flex justify-center items-center"
        >
          <h5
            class="text-transparent md:text-3xl text-xl text-center font-extrabold bg-clip-text bg-gradient-to-r from-header to-yellow-800 lg:scale-x-125"
          >
            <span class="md:hidden block">
              نشمن لك اختفاء التجاعيد<br />
              بنتيجة لحظية او استرجاع المال
            </span>
            <span class="hidden md:block">
              نشمن لك اختفاء التجاعيد بنتيجة لحظية او استرجاع المال
            </span>
          </h5>
        </div>
      </div>
    </div>
    <div
      class="w-full mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start px-4 mt-8 md:my-24 relative md:overflow-visible overflow-hidden"
    >
      <div class="w-full md:w-1/3">
        <h2 class="w-full text-5xl md:text-6xl text-white text-center">سعر المنتج</h2>
        <div class="flex items-center justify-center mt-4">
          <span class="text-5xl md:text-6xl text-white ml-2 strikethrough">٤٠٠</span>
          <p class="text-xl md:text-3xl text-gray-300">ريال سعودي</p>
        </div>
        <div class="flex items-center justify-center mt-4">
          <h2 class="text-3xl text-white">عرض حصري</h2>
        </div>
        <div class="flex items-center justify-center mt-4">
          <h2 class="text-5xl md:text-6xl text-white ml-2">٣٠٠</h2>
          <p class="text-xl md:text-3xl text-gray-300">ريال سعودي</p>
        </div>

        <div class="hidden mx-auto w-1/2 md:flex md:items-center md:justify-center mt-4">
          <CTAButton />
        </div>
      </div>
      <div
        class="w-[129%] mx-auto -mt-[100px] -mr-[85px] md:absolute md:top-[-488px] md:left-[0px] md:w-[70%]"
      >
        <nuxt-img
          src="/img/section_6/bottels_with_stamp1.png"
          alt="bottels"
          format="webp"
          sizes="md:100vw sm:150vw"
          style="pointer-events: none;"
          onContextMenu="return false;"
        />
      </div>
    </div>
  </section>
</template>
<script>
import CTAButton from "~/components/CTAButton.vue";
export default {
  components: {
    CTAButton,
  },
};
</script>
<style>
.strikethrough {
  position: relative;
}
.strikethrough:before {
  position: absolute;
  content: "";
  left: 0;
  top: 45%;
  right: 0;
  border-top: 5px solid;
  border-color: red;
  -webkit-transform: rotate(-25deg);
  -moz-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  -o-transform: rotate(-25deg);
  transform: rotate(-25deg);
}
</style>
