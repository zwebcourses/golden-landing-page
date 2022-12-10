<template>
  <section
    id="benefits"
    class="bg-benefits-mobile-cover md:bg-benefits-cover bg-cover bg-center bg-no-repeat my-8"
  >
    <Title classes="h-16 md:h-[150px] w-3/4 md:w-[838px] z-10" radius="rounded-[20px]"
      >خصائص المنتج</Title
    >
    <div
      class="md:w-2/3 md:mx-auto text-white w-full flex flex-row flex-wrap items-center justify-center px-4 mb-8"
    >
      <div
        class="md:p-8 w-3/4 md:w-1/3 md:flex md:justify-center p-2 rounded-xl border border-black md:border-transparent"
        v-for="(benefit, i) in benefits"
        :key="i"
      >
        <div
          class="md:w-full bg-white rounded-xl"
          style="box-shadow: inset 0px -20px 3px 0px black"
        >
          <nuxt-img
            class="rounded-lg object-cover h-32 w-96"
            :src="`/img/mobile/benefits/${benefit.img}`"
            :alt="benefit.alt"
            preset="avatar"
            style="pointer-events: none"
            onContextMenu="return false;"
          />
          <div class="p-5 h-48">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
              {{ benefit.text }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    benefits: [
      {
        img: "benefit_1.jpeg",
        alt: "benefit_1",
        text: "ازالة فورية لتجاعيد الوجه خلال دقيقتين ومعالجة 90% خلال 3 أشهر فقط",
      },
      {
        img: "benefit_2.jpeg",
        alt: "benefit_2",
        text: "اخفاء ومعالجة تجاعيد الرقبة وشد اجزاء الجلد المترهله",
      },
      {
        img: "benefit_3.jpeg",
        alt: "benefit_3",
        text: "ازالة بقع وتحاعيد اليد ومعالجتها",
      },
      {
        img: "benefit_4.jpeg",
        alt: "benefit_4",
        text: "يقى من الشيخوخة المبكرة ويمنح البشرة ترطيبا فائقا",
      },
      {
        img: "benefit_5.jpeg",
        alt: "benefit_5",
        text: "يسرع وتيرة التئام الجروح ويقلل اثار الندبات",
      },
      {
        img: "benefit_6.jpeg",
        alt: "benefit_6",
        text: "ملئ حفر الوجه وترهلات الجلد بشكل دائم",
      },
    ],
  }),
};
</script>
