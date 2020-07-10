<template>
    <div class="login">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
            </FormItem>
        </Form>
    </div>
    
</template>
<script>
    export default {
        name: 'Login',
        mounted() {
            this.city = this.$route.params.cityName
        },
        data () {
            return {
                city: '',
                formInline: {
                    user: '',
                    password: ''
                },
                userList:[
                    {
                        user: 'wy',
                        password: '123'
                    },
                    {
                        user: '123',
                        password: '666666'
                    }
                ],
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 3, message: '密码至少要有3位数', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // console.log(this.formInline)
                        const user = this.formInline.user
                        const pass = this.formInline.password
                        let temp = this.userList.find(item => {
                            return (item.user === user) && (item.password === pass)
                            })
                        if (temp) {
                            this.$Message.success('Success!d');
                            localStorage.setItem('user', JSON.stringify(user))
                            console.log(this.city, 'this.city')
                            if(!this.city){
                                this.$router.push({name:'City'})
                            }else {
                                console.log('tttt')
                                this.$router.push({
                                    name:'Detail',
                                    params: {
                                        cityName: this.city
                                }                                        
                              })
                            }                            
                    } else {
                        this.$Message.error('Fail!');
                    }
                    }
                })
            }
        }
    }
</script>
<style lang="less">
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
            align-self: center;
        }
    }
</style>
