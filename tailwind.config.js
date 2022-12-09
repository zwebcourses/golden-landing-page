/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'main-bg': 'var(--main-bg)',
        'header': 'var(--header-bg)',
        'section2-color': 'var(--section2-color)'
      },
      backgroundImage: {
        'cta-cover': "url('~@/assets/img/section_1/background.png')",
        'cta-mobile-cover': "url('~@/assets/img/mobile/background.png')",
        'about-mobile-cover': "url('~@/assets/img/section_2/background.png')",
        'features-mobile-cover': "url('~@/assets/img/section_3/background.png')",
        'benefits-mobile-cover': "url('~@/assets/img/section_4/background.png')",
        'testimonial-mobile-cover': "url('~@/assets/img/section_5/background.png')",
        'price-mobile-cover': "url('~@/assets/img/section_6/background.png')",
        'form-mobile-cover': "url('~@/assets/img/section_7/background.png')",
        'button': "url('~@/assets/img/section_1/bottom.png')",
        'frame': "url('~@/assets/img/mobile/frame.png')",
      },
    }
  },
  plugins: [],
}