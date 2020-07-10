<template>
  <div>
      <!-- <div>this is details page</div> -->
      <i-button type="primary" shape="circle" @click="changeLay">修改布局</i-button>
      <i-button type="primary" shape="circle" @click="back">返回</i-button>
      <div :class="classObject">
        <Card id="first">
                <p slot="title">天气详情</p>
                <p >{{list.area}}</p>
                <p>{{list.highest}}</p>
                <p>{{list.lowest}}</p>
                <p>{{list.weather}}</p>
                <p>{{list.tips}}</p>
        </Card>

        <Card id="second">
                <p slot="title">天气详情</p>
                <p >{{list.area}}</p>
                <p>{{list.highest}}</p>
                <p>{{list.lowest}}</p>
                <p>{{list.weather}}</p>
                <p>{{list.tips}}</p>
        </Card>

        <Card id="third">
                <p slot="title">天气详情</p>
                <p >{{list.area}}</p>
                <p>{{list.highest}}</p>
                <p>{{list.lowest}}</p>
                <p>{{list.weather}}</p>
                <p>{{list.tips}}</p>
        </Card>
      </div>
      <div :class="classObject">
          <!-- <div class="first"></div>
          <div class="line-second"></div>
          <div class="third"></div> -->
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return {
            classObject:{
                details:true,
                isColumn:true
            }
        }
    },
    mounted(){
        console.log(this.$route.params);
        
    },
    computed:{
        list:function(){
            return this.$route.params
        }
    
    },
    methods:{
        changeLay(){
            this.classObject.isColumn=!this.classObject.isColumn
        },
        back(){
            this.$router.push('/weather')
        }
    }

}
</script>

<style lang="less" scoped>
@width: 300px;
@height: @width - 50px;
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

.details{
    display: flex;
    // flex-direction: row;
    justify-content:space-between;
    margin: 30px 50px;
}
#first{   
    width:@width;
    height: @height;
    background-color: red;
    }
#second{
    width: @height+100px;
    height: @height;
    background-color: salmon;
    }
#third{
    width:@width;
    height: @height;
    background-color: silver;
    }

.isColumn{
    flex-direction: column
}

.line {
  display: flex;

  justify-content:space-between;
  .bordered();
  
    &-second{
    width: @height+100px;
    height: @height;
    background-color: salmon;
    }
}

.first{   
    width:@width;
    height: @height;
    background-color: red;
    }

// .second{
//     width: 100px;
//     height: @height+100px;
//     background-color: salmon;
// }
.third{
    width:@width;
    height: @height;
    background-color: silver;
}
</style>