import { defineConfig } from 'vitepress'

// Warden manual — built into the Pages folder that already serves the landing page.
//
//   docsrc/  (source, this dir)  ->  docs/manual/  (committed build output)
//
// There is no CI: `npm run docs:build` then commit is the whole workflow.
// Screenshots are NOT copied into the build — they are referenced as absolute
// `/screenshots/*.png`, which resolves to docs/screenshots/ on the live site.

const TELEGRAM = 'https://t.me/+9d_deXPfxM81MGJi'
const RELEASES = 'https://github.com/romby1/Warden/releases/latest'
const SITE = 'https://cryptowarden.xyz/'

export default defineConfig({
  base: '/manual/',
  outDir: '../docs/manual',
  cacheDir: './.vitepress/cache',

  title: 'Warden Manual',
  description: 'Documentation for Warden — a crypto monitoring workspace for Windows.',

  // The landing page is dark-only; the manual matches it and drops the toggle.
  appearance: 'force-dark',
  lastUpdated: false,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Ubuntu+Mono:wght@400;700&display=swap'
      }
    ]
  ],

  themeConfig: {
    siteTitle: 'WARDEN',
    // Absolute so the wordmark always returns to the landing page, not /manual/.
    logoLink: SITE,
    outline: { level: [2, 3] },
    search: {
      provider: 'local',
      options: {
        locales: {
          uk: {
            translations: {
              button: { buttonText: 'Пошук', buttonAriaLabel: 'Пошук' },
              modal: {
                displayDetails: 'Показати деталі',
                resetButtonTitle: 'Скинути пошук',
                backButtonTitle: 'Закрити пошук',
                noResultsText: 'Нічого не знайдено',
                footer: {
                  selectText: 'обрати',
                  navigateText: 'навігація',
                  closeText: 'закрити'
                }
              }
            }
          }
        }
      }
    }
  },

  locales: {
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Getting started', link: '/en/getting-started' },
          {
            text: 'Tools',
            items: [
              { text: 'Knives', link: '/en/tools/knives' },
              { text: 'Alerts', link: '/en/tools/alerts' },
              { text: 'Analyzer', link: '/en/tools/analyzer' },
              { text: 'Monitor', link: '/en/tools/monitor' },
              { text: 'Terminal', link: '/en/tools/terminal' }
            ]
          },
          { text: 'Charts', link: '/en/customize/chart-colors' },
          { text: 'Majors', link: '/en/customize/majors' },
          { text: 'FAQ', link: `${SITE}#faq` },
          { text: 'Telegram', link: TELEGRAM }
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Warden',
              items: [
                { text: 'Overview', link: '/en/' },
                { text: 'Getting started', link: '/en/getting-started' }
              ]
            },
            {
              text: 'Tools',
              items: [
                { text: 'Knives', link: '/en/tools/knives' },
                { text: 'Alerts', link: '/en/tools/alerts' },
                { text: 'Analyzer', link: '/en/tools/analyzer' },
                { text: 'Monitor', link: '/en/tools/monitor' },
                { text: 'Terminal', link: '/en/tools/terminal' }
              ]
            },
            {
              text: 'Customization',
              items: [
                { text: 'Charts & drawing', link: '/en/customize/chart-colors' },
                { text: 'Majors overlay', link: '/en/customize/majors' }
              ]
            }
          ]
        },
        docFooter: { prev: 'Previous', next: 'Next' },
        returnToTopLabel: 'Back to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
        langMenuLabel: 'Change language',
        outline: { level: [2, 3], label: 'On this page' },
        footer: {
          message: 'Warden is a monitoring tool. Nothing here is financial advice.',
          copyright: '© 2026 WARDEN'
        }
      }
    },

    uk: {
      label: 'Українська',
      lang: 'uk',
      link: '/uk/',
      themeConfig: {
        nav: [
          { text: 'Початок роботи', link: '/uk/getting-started' },
          {
            text: 'Інструменти',
            items: [
              { text: 'Knives', link: '/uk/tools/knives' },
              { text: 'Alerts', link: '/uk/tools/alerts' },
              { text: 'Analyzer', link: '/uk/tools/analyzer' },
              { text: 'Monitor', link: '/uk/tools/monitor' },
              { text: 'Terminal', link: '/uk/tools/terminal' }
            ]
          },
          { text: 'Графіки', link: '/uk/customize/chart-colors' },
          { text: 'Мажори', link: '/uk/customize/majors' },
          { text: 'FAQ', link: `${SITE}#faq` },
          { text: 'Telegram', link: TELEGRAM }
        ],
        sidebar: {
          '/uk/': [
            {
              text: 'Warden',
              items: [
                { text: 'Огляд', link: '/uk/' },
                { text: 'Початок роботи', link: '/uk/getting-started' }
              ]
            },
            {
              text: 'Інструменти',
              items: [
                { text: 'Knives', link: '/uk/tools/knives' },
                { text: 'Alerts', link: '/uk/tools/alerts' },
                { text: 'Analyzer', link: '/uk/tools/analyzer' },
                { text: 'Monitor', link: '/uk/tools/monitor' },
                { text: 'Terminal', link: '/uk/tools/terminal' }
              ]
            },
            {
              text: 'Кастомізація',
              items: [
                { text: 'Графіки та рисування', link: '/uk/customize/chart-colors' },
                { text: 'Шар мажорів', link: '/uk/customize/majors' }
              ]
            }
          ]
        },
        docFooter: { prev: 'Назад', next: 'Далі' },
        returnToTopLabel: 'Вгору',
        sidebarMenuLabel: 'Меню',
        darkModeSwitchLabel: 'Тема',
        langMenuLabel: 'Змінити мову',
        outline: { level: [2, 3], label: 'На цій сторінці' },
        footer: {
          message: 'Warden — інструмент моніторингу. Ніщо тут не є фінансовою порадою.',
          copyright: '© 2026 WARDEN'
        }
      }
    }
  }
})
