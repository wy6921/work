<template>
    <div class="login-wrap">

        <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
            <h2>用户登录</h2>
            <el-form-item label="用户名">
                <el-input v-model="formdata.userId"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formdata.password" show-password></el-input>
            </el-form-item>
            <el-button class="login-btn" type="primary" @click="handlelogin">登录</el-button>
        </el-form>

    </div>
</template>

<script>

    export default {
        name: "Login",
        mounted() {
        },

        data() {
            return {
                formdata: {
                    userId: '',
                    password: ''
                }
            };
        },
        methods: {
            handlelogin() {
                // console.log(this.formdata.userId)
                // console.log(this.formdata.password)
                this.$router.push({
                    name: 'index',
                    params: {
                        password: this.formdata.password,
                        userId: this.formdata.userId
                    }
                })
            }
        }
    }

</script>

<style scoped>
    .login-wrap {
        height: 800px;
        background-color: cadetblue;
        background-image:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594293335448&di=fa0ba3a0727154d784f398ca650efc06&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170802%2Ffee4f199355c4255976290e2ec5d796f.jpeg'); ;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-form {
        width: 400px;
        background-color: white;
        border-radius: 5px;
        padding: 30px;

    }

    .login-btn {
        width: 100%;
    }
</style>