<template>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <transition-group tag="ul" name="list">
    <li
      class="contentsArea"
      v-for="content in contents"
      :key="content"
      v-show="visible"
      :id="content"
    >
      <h2>{{ content }}</h2>
      <component :is="content"></component>
    </li>
  </transition-group>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>フェー</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>ドイン</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>アウト</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
  <p>するよ</p>
</template>

<script>
import Access from "@/components/parts/AcessArea.vue";
// import School from "@/components/parts/SchoolArea.vue";
// import Teacher from "@/components/parts/TeacherArea.vue";
export default {
  name: "MainContents",
  components: {
    // School,
    // Teacher,
    Access,
  },
  data() {
    return {
      visible: false,
      contents: [
        //   "School",
        // "Teacher",
        "Access",
      ],
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.a = document.getElementById("Access").getBoundingClientRect();
      console.log("top:" + this.a.top);
      this.scrollY = window.scrollY;
      if (!this.visible) {
        this.visible = window.scrollY > this.a.top;
      } else if (window.scrollY < this.a.top) {
        this.visible = !this.visible;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .contentsArea {
  width: 80%;
  margin: 0 auto;
} */

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #ffffff;
  display: inline-block;
  text-shadow: 1px 1px 1px #f2602d, -1px 1px 1px #f2602d, 1px -1px 1px #f2602d,
    -1px -1px 1px #f2602d, 1px 0px 1px #f2602d, 0px 1px 1px #f2602d,
    -1px 0px 1px #f2602d, 0px -1px 1px #f2602d;
}

.v-enter {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
  transition: opacity 1s;
}
</style>
