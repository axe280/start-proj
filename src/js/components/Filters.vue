<template>
  <div class="filter-products" :class="{ _opened: isFilterOpened }">
    <div class="filter-products-head">
      <span>Фильтр</span>
    </div>

    <div class="filter-products-aside">
      <div
        class="filter-products-item"
        v-for="filter in customFilters"
        :key="filter.key"
      >
        <span class="filter-products-item__tt" v-html="filter.label"></span>

        <div v-if="filter.type === 'tile'" class="filter-head-btns">
          <button
            v-for="btn in filter.values"
            :key="`${filter.key}_${btn.id}`"
            type="button"
            class="btn _primary _min-width _sm"
            :class="{ _fill: btn.isChecked }"
            @click="btn.isChecked = !btn.isChecked"
          >
            {{ btn.title }}
          </button>
        </div>

        <div v-else-if="filter.type === 'tag'" class="label-list">
          <button
            v-for="btn in filter.values"
            :key="`${filter.key}_${btn.id}`"
            type="button"
            class="label _primary"
            :class="{ _fill: btn.isChecked }"
            @click="btn.isChecked = !btn.isChecked"
          >
            {{ btn.title }}
          </button>
        </div>

        <!-- <div v-else-if="filter.type === 'range'" class="filter-products-slider">
          <div class="filter-products-slider__bottom">
            <span>от {{ numberWithSpaces(filter.range[0]) }}</span>
            <span>до {{ numberWithSpaces(filter.range[1]) }}</span>
          </div>
          <div class="vue-slider-wrapp">
            <vue-slider
              v-model="filter.range"
              :min="getToFixedNumber(filter.values.from)"
              :max="getToFixedNumber(filter.values.to)"
              :interval="1"
              :dotSize="16"
              :height="1"
              tooltip="none"
            ></vue-slider>
          </div>
        </div> -->
      </div>

      <div class="filter-products-buttons">
        <button type="button" class="btn _primary _fill" @click="filterUpdated">
          Показать
        </button>
        <button type="button" class="btn _primary" @click="resetFilters">
          Сбросить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { deepCopyObjArray } from '../helpers/deepCopyObjArray.js';

export default {
  props: ['filters'],
  data() {
    return {
      literal: window.literals,
      isFilterOpened: false,
      customFilters: [],
    };
  },
  mounted() {
    this.createCustomFilters();
  },
  methods: {
    createCustomFilters() {
      this.customFilters = deepCopyObjArray(this.filters);

      // expand custom filters
      for (const filter of this.customFilters) {
        const queryParamValues = this.$route.query[filter.key];

        // if (filter.type === 'range') {
        //   this.$set(filter, 'range', [
        //     this.getToFixedNumber(filter.values.from),
        //     this.getToFixedNumber(filter.values.to),
        //   ]);

        //   if (queryParamValues) {
        //     filter.range = queryParamValues.split('-');
        //   }
        // }

        if (filter.type === 'tile' || filter.type === 'tag') {
          filter.values = filter.values.map((v) => {
            let isChecked = false;

            if (queryParamValues) {
              isChecked = queryParamValues.includes(v.id);
            }

            return { ...v, isChecked };
          });
        }
      }
    },
    numberWithSpaces(x) {
      //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
    getToFixedNumber(x) {
      //   return Number(Number(x).toFixed());
    },
    resetFilters() {
      this.$emit('filterUpdated', null);
      this.createCustomFilters();
    },
    async getProductCount() {
      // try {
      //   const response = await api.getProductCount(
      //     this.requestQueryStr,
      //     this.requestProductType
      //   );
      //   this.countFlats = response.data.count;
      //   this.isBtnShowDisabled = false;
      // } catch (e) {
      //   this.isBtnShowDisabled = true;
      // }
    },
    filterUpdated() {
      const filteredQueries = {};

      this.customFilters.map((filter) => {
        if (filter.type === 'tile' || filter.type === 'tag') {
          const IDs = [];

          filter.values.forEach((v) => {
            if (v.isChecked) {
              IDs.push(v.id);
            }
          });

          if (IDs.length) {
            filteredQueries[filter.key] = IDs.join(',');
          }
        }
      });

      this.$emit('filterUpdated', filteredQueries);
    },
  },
};
</script>
