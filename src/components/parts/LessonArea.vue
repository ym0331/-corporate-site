<template>
          <CarouselView />
     <!-- <div class="lessonArea contentsArea">
        <h2>Lesson</h2>
        <p>レッスンの風景を紹介します！</p>
        <div class="lessonImg">
          <CarouselView />
        </div>
        <div class="lessonTxt">
          <p>先生が優しく楽しく指導します。</p>
          <p>
            また、年に１度、大きなホールを借りて発表会が行われます。（参加は自由です。）
          </p>
        </div>
      </div> -->

</template>

<script>
import CarouselView from "./CarouselView.vue";
export default {
  name: "MainContents",
  props: {
    msg: String,
  },
   components: {
    CarouselView,
   },
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
