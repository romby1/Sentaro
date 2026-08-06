<script setup>
// Screenshots are shared with the landing page and live at docs/screenshots/.
//
// The src is bound (`:src`) rather than written as a literal attribute on
// purpose: a literal `/screenshots/x.png` is treated by Vite as a build-time
// asset import, which fails because the file sits outside docsrc/. A bound
// value is emitted verbatim, giving a site-root URL that is NOT prefixed with
// the '/manual/' base — which is exactly right, since the images are served
// from the Pages root alongside index.html.
defineProps({
  // File name in docs/screenshots/, without the .png extension.
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  caption: { type: String, default: '' }
})
</script>

<template>
  <figure class="warden-shot">
    <img :src="`/screenshots/${src}.png`" :alt="alt" loading="lazy" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>
