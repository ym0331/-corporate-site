<template>
<div id="app">
  <div v-for="post in posts" :key="post" :id="post">
    <h3>{{ post.title.rendered }}</h3>
  </div>
</div>
</template>

<script>
  export default {
    name: 'SearchIp',
    data() {
     return {
      posts: []
     }
    },
    created: function() {
        this.axios.get('https://www.portfolio-ym.site/wp/wp-json/wp/v2/posts/')
          .then((response) => {
           this.posts= response.data;
           console.log(this.posts)
          })
      }
  }
</script>