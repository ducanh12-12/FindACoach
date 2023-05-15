<template>
  <div class="card">
    <ul>
        <li :class="reveiverCurrent(index) ? 'active' : ''" @click="handleChooseReveiver(user,index)" v-for="user,index in reveivers" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    props:{
        reveivers:{
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            current: 0
        }
    },
    methods:{
        reveiverCurrent(index) {
            if (index === this.current) {
                return true;
            } 
            return false;
        },
        handleChooseReveiver(user,index) {
            this.$emit('chooseReceiver', user);
            this.current = index
        }
    }
}
</script>

<style scoped>
    ul {
        display: flex;
        gap: 10px;
    }
    li {
        padding: 5px 15px;
        border: 1px solid #333;
        cursor: pointer;
        border-radius: 5px;
    }
    .active {
        background-color: rgb(255,95,109);
        color: white;
        border: 1px solid white;
    }
</style>