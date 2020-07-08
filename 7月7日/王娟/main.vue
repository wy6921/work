<template>
  <div class="parent">
      <h1>兴趣选择</h1>
      <choices v-bind:interests="interestsArr"  @change="update"></choices>
      <p>{{getResult}}</p>
  </div>
</template>

<script>
  import Choices from './choices.vue'
  export default {
    name: 'main',
    components:{
      'choices':Choices
    },
    data () {
      return {
        interestsArr:[
              {
                checked:false,
                content:"游泳"
              },
              {
                checked:true,
                content:"唱歌"
              },
              {
                checked:false,
                content:"跳舞"
              }
            ],
        result:""
      }
    },
    methods:{
      update(newInte){
        console.log("==update==");
        // console.log(newInte);
        this.interestsArr = newInte;
        console.log(this.interestsArr)
        // this.interestsArr = newInte.slice(0,newInte.length);
        
      }
    },
    computed:{
      getResult:function(){
        let result = "";
        let choose = false;
        this.interestsArr.forEach(element => {
          if(element.checked)
          {
            choose = true;
            result = `${result} ${element.content} `
          }
        });
        if(choose)
        {
          return `您选择了:${result}`
        }
        else{
          return `请选择`
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
