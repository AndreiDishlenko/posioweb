// import * as bootstrap from 'bootstrap';
// import { Modal } from "bootstrap";

// https://nuxt.com/docs/api/configuration/nuxt-config

// import yaml from 'js-yaml'; 
// import fs from 'fs'; 
// import path from 'path';

// const loadLocale = (lang) => { 
//     const filePath = path.resolve(__dirname, `./locales/${lang}.yaml`);
//     return yaml.load(fs.readFileSync(filePath, 'utf8')) 
// }

export default defineNuxtConfig({
    compatibilityDate: '2024-10-08',
    devServer: {
        host: '0.0.0.0', // Это позволит серверу слушать все IP-адреса
        port: 3000,      // Порт по умолчанию
        https: false
        // {
        //     key: './.osp/localhost-key.pem',    // Путь к вашему приватному ключу
        //     cert: './.osp/localhost-cert.crt',  // Путь к вашему сертификату
        // },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern',
                    additionalData: `@use "@/assets/styles/variables";`
                },
            },
        },
    }, 
    runtimeConfig: {
        // Server vars
        TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
        // Client vars
        public: {
            apiUrl: process.env.URL,
            phone: process.env.PHONE,
            email: process.env.EMAIL,
            tg:  process.env.TG
        },
    },
    nitro: {
        logLevel: 4,
        debug: true,
    },
    // build: {
    // //     parallel: false,
    // //     cache: false, // Отключение кэша для избежания конфликтов
    // //     hardSource: false, // Может помочь избежать конфликтов с памятью
    //     extend(config) {
    //         config.module.rules.push({
    //             test: /locales\/.*\.ya?ml$/, // <---
    //             type: 'json',
    //             use: 'yaml-loader'
    //         })
    //     }
    // },
    // webpack: {
    //     rules: [
    //       {
    //         test: /\.ya?ml$/,
    //         use: 'yaml-loader',
    //       },
    //     ],
    // },
    // image: {
    //     provider: 'ipx', // провайдер IPX
    //     ipx: {
    //         dir: 'public', // директория, где находятся изображения
    //     },
    // },
    devtools: { enabled: false },
    ssr: true,
    css: ["bootstrap/dist/css/bootstrap.min.css", '~/assets/styles/_main.scss'],
    app: {
        head: {
            titleTemplate: '%s | POSIO',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            // meta: [{name: 'robots', content: 'index, follow'}],
            bodyAttrs: {class: 'body'},
        }
    },
    modules: ['@nuxt/image', '@nuxtjs/google-fonts', '@nuxt/icon', '@nuxtjs/i18n'],
    googleFonts: {
        families: {
            Montserrat: {
                wght:[300, 400, 500, 600, 900]
            }
        }
    },
    icon: {
        size: '24px', 
        class: 'icon',
        mode: 'css',
        serverBundle: {
            collections: ['emojione'] 
            // 'ri', 'stash', 'material-symbols-light', 'logos'
        }
        // aliases: {
        //   'nuxt': 'logos:nuxt-icon',
        // },
        // customCollections: [
        //     {
        //       prefix: 'myicons',
        //       dir: './assets/myicons'
        //     },
        // ],
    },
    i18n: {
        baseUrl: process.env.URL, 
        strategy: 'prefix_except_default', 
        lazy: true,
        langDir: 'locales/',
        locales: [
            {
                code: 'uk',
                name: 'Українська',
                language: 'uk-UA',
                file: 'uk.json',
                icon: 'emojione:flag-for-ukraine',
                
            },
            {
                code: 'en',
                name: 'English',
                language: 'en',
                file: 'ru.json',
                icon: 'emojione:flag-for-united-kingdom',
                isCatchallLocale: true
            },
            {
                code: 'ru',
                name: 'Русский',
                language: 'ru-RU',
                file: 'ru.json',
                icon: 'emojione:flag-for-russia',
                isCatchallLocale: true
            }
        ],     
        defaultLocale: 'uk',        
        vueI18n: './i18n.config.ts',
        detectBrowserLanguage: false,
        // {
        //     useCookie: true,
        //     cookieKey: 'i18n_redirected',
        //     alwaysRedirect: false,
        //     fallbackLocale: 'en'
        // },

    }
})