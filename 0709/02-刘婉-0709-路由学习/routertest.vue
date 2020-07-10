<template>
    <div>
        <Input v-model="value" placeholder="Enter something..." clearable style="width: 400px"/>
        <Button type="primary" icon="ios-search" @click="get_data()">Search</Button>

        <ul v-for="(value,index) in citymasg" :key="index">
            <List border size="large">
                <li>
                {{citymasg[index].date}} :  {{citymasg[index].weather}}
                <router-link 
                    :to="{
                        path: 'day',
                        query: {
                            id: index,
                            dataObj: citymasg[index]
                        }
                    }">详情
                </router-link>
            </li>
            </List>         
        </ul>     
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            value:'',
            citymasg:[],
            flag:true,
        }
    },

    methods: {
        get_data: function(){
      //!!函数内部this的转换
        let _this=this;
        this.$axios.get("http://api.tianapi.com/txapi/tianqi/index",{
            params: {
                key: "765b7cc79d9c596dbd686d890cb65d9c",
                city: _this.value,
            }
    },
        ).then(function(response){
            _this.citymasg=response.data.newslist;
            console.log(response.data.newslist);
            
        }).catch(function(error){
          console.log(error);
        })
      },

    },
}
</script>