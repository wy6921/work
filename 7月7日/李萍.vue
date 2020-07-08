<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>父组件</div>
    <child :message="parentMsg" @childevent="parentevent"></child>
    <div>{{lastname}}</div>
    <div>{{Message}}</div>
    
    <input v-model="obj.gender">
    <div>
    <li  class="listyle" v-for="(item,index) in fruitlist" :key="index"><input type="checkbox"  v-model='item.checked'> {{item.fruit}}</li>
    <!-- <div>{{fruitview}}</div> -->
    <div>{{fruitview}}</div>
    </div>
    
  </div>
  
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import child from './Soncompo.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    child
  },
  data:function(){
    return{
      parentMsg: '我是来自父组件的消息' ,
      firstname:'xx',
      lastname:'l' ,
      obj:{
        gender:"man"
      },
       Message:"",
       fruitlist:[{
            
            fruit:'苹果',
            checked:false

        },{ fruit:'香蕉',
            checked:false

        },{ fruit:'菠萝',
            checked:false

        }],
        fruitview:[],
        // tofruit:[]
    }
  },
  methods:{
    parentevent(childData){//传入父组件的值
    this.Message = childData;
    }

  },
  // watch:{
  //   firstname(val,oldval){
  //     this.lastname="llll"+val+oldval;
                  
  //   }
  // }
  //深度监听deep
  // watch:{
  //   'obj.gender':{
  //       handler(val){
  //         this.lastname=val;
  //         //执行代码
  //     },
  //     deep:true //为true，表示深度监听，这时候就能监测到a值变化
      
                  
  //   }
  // }
  watch:{
    'fruitlist':{
        handler(newval){
          newval.forEach((val)=>{
            let flag=true;
           if (flag===val.checked&&!this.fruitview.includes(val.fruit)){
             this.fruitview.push(val.fruit);
            //  this.tofruit.push(val.fruit);
           }
           else if(flag!==val.checked&&this.fruitview.includes(val.fruit)){
             this.fruitview.splice(this.fruitview.indexOf(val.fruit),1);
            //  this.tofruit.splice(this.fruitview.indexOf(ind),1);
           }
          })

          //执行代码
           
      },
      deep:true //为true，表示深度监听，这时候就能监测到a值变化
      
                  
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.listyle{
  display:inline;
}
</style>
