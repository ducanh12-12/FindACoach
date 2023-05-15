<template>
  <div>
    <div class="card">
        <h2>{{ coach.name }}</h2>
        <p>{{ coach.hourlyRate }}</p>
    </div>
    <div class="card">
        <h2>Intersted? Reach out now!</h2>
        <button v-if="$route.name === 'CoachDetail'" @click="$router.push(`${coach.id}/contact`)">Contact</button>
        <router-view :coach="coach"/>
    </div>
    <div class="card">
        <ul>
            <li v-for="area in coach.areas" :key="area" :class="area">{{ area.toUpperCase() }}</li>
        </ul>
        <p>{{ coach.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CoachDetail',
    props:{
        coach:{
            type : Object,
            default :() => {},
        },
        pageDetail: {
            type: Boolean,
            default : false,
        }
    },
}
</script>

<style scoped>
 ul {
    display: flex;
    gap: 10px;
 }
 ul li {
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 9999px;
  }
</style>