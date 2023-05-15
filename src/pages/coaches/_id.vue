<template>
  <div>
    <CoachDetail :coach="coach" />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import CoachDetail from '@/components/coaches/Detail.vue';

export default {
    name: 'Page',
    components:{CoachDetail},
    async created () {
        await this.$store.dispatch('coaches/fetchDetail',this.$route.params.id);
    },
    computed:{
        ...mapState('coaches',['coach'])
    },
}
</script>

<style>

</style>