<template>
  <div id="app">
    <transition-group tag="ul" name="list" class="newsList">
      <li v-for="post in posts.slice(0,3)" :key="post" class="newsListLink">
        <a :href="post.link">
          <span class="date">{{ moment(post.date).format("YYYY/MM/DD") }}</span>
          <p>{{ post.title.rendered }}</p>
        </a>
      </li>
    </transition-group>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "SearchIp",
  data() {
    return {
      posts: []
    };
  },
  created: function() {
    this.axios
      .get("https://www.portfolio-ym.site/wp/wp-json/wp/v2/posts/")
      .then(response => {
        this.posts = response.data;
      }),
      (this.moment = moment);
  }
};
</script>

<style scoped>
.newsList {
  width: 80%;
  margin: 0 auto 40px;
  list-style-type: none;
  align-items: center;
  border-top: 1px solid #fcca0d;
}
.newsListLink {
  flex-wrap: wrap;
  padding: 25px 0;
  border-bottom: 1px solid #fcca0d;
  box-sizing: border-box;
  line-height: 1.5rem;
   text-align: justify;
}
.newsList .date {
  margin-right: 2rem;
  font-weight: 600;
  color: #f2602d;

}

a {
  color: #2c3e50;
  text-decoration: none;
  display: flex;
}

</style>