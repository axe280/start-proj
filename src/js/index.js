// helpers
import { debounce } from './helpers/debounce.js';

// ui
import { changeSelectPlaceholderColor } from './ui/changeSelectPlaceholderColor.js';
import { removeDocumentScrollBlocker } from './ui/documentScrollBlocker.js';
import { setDiffViewportVariable } from './ui/setDiffViewportVariable.js';

// vue
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Vuelidate);

import App from './components/App.vue';

if (document.getElementById('app')) {
  const router = new VueRouter({
    mode: 'history',
  });

  // new Vue({ router }).$mount('#app');
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');
}

// koatis blade
// if (document.getElementById('productsApp')) {
//   Vue.component('products-component', require("./components/Products.vue").default)
//   const router = new VueRouter({
//     mode: 'history',
//   })

//   new Vue({ router }).$mount('#productsApp')
// }

// modules
import { initActiveNavigationSection } from './modules/activeNavigationSection.js';
import { removeClassOutsideHandler } from './modules/removeClassOutsideHandler.js';
import { initPhotoSwipeFromDOM } from './modules/lightbox.js';
import { scrollWrapperBlocks } from './modules/scrollWrapperBlocks.js';
import { initAnimationScroll } from './modules/animation.js';
import { initAnimationInput } from './modules/animationInputs.js';
import { initHeaderScripts } from './modules/header.js';
import { scrollIntoView } from './modules/scrollIntoView.js';
import { initCopyBtn } from './modules/copyBtn.js';
import { initSwipers } from './modules/swipers.js';
import { initTooltip } from './modules/tooltip.js';
import { initModals } from './modules/modals.js';
import { initVideos } from './modules/videos.js';
import { initForms } from './modules/forms.js';
import { initTabs } from './modules/tabs.js';

// import './modules/stickyCol.$s'

// main
document.addEventListener('DOMContentLoaded', () => {
  scrollWrapperBlocks('.rich-text-bl table');
  scrollIntoView('.header .menu a');
  scrollIntoView('.scrollto-js');

  initPhotoSwipeFromDOM('.lightbox-gallery');
  changeSelectPlaceholderColor();
  initActiveNavigationSection();
  initAnimationScroll();
  initAnimationInput();
  initHeaderScripts();
  initCopyBtn();
  initTooltip();
  initSwipers();
  initVideos();
  initModals();
  initForms();
  initTabs();

  // document handlers
  document.addEventListener('click', removeClassOutsideHandler);

  // resize handlers
  setDiffViewportVariable();

  window.addEventListener(
    'resize',
    debounce(() => {
      // for iphone
      setDiffViewportVariable();

      // unlock screen
      const $lgBreakpoint = 1080;

      if (
        window.innerWidth >= $lgBreakpoint &&
        document.body.classList.contains('menu_opened')
      ) {
        document.body.classList.remove('menu_opened');
        removeDocumentScrollBlocker('.header-inner');
      }
    }, 200)
  );
});
