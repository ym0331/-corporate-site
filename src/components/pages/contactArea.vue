<template>
  <main class="contactArea">
    <h2>体験レッスンのお申し込み</h2>

    <div class="contact_text_area">
      <p>
        こちらから体験レッスンにお申し込みいただけます。
        <br />以下の個人情報ついてに同意及び必要事項をご入力の上、「送信」ボタンを押してください。
      </p>
    </div>
    <form action="sample.cgi" method="post">
      <dl>
        <dt>
          <label for="name">
            お子様のお名前
            <span class="required">必須</span>
          </label>
        </dt>
        <dd>
          <input type="text" id="name" v-model="contactData.name" />
        </dd>
        <dt>
          <label for="date">
            体験レッスン日
            <span class="required">必須</span>
          </label>
        </dt>
        <dd>
          <input type="date" id="date" v-model="contactData.date" />
        </dd>
        <dt>
          お子様の性別
          <span class="required">必須</span>
        </dt>
        <dd>
          <input type="radio" id="girl" value="女" v-model="contactData.sex" />
          <label for="girl">女</label>
          <input type="radio" id="boy" value="男" v-model="contactData.sex" />
          <label for="boy">男</label>
          <input type="radio" id="private" value="非公開" v-model="contactData.sex" />
          <label for="private">非公開</label>
        </dd>
        <dt>
          <label for="age">
            お子様の年齢
            <span class="required">必須</span>
          </label>
        </dt>
        <dd>
          <input type="number" id="age" v-model.number="contactData.age" />
        </dd>
        <dt>
          <label for="guardian">
            保護者様のお名前
            <span class="required">必須</span>
          </label>
        </dt>
        <dd>
          <input type="text" id="guardian" v-model="contactData.guardian" />
        </dd>
        <dt>
          <label for="email">
            メールアドレス
            <span class="required">必須</span>
          </label>
        </dt>
        <dd>
          <input type="email" id="email" v-model="contactData.email" />
        </dd>

        <dt>
          <label for="message">質問・連絡事項</label>
        </dt>
        <dd>
          <textarea
            name="message"
            cols="50"
            rows="5"
            id="message"
            placeholder="ご質問・ご連絡事項などありましたらこちらに入力してください"
          ></textarea>
        </dd>

        <dt>個人情報の取り扱いについて</dt>
        <dd class="consent_form">
          <strong>個人情報の取り扱いについて</strong>
          <div>
            <p>本ページでご入力いただくお客様の個人情報は、吉澤ピアノ教室の体験レッスン参加へのお申し込み受付が目的で、これ以外の目的に使用することはございません。また、お申し込み店での個人情報の扱いも、上記目的に限定致しております。いただいた個人情報は、お客様の同意なしに第三者に開示、提供することはございません。</p>
          </div>
        </dd>
      </dl>

      <p class="consent_chk">
        <input type="checkbox" id="consent" v-model="contactData.consent" />
        <label for="consent">「個人情報の取り扱いについて」同意する</label>
      </p>
      <v-container class="contact_btn_area">
        <v-row justify="center">
          <v-col xs="12">
            <input type="submit" class="submit contact_btn" />
          </v-col>
          <v-col xs="12">
            <input type="reset" class="reset contact_btn" />
          </v-col>
        </v-row>
      </v-container>
    </form>
  </main>
</template>

<script>
export default {
  name: "contactArea",
  data() {
    return {
      contactData: {
        name: "",
        sex: "女",
        age: "",
        guardian: "",
        email: "",
        date: "",
        consent: false
      }
    };
  }
};
</script>

<style scoped>
.contactArea {
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #ffffff;
  display: inline-block;
  text-shadow: 1px 1px 1px #f2602d, -1px 1px 1px #f2602d, 1px -1px 1px #f2602d,
    -1px -1px 1px #f2602d, 1px 0px 1px #f2602d, 0px 1px 1px #f2602d,
    -1px 0px 1px #f2602d, 0px -1px 1px #f2602d;
}

.contact_text_area {
  margin: 20px 0;
}

dt {
  font-size: 1.25rem;
}

.required {
  color: white;
  background-color: #f2602d;
  border-radius: 10px;
  font-weight: normal;
  font-size: 0.9rem;
  margin-left: 10px;
  padding: 0 7px 1px;
  white-space: nowrap;
}

dd {
  margin-bottom: 15px;
}

input[type="text"],
input[type="date"],
input[type="email"],
input[type="number"],
textarea {
  width: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px 10px;
  font-size: 1.12em;
}

input:focus,
textarea:focus {
  border-color: #f2602d;
  outline: 0;
}

input[type="radio"] {
  margin-right: 10px;
}

label {
  margin-right: 30px;
  font-size: 1.12em;
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
.v-col {
  flex-grow: 0;
}

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
  background-color: #f2602d;
  color: #fff;
  border: 1px solid #f2602d;
}
.submit:hover {
  background-color: #fff;
  color: #f2602d;
}

/* リセットボタン */
.reset {
  background-color: #e5e5e5;
  color: #282828;
}

.reset:hover {
  background-color: #efefef;
}
</style>