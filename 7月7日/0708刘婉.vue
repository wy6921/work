<template>
    <div>
        <label v-for="(item,i) in list" :key="i">
             <input  type="checkbox"  v-model="item.flag">
             {{item.name}} 
        </label>
         <p>您选择了{{opitionFruit}}</p>
    </div>
</template>

<script>
    import checked from './checkedchild'
    export default {
        data() {
            return {
                list:[
                {name:'苹果',flag:false},
                {name:'香蕉',flag:false},
                {name:'西瓜',flag:false}  
                ],
                opitionFruit:[]
            }
        },

        watch: {
            list:{
            handler(newVal){  //newVal是namene改变以后的值
               let len=this.list.length;
               this.opitionFruit=[];
               for(let i=0;i<len;i++){
                   if(newVal[i].flag==true){
                       //newVal[i].flag=!newVal[i].flag;
                        this.opitionFruit.push(newVal[i].name);
                   }
               }
               
            },
            immediate:true,
            deep:true
            }
         }
    }
    
</script>

