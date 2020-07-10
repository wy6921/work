<template>
    <div>
        <div class="list-top">
            <input v-model="searchText" class="search-input" @keydown.enter="search"/>
            <button @click="search" class="search-btn">search</button> 
            <button @click="change" class="search-btn">change</button>
        </div>
        
        <ListItem v-for="(item,index) in list" :key="index" :index="index" :flag="checkFlag==index?(checkFlag==index):checklist.includes(index)">
            <template v-slot:check>
                <input type="checkbox" v-model="checklist" :value="index" v-show="flag"/>
                <input type="radio" name="weather" v-show="!flag" v-model="checkFlag" :value="index"  />
            </template>
            <template v-slot:content>
                {{item.area}}: {{item.week}}
            </template>
            <template v-slot:icon>
                <v-icon :name="item.weatherimg | weatherIcon"></v-icon> （{{item.date}}）
            </template>
        </ListItem>

    </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
    name:'List',
    data(){
        return {
            list:[ ],
            saveList:[],
            searchText:'',
            checklist:[],
            flag:true,
            checkFlag:undefined,
        }
    },
    components: {
    ListItem
  },
  created(){
    let _this = this;
    this.$axios.get('http://api.tianapi.com/txapi/tianqi/index',{     
        params:{
            key:"765b7cc79d9c596dbd686d890cb65d9c",
            city:'成都'
        }
    }).then(function(res){
        console.log(res.data)
        _this.list = _this.saveList = res.data.newslist;
    }).catch(function (error) {
        console.log(error);
    });
  },
    methods:{
        search(){
            let newList = this.saveList.filter(item=>{
                if(item.week.includes(this.searchText)){
                    return true;
                }                
            })
            this.list = newList;
        },
        change(){
            this.flag = !this.flag;
            if(this.flag){ //多选框
                this.checkFlag = undefined;
            }else{
                this.checklist=[];
            }
        }
    },
    filters: {
        weatherIcon(weather) {
            let icon='';
            switch(weather.slice(0,weather.indexOf('.'))){
                case 'yu':
                    icon='cloud-drizzle';
                    break;
                case 'yin':
                    icon = 'cloud';
                    break;
                default:
                    icon = 'sun';
            }
            return icon;
        }
    }
}
</script>

<style lang="less" scoped>
@color:#8196f1;
@radius:5px;
.input-btn{
    height: 30px; 
    outline:none;
    border:@color 1px solid;
    border-radius: @radius ;
}
.list-top{
    display: flex;
    align-items: center;
    justify-content: center;
    width:60%;
    height:80px;
    .search-input{
        width: 40%;       
        padding:2px;
        .input-btn();
    }
    .search-btn{
        width:10%;
        margin-top:1px; 
        background-color:#c5e7f7;
        cursor:pointer;
        text-align: center;
        font-size: 16px;
        margin:0 5px;
        .input-btn();
    }
}
</style>
