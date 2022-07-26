<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
          <small>2022 &copy; Yoshizawaw Piano Class, inc.</small>
  </div>
</template>

<script>
export default {
  name: 'FotterMenu',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: '教室について', path: '/profile' },
        { title: '先生について', path: '/profile' },
        { title: 'お知らせ', path: '/skills' },
        { title: '申し込み', path: '/outputs' }
      ]
    }
  }
}
</script>

<style scoped>
/* 
ol {
  margin-left: auto;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  margin:10px;
  position: relative;
} */


 ol {
  margin-left: auto;
  width: 480px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: skyblue;
  border-radius: 8px;
  position: relative;
}

li:hover {
  opacity: 0.4;
} 

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
 a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
} 

</style>