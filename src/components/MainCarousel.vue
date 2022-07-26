<template>
  <carousel :items-to-show="1">
    <slide v-for="slide in slides" :key="slide">
      <img :src="slide" alt="slide" />
    </slide>

    <template #addons>
            <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
        Navigation,
  },
  data() {
    const slides = [
      "/img/lesson1.jpg",
      "/img/lesson2.jpg",
      "/img/lesson3.jpg",
    ];
    return {
      slides,
    };
  },
};
</script>