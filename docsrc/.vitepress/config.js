import { defineConfig } from 'vitepress'

// Sentaro manual — built into the Pages folder that already serves the landing page.
//
//   docsrc/  (source, this dir)  ->  docs/manual/  (committed build output)
//
// There is no CI: `npm run docs:build` then commit is the whole workflow.
// Screenshots are NOT copied into the build — they are referenced as absolute
// `/screenshots/*.png`, which resolves to docs/screenshots/ on the live site.

const TELEGRAM = 'https://t.me/sentaro_trade'
const RELEASES = 'https://github.com/romby1/Sentaro/releases/latest'
const SITE = 'https://sentaro.trade/'

export default defineConfig({
  base: '/manual/',
  outDir: '../docs/manual',
  cacheDir: './.vitepress/cache',

  title: 'Sentaro Manual',
  description: 'Documentation for Sentaro — a crypto monitoring workspace for Windows.',

  // The landing page is dark-only; the manual matches it and drops the toggle.
  appearance: 'force-dark',
  lastUpdated: false,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    // Link previews share the landing page's card (docs/og.png, served from the site root).
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Sentaro' }],
    ['meta', { property: 'og:image', content: `${SITE}og.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${SITE}og.png` }],
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

  // Per-page preview text, so a shared /tools/ticks link reads "Ticks", not just the site title.
  transformHead({ pageData, siteData }) {
    const title = pageData.title ? `${pageData.title} — Sentaro Manual` : siteData.title
    const description = pageData.description || siteData.description
    return [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }]
    ]
  },

  themeConfig: {
    siteTitle: 'SENTARO',
    // Absolute so the wordmark always returns to the landing page, not /manual/.
    logoLink: SITE,
    outline: { level: [2, 3] },
    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
              modal: {
                displayDetails: 'Показать детали',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Ничего не найдено',
                footer: {
                  selectText: 'выбрать',
                  navigateText: 'навигация',
                  closeText: 'закрыть'
                }
              }
            }
          },
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
              { text: 'Ticks', link: '/en/tools/ticks' },
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
              text: 'Sentaro',
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
                { text: 'Ticks', link: '/en/tools/ticks' },
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
          message: 'Sentaro is a monitoring tool. Nothing here is financial advice.',
          copyright: '© 2026 SENTARO'
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
              { text: 'Ticks', link: '/uk/tools/ticks' },
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
              text: 'Sentaro',
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
                { text: 'Ticks', link: '/uk/tools/ticks' },
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
          message: 'Sentaro — інструмент моніторингу. Ніщо тут не є фінансовою порадою.',
          copyright: '© 2026 SENTARO'
        }
      }
    },

    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        nav: [
          { text: 'Начало работы', link: '/ru/getting-started' },
          {
            text: 'Инструменты',
            items: [
              { text: 'Knives', link: '/ru/tools/knives' },
              { text: 'Alerts', link: '/ru/tools/alerts' },
              { text: 'Analyzer', link: '/ru/tools/analyzer' },
              { text: 'Monitor', link: '/ru/tools/monitor' },
              { text: 'Ticks', link: '/ru/tools/ticks' },
              { text: 'Terminal', link: '/ru/tools/terminal' }
            ]
          },
          { text: 'Графики', link: '/ru/customize/chart-colors' },
          { text: 'Мажоры', link: '/ru/customize/majors' },
          { text: 'FAQ', link: `${SITE}#faq` },
          { text: 'Telegram', link: TELEGRAM }
        ],
        sidebar: {
          '/ru/': [
            {
              text: 'Sentaro',
              items: [
                { text: 'Обзор', link: '/ru/' },
                { text: 'Начало работы', link: '/ru/getting-started' }
              ]
            },
            {
              text: 'Инструменты',
              items: [
                { text: 'Knives', link: '/ru/tools/knives' },
                { text: 'Alerts', link: '/ru/tools/alerts' },
                { text: 'Analyzer', link: '/ru/tools/analyzer' },
                { text: 'Monitor', link: '/ru/tools/monitor' },
                { text: 'Ticks', link: '/ru/tools/ticks' },
                { text: 'Terminal', link: '/ru/tools/terminal' }
              ]
            },
            {
              text: 'Настройка',
              items: [
                { text: 'Графики и рисование', link: '/ru/customize/chart-colors' },
                { text: 'Слой мажоров', link: '/ru/customize/majors' }
              ]
            }
          ]
        },
        docFooter: { prev: 'Назад', next: 'Далее' },
        returnToTopLabel: 'Наверх',
        sidebarMenuLabel: 'Меню',
        darkModeSwitchLabel: 'Тема',
        langMenuLabel: 'Сменить язык',
        outline: { level: [2, 3], label: 'На этой странице' },
        footer: {
          message: 'Sentaro — инструмент мониторинга. Ничто здесь не является финансовой рекомендацией.',
          copyright: '© 2026 SENTARO'
        }
      }
    }
  }
})
