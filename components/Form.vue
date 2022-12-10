<template>
  <div>
    <Loader v-if="loading" />
    <section
      id="form"
      class="block bg-form-mobile-cover bg-cover bg-center md:p-8 md:flex md:justify-center md:items-center"
    >
      <div class="block p-6 shadow-lg w-full md:w-1/3">
        <form
          id="my-form"
          class="bg-black p-6 rounded-[63px] border-4 border-header"
          method="POST"
          v-on:submit.prevent="onSubmit"
        >
          <div class="text-header">
            <h6
              class="text-center text-2xl font-bold bg-clip-text bg-gradient-to-r from-header to-yellow-800 lg:scale-x-125 mb-4"
            >
              سجل بياناتك لطلب المنتج
            </h6>
          </div>
          <div class="form-group mb-6 flex justify-center">
            <input
              type="text"
              class="form-control block w-3/4 px-3 py-0.5 text-base font-bold text-black bg-white bg-clip-padding border border-solid border-header rounded-md transition ease-in-out m-0 focus:text-header focus:bg-black focus:border-header focus:outline-none"
              id="name"
              name="Name"
              v-model="formData.Name"
              aria-describedby="name"
              placeholder="من فضلك اكتب اسمك"
              required
            />
          </div>
          <div class="form-group mb-6 flex justify-center w-3/4 mx-auto">
            <input
              type="text"
              class="form-control block w-full px-3 py-0.5 text-base font-bold text-black bg-white bg-clip-padding border border-solid border-header rounded-md transition ease-in-out m-0 focus:text-header focus:bg-black focus:border-header focus:outline-none"
              id="phone"
              name="Phone"
              v-model="formData.Phone"
              aria-describedby="phone"
              placeholder="من فضلك ادخل رقم الجوال"
              required
            />
            <select disabled>
              <option value="+966">966</option>
            </select>
          </div>
          <div class="w-full flex justify-center">
            <input
              type="submit"
              value="اطلب الأن"
              class="w-1/2 px-6 py-2.5 bg-header text-black font-bold text-lg leading-tight rounded-md shadow-md focus:bg-black focus:text-header focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:text-header active:shadow-lg transition duration-150 ease-in-out hover:opacity-100"
            />
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    Loader: () => import(/* webpackChunkName: 'Loader' */ "~/components/Loader.vue"),
  },
  data: () => ({
    loading: false,
    formData: {
      Name: "",
      Phone: "",
    },
  }),
  methods: {
    onSubmit() {
      this.loading = true;
      let data = new FormData();
      data.append('Name', this.formData.Name)
      data.append('Phone', `+966 ${this.formData.Phone}`)
      let requestOptions = {
        method: "POST",
        body: data,
      };
      fetch(
        "https://script.google.com/macros/s/AKfycbzlx58hlnA2vssOHPjw_qebuwoDoB18OTz2DtOUVV3wciDaiq8V-WPTiX0QTeKyqQcT-w/exec",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          this.loading = false;
          this.$router.push({ name: "Thanks" });
        })
        .catch((e) => {
          this.loading = false;
          alert("هناك خلل ما فى السيرفر!");
        });

      // =====================================
      // const form = document.getElementById("my-form");
      // const data = new FormData(form);
      // console.log(form);
      // fetch(
      //   "https://script.google.com/macros/s/AKfycbzlx58hlnA2vssOHPjw_qebuwoDoB18OTz2DtOUVV3wciDaiq8V-WPTiX0QTeKyqQcT-w/exec",
      //   {
      //     method: "POST",
      //     body: data,
      //   }
      // )
      //   .then(() => {
      //     this.loading = false
      //     this.$router.push({ name: "Thanks" });
      //   })
      //   .catch((e) => {
      //     this.loading = false
      //     alert("هناك خلل ما فى السيرفر!");
      //   });
    },
  },
};
</script>
