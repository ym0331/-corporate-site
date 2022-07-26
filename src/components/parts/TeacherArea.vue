<template>
      <div class="teacherArea">
        <div class="teacherImg">
          <img src="/img/teacher.jpg" alt="山田花子先生" />
          <div class="teacherBox">
            <div>
              <p>Teacher</p>
              <p>先生について</p>
              <p>山田 花子先生</p>
            </div>
          </div>
        </div>
        <div class="teacherTxt contentsArea">
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
</template>

<script>
// import CarouselView from "./parts/CarouselView.vue";
// import AcessArea from './parts/AcessArea.vue'
export default {
  name: "MainContents",
  props: {
    msg: String,
  },
  // components: {
  //   CarouselView,
  //   AcessArea,
  // },
  // data() {
  //   return {
  //     schedules: [
  //       { day: "月", morning: "〇", after: "〇" },
  //       { day: "火", morning: "〇", after: "〇" },
  //       { day: "水", morning: "", after: "" },
  //       { day: "木", morning: "〇", after: "〇" },
  //       { day: "金", morning: "〇", after: "〇" },
  //       { day: "土", morning: "〇", after: "〇" },
  //       { day: "日/祝", morning: "", after: "" },
  //     ],
  //   };
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: auto;
}

.contentsArea {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
}

a {
  color: #643e2f;
  text-decoration: none;
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
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

h3 {
  color: #f2602d;
}

.headerImg img {
  width: 8vw;
  margin-bottom: 30px;
}

.box {
  width: 90%;
  height: 500px;
  max-width: 800px;
  background-color: darkblue;
  margin: 20px auto;
}

/* schoolArea */
.schoolAbout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.schoolAbout_item {
  width: calc(100% / 3);
  box-sizing: border-box;
}

/* teacherArea */
.teacherArea img {
  border-radius: 6px;
}

.teacherImg {
  position: relative;
}

.teacherBox {
  display: table;
  width: 28vw;
  height: 15vw;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.98);
  border-radius: 6px;
  position: absolute;
  right: 2.8vw;
  top: 2.8vw;
}

.teacherBox div {
  display: table-cell;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
}

.teacherTxt dt {
  font-weight: 600;
  font-size: 1.12em;
}

.teacherTxt dd {
  font-size: 1.12em;
}

/* newsListArea */
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
}
.newsList .date {
  margin-right: 2rem;
  font-size: 16px;
  color: #643e2f;
}
.newsList .category {
  background: #ea5413;
  color: #fff;
  display: inline-block;
  font-size: 0.8rem;
  width: 5rem;
  color: #fff;
  text-align: center;
  margin-right: 2rem;
}

/* テキストボックス */
input,
textarea,
select {
  width: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px 10px;
  font-size: 1.12em;
}

textarea {
  font-family: inherit;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #29b6ca;
  outline: 0;
}

input[type="checkbox"] {
  width: auto;
}
.consent_form_area {
  margin-bottom: 30px;
}

.consent_form p strong {
  font-weight: 600;
}
.consent_form {
  overflow-x: hidden;
  overflow-y: scroll;
  border: 1px solid #d7d7d7;
  padding: 20px;
  height: 150px;
}

.consent_chk {
  text-align: center;
  margin-bottom: 20px;
}

/* 同意・リセットボタン */
.contact_btn_area {
  text-align: center;
}

.contact_btn {
  text-align: center;
  width: 200px;
  height: 3em;
  font-size: 1em;
  border-radius: 5px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  box-sizing: border-box;
  border: none;
  box-shadow: 0px 2px 5px 0px rgb(75 81 83 / 0.15);
}

/* 送信ボタン */
.submit {
  background-color: #29b6ca;
  color: #fff;
  border: 1px solid #29b6ca;
}
.submit:hover {
  background-color: #fff;
  color: #29b6ca;
}

/* リセットボタン */
.reset {
  background-color: #e5e5e5;
  color: #282828;
}

.reset:hover {
  background-color: #efefef;
}

/* contactArea */
/* .contactArea {
  width: 100%;
  padding: 50px 0;
  box-sizing: border-box;
  margin-bottom: 70px;
} */
</style>
