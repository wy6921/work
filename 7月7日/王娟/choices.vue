<template>
  <div class="choices-div">
     <ul class="choices-ul">
       <li v-for="i in newInterests">
         <input type="checkbox" v-model="i.checked" @click="change" >
         <span>{{i.content}}</span>
        </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'Choices',
  props:["interests"],
  data:function(){
      return {
        newInterests:JSON.parse(JSON.stringify(this.interests))
      }
  },
  methods:{
    change(){
      console.log("===choices===");
      console.log(this.newInterests);
      this.$emit('change', this.newInterests);
    }
  },
  // watch:{
  //   newInterests:function(){
  //     console.log(newInterests);
  //   }
  // }
  
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.choices-div{
  border:1px solid #ccc;
  width: 400px;
  margin: 0 auto;
}
.choices-ul{
  padding: 0px;
}
.choices-ul li{
  list-style: none;
}
</style>
