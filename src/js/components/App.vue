<template>
  <div class="app">
    <catalog></catalog>
  </div>
</template>

<script>
// import api from '../api/index.js';
import Catalog from './Catalog.vue';

export default {
  components: { Catalog },
  data() {
    return {
      literal: window.literals,
    };
  },
};
</script>
