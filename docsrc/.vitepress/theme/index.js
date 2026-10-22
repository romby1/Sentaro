// theme-without-fonts, not theme: the default theme bundles Inter + JetBrains
// Mono (~650KB of woff2) which custom.css overrides with Geist / Geist Mono
// from Google Fonts, as on sentaro.trade. Since the build output is committed to git, shipping fonts
// nothing references is pure weight.
import DefaultTheme from 'vitepress/theme-without-fonts'
import { h } from 'vue'
import Screenshot from './Screenshot.vue'
import './custom.css'

// The site's nav ends in Open app and Download for Windows. VitePress has no
// themeConfig entry for buttons, so they go in via the nav-bar-content-after slot.
const navButton = (cls, href, label, external) =>
  h('a', { class: `sentaro-btn ${cls}`, href, ...(external ? { target: '_blank', rel: 'noreferrer' } : {}) }, label)

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => [
        navButton('ghost', 'https://github.com/romby1/Sentaro/releases/latest', 'Download', true),
        navButton('primary', 'https://app.sentaro.trade/', 'Open app')
      ]
    })
  },
  enhanceApp({ app }) {
    app.component('Screenshot', Screenshot)
  }
}
