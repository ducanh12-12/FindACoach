<template>
  <div>
    <Header />
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;

}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
.card {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
  }
  button {
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 9999px;
    background-color: white;
  }
  ul {
    list-style: none;
  }
  .frontend {
    background: rgb(255,95,109);
    background: linear-gradient(90deg, rgba(255,95,109,1) 48%, rgba(255,195,113,1) 100%);
    color: white;
}

.backend {
  background: rgb(178,69,146);
background: linear-gradient(90deg, rgba(178,69,146,1) 25%, rgba(241,95,121,1) 86%, rgba(241,95,121,1) 86%, rgba(241,95,121,1) 94%, rgba(241,95,121,1) 95%);
  color: white;
}

.career {
  background: rgb(22,191,253);
background: linear-gradient(90deg, rgba(203,48,102,1) 25%, rgba(22,191,253,1) 88%);
  color: white;
}
.requied {
      border: 1px solid red;
  }
  .requied-message {
      color: red;
      display: block;
  }
  .hidden {
      display: none;
  }
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
