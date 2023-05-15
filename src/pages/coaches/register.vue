<template>
  <div class="card">
    <h2>Register as a coach now!</h2>
    <RegisterForm @register="register" />
  </div>
</template>

<script>
import axios from 'axios'
import RegisterForm from '@/components/coaches/Form.vue'
export default {
    components:{RegisterForm},
    methods:{
        async register(form) {
          try {
            const user = JSON.parse(localStorage.getItem('user'));
            await axios.post('http://localhost:3000/coaches', {
              ...form
            });
            await axios.put(`http://localhost:3000/users/${user.id}`, {
              ...user,
              type: 'coach'
            });
            localStorage.setItem('user', JSON.stringify({
              ...user,
              type: 'coach'
            }));
            this.$router.push('/coaches')
          } catch (err) {
            console.log(err);
          }
        }
    }
}
</script>

<style>

</style>