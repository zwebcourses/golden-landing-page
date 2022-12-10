<template>
  <div>
    <CallToAction />
    <About />
    <Features />
    <Benefits />
    <Testimonial />
    <Price />
    <Form />
    <TheFooter />
  </div>
</template>
<script>
export default {
  components: {
    CallToAction: () => import(/* webpackChunkName: 'CallToAction' */ "~/components/CallToAction.vue"),
    About: () => import(/* webpackChunkName: 'About' */ "~/components/About.vue"),
    Features: () => import(/* webpackChunkName: 'Features' */ "~/components/Features.vue"),
    Benefits: () => import(/* webpackChunkName: 'Benefits' */ "~/components/Benefits.vue"),
    Testimonial: () => import(/* webpackChunkName: 'Testimonial' */ "~/components/Testimonial.vue"),
    Price: () => import(/* webpackChunkName: 'Price' */ "~/components/Price.vue"),
    Form: () => import(/* webpackChunkName: 'Form' */ "~/components/Form.vue"),
    Form: () => import(/* webpackChunkName: 'Form' */ "~/components/Form.vue"),
    TheFooter: () => import(/* webpackChunkName: 'TheFooter' */ "~/components/TheFooter.vue"),
  },
  head: {
    title: "جولدن كولاجين",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'البديل الطبيعى لحقن البوتكس'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
};
</script>
