<template>
  <div class="catalog-page">
    <div class="catalog-head">
      <h2 class="mb-40">Catalog</h2>
    </div>

    <filters @filterUpdated="filterUpdated" :filters="filters"></filters>

    <div class="anchor-bl" id="anchorCatalog"></div>

    <div class="st-cards">
      <a :href="card.url" class="st-card" v-for="card in cards" :key="card.id">
        <div class="st-card__image">
          <div class="full-image-bg">
            <img :src="card.thumbnailUrl" alt="" />
          </div>
        </div>
        <div class="st-card__info">
          <div class="text_lg text_uppercase text_700">{{ card.title }}</div>
        </div>
      </a>
    </div>

    <div class="mb-40 pagination-wrapp" v-show="isPaginationVisible">
      <pagination
        v-model="paginationOptions.current_page"
        :records="paginationOptions.total"
        :per-page="paginationOptions.per_page"
        :options="paginationOptions.options"
        @paginate="paginateHandler"
      />
    </div>
  </div>
</template>

<script>
import Filters from './Filters.vue';
import filtersMock from './filters-mock.js';
import Pagination from 'vue-pagination-2';
import MyPagination from './MyPagination.vue';
import { isEqual } from 'lodash';
import { debounce } from '../helpers/debounce.js';

let debouncedGetProduct = null;

const scrollIntoView = (selector) => {
  const $target = document.querySelector(selector);
  if ($target) {
    $target.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

export default {
  components: {
    Filters,
    Pagination,
    MyPagination,
  },
  data() {
    return {
      literal: window.literals,
      filters: filtersMock,
      cards: [],
      paginationOptions: {
        current_page: parseInt(this.$route.query.page) || 1,
        per_page: 9,
        total: 0,
        options: {
          template: MyPagination,
          chunk: 3,
          // chunksNavigation: 'scroll',
        },
      },
    };
  },
  mounted() {
    debouncedGetProduct = debounce(this.getProducts, 150);
    this.getProducts();
  },
  computed: {
    queryStr() {
      return `?${new URLSearchParams(this.$route.query)}}`;
    },
    isPaginationVisible() {
      return this.paginationOptions.total > this.paginationOptions.per_page;
    },
  },
  methods: {
    async getProducts() {
      console.log('--- 1 --- get products');
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos${this.queryStr}`
      );
      this.cards = await response.json();
      this.paginationOptions.total = this.cards.length;
      // this.paginationOptions.total = 50;
    },
    pushRouteQueries(queriesObj) {
      const query = {
        ...queriesObj,
        page: String(this.paginationOptions.current_page),
      };

      if (!isEqual(query, this.$route.query)) {
        this.$router.replace({ query });
      }
    },
    filterUpdated(filteredQueries) {
      console.log('--- 2 --- filter updated');
      this.paginationOptions.current_page = 1;

      this.pushRouteQueries(filteredQueries);
      debouncedGetProduct();

      scrollIntoView('#anchorCatalog');
    },
    paginateHandler() {
      console.log('--- 3 --- paginate');

      this.pushRouteQueries(this.$route.query);
      debouncedGetProduct();

      scrollIntoView('#anchorCatalog');
    },
  },
};
</script>
