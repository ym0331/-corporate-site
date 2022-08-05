<template>
<div>
<vue-element-loading color="#f2602d" ring :active="isActive" :is-full-screen="true"/>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    isActive: true
  }),

mounted: function () {
  this.$nextTick(function () {
    this.isActive = false;
  })
}
}
</script>
