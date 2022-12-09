<template>
  <div class="mx-auto flex items-center justify-center px-4 mb-8">
    <div style="border-radius: 50px;" :class="classes" class="w-full bg-gradient-to-r from-header to-yellow-800 p-1">
      <div style="border-radius: 50px;" class="h-full w-full bg-black flex justify-center items-center">
        <h2
          class="text-transparent md:text-7xl text-3xl text-center uppercase font-bold bg-clip-text bg-gradient-to-r from-header to-yellow-800 lg:scale-x-125"
        >
        <slot />
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      Type: String,
      default: () => "",
    },
  },
};
</script>
