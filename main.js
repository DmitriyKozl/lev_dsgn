// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/style/style.scss';
import DefaultLayout from '~/layouts/Default.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faSass, faJs,faVuejs,faCss3,faHtml5,faBootstrap,faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;

export default function (Vue) {
  library.add( faSass, faJs,faVuejs,faCss3,faHtml5,faBootstrap,faGithub,faLinkedin,faInstagram )

  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  
}