<template>
    <div>

        <input type="text" v-model="value"><span><button @click="add(),get_data()" >add</button></span>

        <ul>
            <li v-for="(value,index) in list" :key="index"> 
                <slotchild1>
                    <template v-slot:first>
                        <input  type="checkbox" >       
                    </template> 

                    <template v-slot:second>
                        <span>{{list[index]}}</span>
                    </template> 

                    <template v-slot:third>
                        <span>{{citymasg}}</span>
                    </template>                     
                </slotchild1>

            </li>

        </ul>
    </div>
    
</template>

<script>
import slotchild1 from './slotchild1';

export default {
    data() {
        return {
            value:'',
            list:[],
            msg:[],
            city:'',
            citymasg:"",
        }
    },
    components:{
        slotchild1,
        },
    methods: {
       add(){
            this.list.push(this.value);
       },
        get_data: function(){
        this.$axios.get("http://api.tianapi.com/txapi/tianqi/index",{
            params: {
                key: "765b7cc79d9c596dbd686d890cb65d9c",
                city: this.value,
            }
    },
        ).then(function(response){
          console.log(response);
          this.citymasg=response.data;

        }).catch(function(error){
          console.log(error);
        })
      }

    },
}

    
</script>

