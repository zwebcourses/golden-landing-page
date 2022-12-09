<template>
 <!-- border-2 border-x-transparent border-b-transparent border-t-yellow-500 -->
  <section
    id="form"
    class="block bg-form-mobile-cover bg-cover bg-center md:p-8 md:flex md:justify-center md:items-center"
  >
    <div class="block p-6 shadow-lg w-full md:w-1/3">
      <form class="bg-black p-6 rounded-3xl border-4 border-header">
        <div class="text-header">
          <h6
            class="text-center text-2xl font-bold bg-clip-text bg-gradient-to-r from-header to-yellow-800 lg:scale-x-125 mb-4"
          >
            سجل بياناتك لطلب المنتج
          </h6>
        </div>
        <div class="form-group mb-6 flex justify-center">
          <input
            type="email"
            class="form-control block w-3/4 px-3 py-0.5 text-base font-bold text-black bg-white bg-clip-padding border border-solid border-header rounded-md transition ease-in-out m-0 focus:text-header focus:bg-black focus:border-header focus:outline-none"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group mb-6 flex justify-center">
          <input
            type="email"
            class="form-control block w-3/4 px-3 py-0.5 text-base font-bold text-black bg-white bg-clip-padding border border-solid border-header rounded-md transition ease-in-out m-0 focus:text-header focus:bg-black focus:border-header focus:outline-none"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="w-full flex justify-center">
          <button
            type="submit"
            class="w-1/2 px-6 py-2.5 bg-header text-black font-bold text-lg leading-tight rounded-md shadow-md focus:bg-black focus:text-header focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:text-header active:shadow-lg transition duration-150 ease-in-out hover:opacity-100"
          >
            اطلب الأن
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
