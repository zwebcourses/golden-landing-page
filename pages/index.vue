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
    Loader: () => import(/* webpackChunkName: 'Loader' */ "~/components/Loader.vue"),
    CallToAction: () => import(/* webpackChunkName: 'CallToAction' */ "~/components/CallToAction.vue"),
    About: () => import(/* webpackChunkName: 'About' */ "~/components/About.vue"),
    Features: () => import(/* webpackChunkName: 'Features' */ "~/components/Features.vue"),
    Benefits: () => import(/* webpackChunkName: 'Benefits' */ "~/components/Benefits.vue"),
    Testimonial: () => import(/* webpackChunkName: 'Testimonial' */ "~/components/Testimonial.vue"),
    Price: () => import(/* webpackChunkName: 'Price' */ "~/components/Price.vue"),
    Form: () => import(/* webpackChunkName: 'Form' */ "~/components/Form.vue"),
    Form: () => import(/* webpackChunkName: 'Form' */ "~/components/Form.vue"),
    TheFooter: () => import(/* webpackChunkName: 'TheFooter' */ "~/components/TheFooter.vue"),
  }
};
</script>
