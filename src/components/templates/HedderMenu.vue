<template>
  <header>
    <v-app-bar app dark flat>
      <!-- タブレット以上の表示 -->
      <div class="d-none d-sm-flex">
        <v-toolbar-title class="title">吉澤ピアノ教室</v-toolbar-title>
        <v-tab v-for="item in items" :key="item" :href="item.path">{{ item.title }}</v-tab>
      </div>

      <!-- スマホの表示 -->
      <div class="d-flex d-sm-none xmheader">
        <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>吉澤ピアノ教室</v-toolbar-title>
      </div>
    </v-app-bar>

    <!-- ナビゲーション(スマホのみ) -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item" :href="item.path">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
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
      ],
      drawer: false
    };
  }
};
</script>

<style>
.title {
  text-align: left;
  margin-left: 20px;
}

.xmheader {
  align-items: center;
}
.v-toolbar__content {
  display: block;
}
</style>