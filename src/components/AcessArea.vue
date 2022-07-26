<template>
  <div class="acessArea">
    <h2>Access</h2>
    <div class="accessDetailArea accessflex">
      <div class="box1">
        <div class="boxhead accessflex">
          <img src="/img/footer_logo.png" />
          <div>
            <span class="access">東京都墨田区押上１丁目１−２</span
            ><br />都営浅草線きさらぎ駅徒歩２分
          </div>
        </div>
        <div class="boxfott">
          <button>お問い合わせはこちら</button>
        </div>
      </div>
      <div class="container">
        <table class="schedule">
          <thead>
            <tr>
              <th>時間</th>
              <th>10:00〜12:00</th>
              <th>14:00〜19:00</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="schedule in schedules" :key="schedule">
              <th>{{ schedule.day }}</th>
              <td>{{ schedule.morning }}</td>
              <td>{{ schedule.after }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.656784611315!2d139.8085117151124!3d35.7100626801876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1658465728995!5m2!1sja!2sjp"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "AcessArea",
  data() {
    return {
      schedules: [
        { day: "月", morning: "〇", after: "〇" },
        { day: "火", morning: "〇", after: "〇" },
        { day: "水", morning: "", after: "" },
        { day: "木", morning: "〇", after: "〇" },
        { day: "金", morning: "〇", after: "〇" },
        { day: "土", morning: "〇", after: "〇" },
        { day: "日/祝", morning: "", after: "" },
      ],
    };
  },
};
</script>

<style scoped>
/* accessArea */
.acessArea {
  margin-bottom: 60px;
}

.accessflex {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
}

.accessDetailArea {
  width: 80%;
  margin: 0 auto 40px;
}

.box1 {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  -webkit-justify-content: space-between;
}

.box1 img {
  width: 14vw;
}

.boxhead {
  justify-content: space-evenly;
  align-items: center;
}

.boxhead .access {
  font-size: 1.15em;
  font-weight: 600;
}
.boxfott {
  position: relative;
}
button {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
  display: inline-block;
  padding: 1rem 3rem;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 0.1em;
  border-radius: 0.5rem;
  border-radius: 10px;
  background-color: #f2602d;
  color: #fff;
  box-shadow: 0 5px 0 rgba(161, 158, 139, 0.3);
  transition: 0.3s;
  box-sizing: border-box;
  border: none;
}

button:hover {
  box-shadow: none;
  transform: translate3d(0, 5px, 0);
}

.container {
  width: 50%;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
}

.schedule {
  width: 100%;
  max-width: 680px;
  border-left: 1px solid #f2602d;
  border-collapse: collapse;
  border-spacing: 0;
  line-height: 2;
}
@media screen and (min-width: 769px) {
  .schedule,
  .schedule thead,
  .schedule tbody {
    display: flex;
  }
}

.schedule th,
.schedule td {
  padding: 0.5em;
  border-bottom: 1px solid #f2602d;
  border-right: 1px solid #f2602d;
  text-align: center;
  vertical-align: middle;
}
@media screen and (min-width: 769px) {
  .schedule th,
  .schedule td {
    display: block;
  }
}

.schedule th {
  background: #f2602d;
  color: #fff;
}

@media screen and (min-width: 769px) {
  .schedule thead {
    flex-direction: column;
    width: 150px;
  }
}
@media screen and (min-width: 769px) {
  .schedule tbody {
    flex: 1;
  }
}
@media screen and (min-width: 769px) {
  .schedule tbody tr {
    width: calc(100% / 7);
  }
}

.schedule td:empty::after {
  content: "-";
  padding: 0.5em;
}

.schedule td {
  color: #f2602d;
}


iframe {
  width: 100%;
  height: 400px;
}

@media screen and (max-width: 768px) {
  iframe {
    width: 100%;
    height: 300px;
  }
}

@media screen and (max-width: 480px) {
  iframe {
    width: 100%;
    height: 200px;
  }
}

</style>