import { defineUserConfig } from 'vuepress'

import theme from './theme.js'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Shimakaze.Org',
      description: 'Shimakaze.Org',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Shimakaze.Org',
      description: 'Shimakaze.Org',
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
})
