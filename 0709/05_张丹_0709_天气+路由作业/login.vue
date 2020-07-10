<template>
  
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username"/>
                <Icon type="ios-person-outline" slot="prepend"></Icon>    
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password"/>
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
</template>

<script>
export default {
    data () {
            return {
                status:false,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度必须大于等于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid && this.formInline.user==="zd" && this.formInline.password==="123123") {
                        this.$Message.success('Success!');
                        sessionStorage.setItem("isLogin",true );
                        this.$router.push({name:'weather'})
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }

}
</script>

<style>

</style>