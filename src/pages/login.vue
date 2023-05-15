<template>
  <div class="card">
    <h2>Login</h2>
    <div class="login-form">
        <LoginForm @login="login" />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue'
import axios from 'axios'

export default {
    components:{LoginForm},
    methods:{
        async login(form) {
            try {
                const users = await axios.get('http://localhost:3000/users');
                const user = users.data.find((user) => user.username === form.username && user.password === form.password );
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('loggedIn', true);
                    this.$store.commit('auth/setUser',user);
                    alert('Login Successful !')
                    this.$router.go();
                } else {
                    alert('Username or password incorrect !');
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style scoped>
    h2 {
        text-align: center;
    }
    .login-form {
        width: 50%;
        margin: 0 auto;
    }
</style>