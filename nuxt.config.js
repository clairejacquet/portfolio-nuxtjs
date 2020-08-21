
export default {
  // mode: 'universal',
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'Portfolio Claire',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'This is my lovely portfolio' }
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/ad28620b89.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/bootstrap-grid.css',
    '@/assets/scss/main.scss'

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  generate: {
    routes: function () {
      return [
        'projects/portfolio-nuxt',
        'projects/thenoisewhoruns-wordpress',
        'projects/dentist',
        'projects/bobuncafe',
        'projects/strategies-obliques',
        'projects/teesandtigers-nl',
        'projects/teesandtigers',
        'projects/frenchstranding',
        'projects/posters',
        'projects/kawaii-icecream',
        'projects/wordpress',
        'projects/airbnb'

        // 'portfolio-nuxt',
        // 'portfolio-dentist',
        // 'portfolio-bobuncafe',
        // 'portfolio-strategies-obliques',
        // 'portfolio-teesandtigers-nl',
        // 'portfolio-teesandtigers',
        // 'portfolio-frenchstranding',
        // 'portfolio-posters',
        // 'portfolio-kawaii-icecream',
        // 'portfolio-wordpress',
        // 'portfolio-airbnb'
      ]
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
