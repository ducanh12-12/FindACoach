<template>
  <div class="card fitler-coachs">
    <h2>Find Your Coach</h2>
    <ul class="">
        <li>
            <input type="checkbox" id="Frontend" name="Frontend" v-model="frontend" >
            <label for="Frontend">Frontend</label><br>
        </li>
        <li>
            <input type="checkbox" id="Backend" name="Backend" v-model="backend">
            <label for="Backend">Backend</label><br>
        </li>
        <li>
            <input type="checkbox" id="Career" name="Career" v-model="career">
            <label for="Career">Career</label><br>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            frontend: true,
            backend: true,
            career: true,
            filter:['frontend','backend','career'],
        }
    },
    watch:{
        frontend() {
            !this.frontend ?  this.filter.splice(this.filter.indexOf('frontend'),1) : this.filter.push('frontend');
            this.handleFilter()
        },
        backend() {
            !this.backend ?  this.filter.splice(this.filter.indexOf('backend'),1) : this.filter.push('backend');
            this.handleFilter()
        },
        career() {
            !this.career ?  this.filter.splice(this.filter.indexOf('career'),1) : this.filter.push('career');
            this.handleFilter()
        },
    },
    methods:{
        handleFilter() {
            this.$emit('filter',this.filter);
        }
    },
}
</script>

<style scoped>
.fitler-coachs{
    padding-left: 25px ;
}
    .fitler-coachs   h2 {
        text-align: start;
    }
    .fitler-coachs   ul {
        padding: 0;
        font-size: 16px;
        display: flex;
        gap: 10px;
    }
</style>