<template>
  <div class="VuePagination" :class="props.theme.wrapper">
    <nav :class="props.theme.nav">
      <ol v-show="props.showPagination" :class="props.theme.list">
        <li
          class="pagination__prev"
          :class="props.theme.prev"
          @click="props.setPrevPage"
          v-if="props.page !== 1"
        >
          <a
            aria-label="previous page"
            class="btn _primary _fill _round-icon"
            v-bind="{ ...props.aProps, ...props.prevProps }"
          >
            <svg class="icon">
              <use xlink:href="/assets/img/sprite.svg#chevron-left"></use>
            </svg>
          </a>
        </li>

        <li
          v-for="page in props.pages"
          :key="page"
          :class="props.pageClasses(page)"
          v-on="props.pageEvents(page)"
        >
          <a v-bind="props.aProps" :class="props.theme.link">
            {{ page }}
          </a>
        </li>

        <li
          class="pagination__next"
          :class="props.theme.next"
          @click="props.setNextPage"
          v-if="props.page !== props.totalPages"
        >
          <a
            aria-label="next page"
            class="btn _primary _fill _round-icon"
            v-bind="{ ...props.aProps, ...props.nextProps }"
          >
            <svg class="icon">
              <use xlink:href="/assets/img/sprite.svg#chevron-right"></use>
            </svg>
          </a>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MyPagination',
  props: ['props'],
};
</script>
