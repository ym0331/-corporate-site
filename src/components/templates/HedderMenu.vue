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


</template>

<script>
export default {
  name: 'HedderMenu',
  data () {
    return {
            colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      
      items: [
        { title: 'top', path: '/' },
        { title: '教室について', path: '/profile' },
        { title: '先生について', path: '/teacher' },
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