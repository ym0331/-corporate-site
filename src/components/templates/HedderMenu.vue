<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
      <img src="/img/piano.jpg" alt="吉澤ピアノ教室" />
</template>

<script>
export default {
  name: 'HedderMenu',
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
}


</style>