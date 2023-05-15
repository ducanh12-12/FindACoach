<template>
    <nav>
        <div class="header">
          <h1>
              <router-link to="/">Find a Coach</router-link>
          </h1>
          <ul class="">
              <li v-if="loggedIn"><router-link to="/coaches">All Coaches</router-link></li>
              <li v-if="loggedIn"><router-link to="/messages">Messages</router-link></li>
              <li v-if="loggedIn"><button @click="logout" >Logout</button></li>
          </ul>
        </div>
    </nav>
</template>

<script>
export default {
    computed:{
        loggedIn() {
            return !(localStorage.getItem('loggedIn') === 'false')
        }
    },
    methods:{
        async logout() {
            localStorage.removeItem('user');
            localStorage.setItem('loggedIn', false);
            this.$router.go();
        }
    }

}
</script>

<style scoped>
    nav {
        background-color: #3d008d;
    }
    .header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 8px 24px;
        align-items: center;
    }
    h1 a {
        color: white;
        cursor: pointer;
    }
    ul {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 12px;
    }
    ul li a {
        cursor: pointer;
        padding: 16px;
        border: 1px solid #f391e3;
        color:#f391e3;
        font-size: 16px;
    }
    ul li a:hover {
        border: 1px solid white;
        color:white;
    }
    ul li button {
        background-color: transparent;
        border-radius: 0;
        cursor: pointer;
        padding: 16px;
        border: 1px solid #f391e3;
        color:#f391e3;
        font-size: 16px;
    }
    ul li button:hover {
        border: 1px solid white;
        color:white;
    }
</style>