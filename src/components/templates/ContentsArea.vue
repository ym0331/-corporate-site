<template>
  <div>
    <CarouselView />
    <!-- <v-img src="/img/piano.jpg"></v-img> -->
    <transition-group tag="ul" name="list">
      <li class="contentsArea" v-for="content in contents" :key="content" :id="content">
        <!-- <div v-motion-pop-visible> -->
        <div>
          <h2>{{ content }}</h2>
          <component :is="content"></component>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
import CarouselView from "@/components/parts/CarouselView.vue";

import Access from "@/components/parts/AcessArea.vue";
// import School from "@/components/parts/SchoolArea.vue";
import Teacher from "@/components/parts/TeacherArea.vue";
// import Lesson from "@/components/parts/LessonArea.vue";
import News from "@/components/parts/NewsArea.vue";
export default {
  name: "MainContents",
  components: {
    // School,
    Teacher,
    // Lesson,
    Access,
    CarouselView,
    News
  },
  data() {
    return {
      visible: false,
      contents: [
        // "School",
        "Teacher",
        // "Lesson",
        "Access",
        "News"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #ffffff;
  display: inline-block;
  text-shadow: 1px 1px 1px #f2602d, -1px 1px 1px #f2602d, 1px -1px 1px #f2602d,
    -1px -1px 1px #f2602d, 1px 0px 1px #f2602d, 0px 1px 1px #f2602d,
    -1px 0px 1px #f2602d, 0px -1px 1px #f2602d;
}
.contentsArea {
  margin-top: -64px;
  padding-top: 64px;
}
</style>
