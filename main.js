// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/style/style.scss';
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head, router, isServer }) {
  Vue.component('Layout', DefaultLayout)
}
