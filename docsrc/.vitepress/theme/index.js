// theme-without-fonts, not theme: the default theme bundles Inter + JetBrains
// Mono (~650KB of woff2) which custom.css overrides with Ubuntu / Ubuntu Mono
// from Google Fonts. Since the build output is committed to git, shipping fonts
// nothing references is pure weight.
import DefaultTheme from 'vitepress/theme-without-fonts'
import { h } from 'vue'
import Screenshot from './Screenshot.vue'
import './custom.css'

// The landing page's nav ends in a Download button. VitePress has no themeConfig
// entry for that, so it goes in via the nav-bar-content-after slot. It points at
// the releases page — the same place the landing page's button falls back to.
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () =>
        h(
          'a',
          {
            class: 'warden-download',
            href: 'https://github.com/romby1/Warden/releases/latest',
            target: '_blank',
            rel: 'noreferrer'
          },
          'Download'
        )
    })
  },
  enhanceApp({ app }) {
    app.component('Screenshot', Screenshot)
  }
}
