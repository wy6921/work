<template>
  <div>
    <compo :listProp="list" :testProp="test"></compo>
  </div>
</template>

<script>
import compo from './compo.vue';

export default {
  components :{
    compo
  },
  data (){
    return{
      list:[
        {
          fruit:'苹果',
          checked:0
        },
        {
          fruit:'香蕉',
          checked:0
        },
        {
          fruit:'橘子',
          checked:0
        },
        {
          fruit:'西瓜',
          checked:0
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
