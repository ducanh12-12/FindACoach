<template>
  <div>
    <loading v-if="loading"></loading>
    <div v-else>
      <div class="list-coach" v-if="coaches.length > 0 && coaches">
        <div class="coach-item" v-for="coach,index in coaches" :key="index">
          <h2>
            {{ coach.name }}
          </h2>
          <p>
            {{ coach.hourlyRate }}
          </p>
          <ul>
            <li v-for="area in coach.areas" :key="area" :class="area">{{ area.toUpperCase() }}</li>
          </ul>
          <div class="action">
            <button @click="$router.push(`/coaches/${coach.id}/contact`)">Contact</button>
            <button @click="$router.push(`/coaches/${coach.id}`)">View Details</button>
          </div>
        </div>
      </div>
      <h2 v-else>No coaches found</h2>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    loading:{
            type: Boolean,
            default: false
        },
    coaches:{
      type: Array,
      default: () => {}
    }
  },
}
</script>

<style scoped>
  .list-coach {
  display: flex;
  flex-direction: column;
  gap: 20px;
  }
  .coach-item {
    border: 1px solid #666;
    border-radius: 5px;
    padding: 0 15px;
  }
  .coach-item .action {
    justify-content: end;
    margin-bottom: 10px;
    display: flex;
  }
  .coach-item button {
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 9999px;
    background-color: white;
  }
  .coach-item button:last-child {
    background-color: rgb(255,95,109);
    padding: 11px 20px;
    color: white;
    border: 1px solid white;
    margin-left: 10px;
  }
  .coach-item p {
    font-weight: 600;
  }
  .coach-item ul {
    display: flex;
    flex-wrap: wrap;
   gap: 10px;
  }
  .coach-item ul li {
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 9999px;
  }
</style>