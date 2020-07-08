<template>
    <div>
        <div>
           <input type="checkbox" v-model="checkAll">全选
            <div v-for="item in listProp" :key="item.fruit">
                <input type="checkbox" v-model="item.checked">{{item.fruit}}
            </div>
        </div>
        <p>{{"您选择了:"+result}}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                checkAll:0,
                rel:[],
                result:['空'],
            }
        },
        props: [
            'listProp','testProp'
        ],
        created(){
            for (let i=0;i<this.listProp.length;i++){
                this.listProp[i].checked=0
            }
        },
        watch:{
            listProp :{
                handler(){
                    for (let i=0;i<this.listProp.length;i++){
                        if(this.listProp[i].checked==true){
                            this.rel.push(this.listProp[i].fruit)
                        }
                    }
                    this.result=this.rel;
                    this.rel=[];  
                    if(this.result.length==0){
                        this.result=['空']
                    }  
                    console.log('listp', this.listProp);                                            
                },
                immediate:true,
                deep: true 
            },
            checkAll: {
                handler(val){
                    if(val===true){
                        for (let i=0;i<this.listProp.length;i++){
                            this.listProp[i].checked=1
                        }
                        console.log('tag', this.listProp)
                    } else{
                        for (let i=0;i<this.listProp.length;i++){
                            this.listProp[i].checked=0
                        }
                    }
                }
            },
        }

    }
</script>