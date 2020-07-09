<template>
  <div>
      <!-- <Select :parentData="initData" @change1="handleChange"></Select> -->
      <input  v-model="city" type="text"/><button @click="getdata(city)">确定</button>
      <!-- <select v-model="one">
    <option v-for="(getval, ind) in listnum" :key="ind">{{x.name}}{{x.famname}}</option>
      </select> -->

      <Slotprac  v-for="(item,index) in list" :key="index">
           <template class="in_line" v-slot:first>
               <!-- <input type="checkbox"/> -->
               <span>{{item.week}}</span>
          </template>
                 
          <template class="in_line" v-slot:second>
              <span>{{item.area}}</span>
              <span>{{item.real}}</span>
          </template>
               
          <template class="in_line" v-slot:last>
              <!-- <span><img style='width:20px;height:20px;' :src="item.pic"></span> -->
              <span>{{item.weather}}</span>
          </template>
      </Slotprac>
  </div>
</template>

<script>
import Slotprac from "./slotprac.vue";
import axios from 'axios'
export default {
    data(){
        return {
            city:"",
            list:{},
            
            // libs:[{
            // checked:false,
            // city:"成都",
            // weather:"晴天",
            // pic:require("./static/晴天.png")
            // },{
            // checked:false,
            // city:"上海",
            // weather:"阴天",
            // pic:require("./static/阴天.png")
            // }
            // ]
        }
    },
    components:{
        Slotprac
    },
    methods:{
        getdata(cityvalue){
          
            axios.get('http://api.tianapi.com/txapi/tianqi/index',{
                params:{
                key:"765b7cc79d9c596dbd686d890cb65d9c",
                city:cityvalue}
                }).then(response => {
                    console.log(response.data);
                    this.list=response.data.newslist;
                    console.log(this.list);
                })
                .catch(error=>{
                    console.log(error)}
                );
            }  
               
        }
    //     handleChange(val){
    //          console.log("1")
    //         this.initData=val
    //         console.log(this.initData)
         
    // }

// }
}
</script>

<style>
.in_line{
    display:inline;
}

</style>