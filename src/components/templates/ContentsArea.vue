<template>
  <div class="contentsArea" v-for="content in contents" :key="content">
    <h2>{{ content }}</h2>
    <component :is="content"></component>
  </div>
</template>

<script>
import Access from "@/components/parts/AcessArea.vue";
import School from "@/components/parts/SchoolArea.vue";
import Teacher from "@/components/parts/TeacherArea.vue";
export default {
  name: "MainContents",
  components: {
    School,
    Teacher,
    Access,
  },
  data() {
    return {
      contents: [
        "School",
         "Teacher",
         "Access"
        ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentsArea {
  width: 80%;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ffffff;
  display: inline-block;
  text-shadow: 1px 1px 1px #f2602d, -1px 1px 1px #f2602d, 1px -1px 1px #f2602d,
    -1px -1px 1px #f2602d, 1px 0px 1px #f2602d, 0px 1px 1px #f2602d,
    -1px 0px 1px #f2602d, 0px -1px 1px #f2602d;
}
</style>
