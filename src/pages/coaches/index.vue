<template>
  <div>
    <FilterCoach @filter="handleFilter" />
    <div class="card">
    <div class="action">
      <button :disabled="loading" @click="handleRefresh">Refresh</button>
      <button v-if="user.type !== 'coach'" @click="$router.push('/coaches/register')">Register as Coach</button>
    </div>
    <ListCoach :loading="loading" :coaches="coaches" />
    </div>
  </div>
</template>

<script>
 import {mapState} from 'vuex';
 import FilterCoach from '@/components/coaches/Filter.vue'
 import ListCoach from '@/components/coaches/List.vue'

export default {
    components: {FilterCoach,ListCoach},
    async created () {
      await this.fetchData();
    },
    data() {
      return {
        loading: false,
        user: JSON.parse(localStorage.getItem("user"))
      }
    },
    computed:{
        ...mapState('coaches',['coaches']),
    },
    methods:{
      async fetchData(query) {
        try {
        this.loading = true;
        await this.$store.dispatch('coaches/fetchAll',query);
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false;
      }
      },
      async handleRefresh() {
        await this.fetchData();
      },
      async handleFilter(filter) {
        await this.fetchData(filter)
      }
    }
}
</script>

<style scoped>
.action {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .action button {
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 9999px;
    background-color: white;
  }
  .action button:last-child {
    background-color: rgb(255,95,109);
    padding: 11px 20px;
    color: white;
    border: 1px solid white;
  }
</style>