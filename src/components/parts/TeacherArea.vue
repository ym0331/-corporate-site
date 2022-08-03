<template>
  <v-container>
    <div class="teacherArea">
        <v-img class="teacherImg" src="/img/teacher.jpg"></v-img>
      <div class="teacherTxt">
        <dl>
          <dt>経歴</dt>
          <dd>〇〇藝術大学付属音楽部高等学校卒業</dd>
          <dd>〇〇藝術大学卒業</dd>
          <dd>〇〇藝術大学院卒業</dd>
          <dt>受賞歴</dt>
          <dd>第31回ヤングピアノコンクール第1位</dd>
          <dd>第51回ベートーベン国際ピアノコンクール世界大会金賞</dd>
        </dl>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MainContents",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.teacherImg {
  border-radius: 6px;
  margin-bottom: 30px;
}

.teacherTxt {
  text-align: left;
}

.teacherTxt dt {
  font-weight: 600;
  font-size: 1.12em;
  margin-bottom: 5px;
}

.teacherTxt dd {
  font-size: 1.12em;
  margin-bottom: 5px;
}

</style>
