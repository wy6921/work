<template>
    <div>
        <!-- ============== 区域选择 ================ -->
        <div class="search-div">
            <span>请选择您要查询的城市:</span>
            <!-- 省份 -->
            <select class="province-select" name="" id=""  @change="selectProvince">
                <option value="" v-for="(pro,index) in provinces" :key=index :value="pro">{{pro}}</option>
            </select>
            <!-- 城市 -->
            <select class="city-select" name="" id="" @change="selectCity">
                <option value="" v-for="(city,index) in currentCities" :key=index :value="city.name">{{city.name}}</option>
            </select>
            <button class="search-btn" @click="searchWeather">搜索</button>
        </div>
        <!-- ============= 天气预报 =========== -->
        <div class="weather-list-div">
            <item v-for="(item,index) in newsList" :key="index" class="item clear">
                <!-- 日期 -->
                <template v-slot:dateSlot>
                    <span>
                        <span>{{item.date}}</span>
                        <span>{{item.week}}</span>
                    </span>
                </template>

                <!-- 天气 -->
                <template v-slot:weatherSlot>
                    <span>
                        <span>{{item.weather}},{{item.lowest}}~{{item.highest}}</span>
                        <!-- <span></span> -->
                    </span>
                </template>

                <!-- 建议 -->
                <template v-slot:tipsSlot>
                    <span>
                    <span>{{item.tips}}</span>
                    </span>
                </template>

                <!-- 天气图案 -->
                <template v-slot:imgSlot>
                    <span>
                        <!-- <span class="iconfont">{{item.weatherImg}}</span> -->
                        <span class="iconfont icon-qing align-center"></span>
                    </span>
                </template>
            </item>
        </div>
        
    </div>
</template>
<script>
    import Item from './item'
    import axios from 'axios'
    export default{
        name:"List",
        components:{
            "item":Item
        },
        created(){
            this.initSelect();
        },
        data(){
            return {
                provinces:[],     //省份列表
                currentCities:[], //省份对应的城市列表
                currentPro:"北京市",
                currentDistrict:"北京市",
                newsList:[],  //未来一周天气情况
            }
        },
        computed: {
            getTempArea:function(low,high){
                return `${low}℃~${high}℃`
            }
        },
        methods: {
            //初始化下拉列表
            initSelect(){
                const pro = new Promise((resolve,reject)=>{
                   this.getProvinces();
                   resolve();
                });
                pro.then((res)=>{
                    this.getCities(this.currentPro);
                    this.searchWeather(this.currentDistrict);
                });
            },
            // 选择省份
            selectProvince(e){
                this.getCities(e.target.value);
            },
            // 选择城市
            selectCity(e){
                this.currentDistrict = e.target.value;
                this.searchWeather(this.currentDistrict);
            },
            // 获取省份
            getProvinces(){
                // 请求本地数据
                axios.get("../../static/province.json").then(res => {   
                    let provinceList = res["data"].provinceList;
                    this.provinces =provinceList;
                    this.currentPro = provinceList[0];
                })
            },
            // 获取指定省份下的城市列表
            getCities(pro){
                console.log(this.currentPro);
                axios.get(`https://restapi.amap.com/v3/config/district?keywords=${pro}`,{
                    params:{
                        key:"2fb1821c3d0aba96b60c173f4df84c08",
                        subdistrict:2, //返回下一级行政区；
                        extension:"base"
                    }
                })
                .then(res=>{
                    let temp =  res["data"].districts;
                    if(temp.length!=0)
                    {
                         this.currentCities = res["data"].districts[0].districts;
                         this.currentDistrict = this.currentCities[0].name;
                    }else{  //直辖市
                        this.currentCities = ["data"].districts;
                        this.currentDistrict = pro;
                    }
                   
                    this.searchWeather(this.currentDistrict);
                }).catch(function(err){
                    console.log(err)
                })
            },
            // 查询天气
            searchWeather(){
                // axios.get("http://wthrcdn.etouch.cn/weather_mini?city=北京").then(function(res){
                //     let data = res["data"].data;
                //     let weatherInfo = {
                //         checked:false,
                //         city:city,
                //         weather:`$(data.temp),`
                //     }
                //     console.log(data);
                // }).catch(function(err){
                //     console.log(err);
                // })
                // this.currentDistrict = "唐山市";
                axios.get(`http://api.tianapi.com/txapi/tianqi/index?city=${this.currentDistrict}`,{
                    params:{
                        key:"765b7cc79d9c596dbd686d890cb65d9c"
                    }
                }).then(res=>{
                    this.newsList = res["data"].newslist;
                    console.log(this.newsList);
                    
            }).catch(function(err){
                console.log(error);
            })
        },
    }
    }
</script>
<style>
    /* 设置字体图标 */
    .iconfont{
        font-size: 20px;
        font-weight: bold;
        color:orange
    
    }
    /* 设置select */
    .province-select,.city-select{
        width: 100px;
        padding: 5px;
    }
    .weather-list-div{
        margin:10px 0;
    }
    .item{
        border-bottom: 1px solid gray;
        display: inline-block;
        width: 70%;
        margin: 0 auto;
    }
    
    /* 清除浮动 */
    .clear:after{
        content: "";
        display: block;
        clear: both;
    }
    .search-btn{
        outline: none;
        border: 1px solid #ccc;
        padding: 5px 10px;
        border-radius: 5px;
    }
</style>
