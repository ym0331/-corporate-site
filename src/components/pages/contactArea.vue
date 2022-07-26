<template>
    <main class="main_contents">
      <h2>
        <span class="h2_large">お問い合わせ</span>
        <span class="h2_small">contact</span>
      </h2>

      <div class="contact_text_area">
      <p>当社に関するお問い合わせは、こちらからお願いいたします。<br>
        以下のWEBサイトにおける個人情報の取得と利用についてに同意及び必要事項をご入力の上、「送信」ボタンを押してください。</p>
      <p class="text_caution">※は必須項目です。</p>
      </div>
      <form action="sample.cgi" method="post">
        <dl class="contactform">
          <dt>
            会社名
            <span class="form__required">※</span>
          </dt>
          <dd><input type="text" name="company" tabindex="1"></dd>
          <dt>
            ご担当者様氏名
            <span class="form__required">※</span>
          </dt>
          <dd><input type="text" name="name" tabindex="2"></dd>
          <dt>
            メールアドレス
            <span class="form__required">※</span>
          </dt>
          <dd><input type="email" name="email" tabindex="3"></dd>
          <dt>
            電話番号
            <span class="form__required">※</span>
          </dt>
          <dd><input type="text" name="tel" tabindex="4"></dd>
          <dt>
            お問い合わせタイプ
            <span class="form__required">※</span>
          </dt>
          <dd><select name="category" tabindex="5">
              <option value="contract" selected>新規契約</option>
              <option value="request">資料請求</option>
            </select></dd>
          <dt>
            お問い合わせ内容
            <span class="form__required">※</span>
          </dt>
          <dd><textarea name="message" cols="50" rows="5"  tabindex="6" placeholder="ここにお問い合わせ内容を記入してください。"></textarea></dd>
        </dl>
        <div class="consent_form_area" tabindex="7">
          <p>「WEBサイトにおける個人情報の取得と利用について」必ず内容をご確認ください</p>
          <div class="consent_form">
            <div>
              <p><strong>WEBサイトにおける個人情報の取得と利用について</strong></p>
            </div>
            <div>
              <p>
                ご入力頂いた個人情報はハッピーウォーター株式会社（個人情報保護管理者：営業担当役員【電話：03-0000-0000】）が、(1)お問い合せの回答のため、(2)本人から請求の個人情報の開示等に応じる目的のために利用します。<br>
                また上記利用目的(1)達成のため、個人情報の取り扱いに関して記載した契約を結んでいる加盟店及び販売代理店及び取次店へご入力頂いた個人情報の全てを、直接渡し、FAX、郵送、ネットワークを通じた方法等で提供致します。<br>
                ご入力頂いた開示対象個人情報の利用目的の通知・開示・訂正・追加・利用停止等については、下記の弊社お客様センターまでお問合せ下さい。ご本人と確認出来しだい対応致します。<br>
                ハッピーウォーターお客様センター電話：0120-000-0000もしくはこちらのお問合せフォームよりお問い合わせ下さい。</p>
            </div>
          </div>
        </div>
        <p class="consent_chk">
          <input type="checkbox" name="consent-chk" id="consent_chks" value="consent_chks" tabindex="8">
          <label for="consent_chks">「WEBサイトにおける個人情報の取得と利用について」同意する</label>
        </p>
        <p class="contact_btn_area">
          <button type="submit" name="submit" value="submit" class="submit contact_btn" tabindex="9">送信</button>
          <input type="reset" class="reset contact_btn" value="リセット" tabindex="10">
        </p>
      </form>
    </main>
</template>

<script>
export default {
  name: "contactArea",
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

<style scoped>

/* お申し込み */
.contact_wrap {
  width: 100%;
  background-color: #eef5f7;
  padding: 50px 0;
  box-sizing: border-box;
  margin-bottom: 70px;
}

.contact_wrap div {
  text-align: center;
  width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px 0;
}

.contact_wrap h2 {
  color: #29B6CA;
}

.index_contact_btn {
  position: relative;
  color:#fff;
  font-weight: 600;
  background: #ffb730;
  text-align: center;
  border: 1px solid #ffb730;
  box-shadow:0px 2px 5px 0px rgb(75 81 83 / 0.15);
  border-radius: 4px;
  line-height :1.8em;
  padding: 13px 30px;
  text-decoration: none;
  max-width: 1000px;
  display: inline-block;
}

.index_contact_btn:hover {
	background-color: #fcbd49;
}

.index_contact_btn:before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: -3px 5px 0 0;
  /* background-image: url(../images/mail.svg); */
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: middle;
}
</style>