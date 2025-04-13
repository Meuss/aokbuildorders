import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  base: '/aokbuildorders/',
  title: 'Aok build orders',
  description: 'wololo',

  theme: defaultTheme({
    logo: '/images/aok.png',

    navbar: [
      '/',
    ],
  }),

  bundler: viteBundler(),
})
