<template>
  <v-carousel cycle hide-delimiters :show-arrows="false" height="auto">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/img/mainVisual1.jpg",
        },
        {
          src: "/img/mainVisual2.jpg",
        },
        {
          src: "/img/mainVisual3.jpg",
        },
      ],
    };
  },
};
</script>