<template>
  <div>
    <v-app-bar color="white" dense dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="title">吉澤ピアノ教室</v-toolbar-title>

      <v-tab v-for="item in items" :key="item" :href="item.path">{{ item.title }}</v-tab>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HedderMenu",
  data() {
    return {
      items: [
        { title: "先生について", path: "#Teacher" },
        { title: "アクセス", path: "#Access" },
        { title: "新着情報", path: "#News" },
        { title: "お問い合せ", path: "/contactArea" }
      ]
    };
  }
};
</script>

<style scoped>
.title {
  text-align: left;
  margin-left: 20px;
}
</style>