<template>
  <v-container>
    <v-row>
      <v-col class="box1" xs="12">
        <v-col xs="12" class="accessTxt">
          <p>
            <span class="access">東京都墨田区押上１丁目１−２</span><br />
            <span
              >都営浅草線きさらぎ駅徒歩<span class="orange">２</span>分</span
            >
          </p>
        </v-col>
        <v-col xs="12">
          <router-link to="/contactArea"
            ><button>お申し込みはこちら</button></router-link
          >
        </v-col>
      </v-col>
      <v-col xs="12" class="container">
        <table class="contact_day-table font-deco-jp">
          <tbody>
            <tr class="contact_day-table--head">
              <th>時間</th>
              <th>月</th>
              <th>火</th>
              <th>水</th>
              <th>木</th>
              <th>金</th>
              <th>土</th>
              <th>日</th>
            </tr>
            <tr>
              <th>9:00 - 12:00</th>
              <td class="icon_circle"></td>
              <td class="icon_circle"></td>
              <td class="icon_circle"></td>
              <td class="icon_circle"></td>
              <td class="icon_circle"></td>
              <td class="icon_circle"></td>
              <td class="icon_line"></td>
            </tr>
            <tr>
              <th>16:00 -19:00</th>
              <td class="icon_circle"></td>
              <td class="icon_circle"></td>
              <td class="icon_line"></td>
              <td class="icon_circle"></td>
              <td class="icon_circle"></td>
              <td class="icon_line"></td>
              <td class="icon_line"></td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.656784611315!2d139.8085117151124!3d35.7100626801876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1658465728995!5m2!1sja!2sjp"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </v-container>
</template>

<script>
export default {
  name: "AcessArea",
};
</script>

<style scoped>
.accessTxt {
  padding-top: 0;
  padding-bottom: 0;
}

.access {
  font-weight: 600;
  font-size: 1.25rem;
}

.orange {
  color: #f2602d;
  font-weight: 600;
}

.contact_day-table {
  width: 100%;
  border: 2px solid #f2602d;
  border-top: none;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 6px;
  overflow: hidden;
  line-height: 1;
}

.contact_day-table tr th:first-of-type {
  width: 41%;
}

.contact_day-table tr:not(:last-of-type):not(:last-of-type) th,
.contact_day-table tr:not(:last-of-type) td {
  border-bottom: solid 1px #f2602d;
}

.contact_day-table--head th:not(:last-of-type) {
  border-right: solid 1px #f2602d;
}
.contact_day-table--head th {
  padding: 10px 0 11px;
  font-size: 120%;
  background-color: #f2602d;
  color: #fff;
}
.icon_circle::before {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  margin: 0 auto;
  background-color: #f2602d;
  border-radius: 7px;
}

.contact_day-table--head th {
  padding: 10px 0 11px;
  font-size: 120%;
  background-color: #f2602d;
  color: #fff;
}

.contact_day-table tr:not(.contact_day-table--head) th,
.contact_day-table tr td:not(:last-of-type) {
  padding: 10px 0 11px;
  font-size: 114%;
  color: #f2602d;
  letter-spacing: 0.04em;
}

.icon_line::before {
  content: "";
  display: block;
  width: 7px;
  height: 2px;
  margin: 0 auto;
  background-color: #f2602d;
  transform: translateY(-6px);
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
iframe {
  width: 100%;
  height: 400px;
  margin-top: 30px;
}
</style>