<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username" />
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password" />
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        name:'Login',
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入！', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入！', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码需要至少6位！', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid && this.formInline.user==="xff" && this.formInline.password==="123456") {
                        this.$Message.success('Success!');
                        sessionStorage.setItem("isLogin", true);
                        this.$router.push({path:'/list'});
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
