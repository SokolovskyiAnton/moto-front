
export default defineNuxtConfig({
    debug: true,
    ssr: true,
    srcDir: 'src/',
    runtimeConfig: {
        public: {
            apiBaseUrl: 'http://localhost:8000/api',
        }
    },
    components: true,

    css: [
        '~/assets/scss/main.scss',
        'vuetify/lib/styles/main.sass',

    ],

    build: {
        transpile: [
            'vuetify'
        ]
    },
    modules: [
        ['@pinia/nuxt', {
            autoImports: [
                // automatically imports `defineStore`
                'defineStore', // import { defineStore } from 'pinia'
                // automatically imports `defineStore` as `definePiniaStore`
                ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
            ]
        }],
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})