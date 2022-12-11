<template>
  <div>
    <section
      id="form"
      class="block bg-form-mobile-cover bg-cover bg-center md:p-8 md:flex md:justify-center md:items-center"
    >
      <div class="block p-6 shadow-lg w-full md:w-1/3">
        <Form />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    Form: () => import(/* webpackChunkName: 'Form' */ "~/components/Form.vue"),
  },
};
</script>
