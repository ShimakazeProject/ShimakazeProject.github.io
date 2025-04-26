import { hopeTheme } from 'vuepress-theme-hope'

import { enNavbar, zhNavbar } from './navbar/index.js'
import { enSidebar, zhSidebar } from './sidebar/index.js'

export default hopeTheme({
  hostname: 'https://shimakaze.org',

  author: {
    name: '舰队的偶像-岛风酱!',
    url: 'https://blog.shimakaze.dev',
  },

  favicon: '/favicon.ico',

  logo: '/logo.png',

  repo: 'ShimakazeProject/ShimakazeProject.github.io',

  docsDir: 'docs',

  docsBranch: 'master',

  pageInfo: [
    'Author',
    'Date',
    'Original',
    'Category',
    'Tag',
    'ReadingTime',
    'Word',
  ],

  locales: {
    '/': {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer:
        '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。',

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },
    '/en/': {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer:
        '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons license" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International</a>.',

      displayFooter: true,

      metaLocales: {
        editLink: 'Edit this page on GitHub',
      },
    },
  },

  markdown: {
    gfm: true,
    hint: true,
    alert: true,
    align: true,
    attrs: true,
    sup: true,
    sub: true,
    footnote: true,
    mark: true,
    tasklist: true,
    component: true,
    mermaid: true,
    spoiler: true,
    breaks: true,
    tabs: true,
    codeTabs: true,
    figure: true,
    highlighter: {
      type: 'shiki',
      lineNumbers: true,
      removeLastLine: true,
      preWrapper: true,
      collapsedLines: true,
      themes: {
        light: 'light-plus',
        dark: 'dark-plus',
      },
      notationDiff: true,
      notationFocus: true,
      notationHighlight: true,
      notationErrorLevel: true,
      notationWordHighlight: true,
      whitespace: true,
    },
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    obsidianImgSize: true,
    include: true,
    linkify: true,
    linksCheck: true,
  },

  plugins: {
    icon: {
      assets: 'iconify',
      prefix: 'fa6-solid:',
    },

    // docsearch: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },

    git: {
      createdTime: true,
      updatedTime: true,
      contributors: true,
      transformContributors: contributors =>
        Object.values(
          contributors.reduce(
            (a, b) => {
              a[b.email] = b
              return a
            },
            {} as Record<string, (typeof contributors)[0]>,
          ),
        ),
    },

    copyCode: {},

    copyright: {
      global: true,
      license: 'CC-BY-NC-SA 4.0',
    },

    comment: {
      provider: 'Giscus',
      repo: 'ShimakazeProject/ShimakazeProject.github.io',
      repoId: 'MDEwOlJlcG9zaXRvcnkyOTQwODI2NjU=',
      category: 'Comment',
      categoryId: 'DIC_kwDOEYdYac4CpehI',
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    components: {
      components: [
        // 'ArtPlayer',
        'Badge',
        'BiliBili',
        // 'CodePen',

        'PDF',
        'Share',
        // 'StackBlitz',
        'SiteInfo',
        'VPBanner',
        'VPCard',
        // 'VidStack',
        // 'XiGua',
      ],
    },

    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
})
