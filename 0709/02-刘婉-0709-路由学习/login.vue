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
                formInline: {
                    user: '',
                    password: '',
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
           handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid&&this.formInline.user=="lw"&&this.formInline.password=="123") {
                        this.$Message.success('Success!');
                        this.$router.push({path:'/routertest'});
                        sessionStorage.setItem("islogin",true)                       
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
    }
    }
</script>

<style lang="less">

</style>