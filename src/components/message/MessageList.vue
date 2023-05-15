<template>
  <div class="card">
    <h2>Messages</h2>
    <loading v-if="loading"></loading>
    <div v-else>
        <ul v-if="messages.length > 0" class="messages-list">
            <li v-for="message in messages" :key="message.description">
                <p>{{ message.name }}</p>
                <span v-html="message.messages"></span>
            </li>
        </ul>
        <h2 v-else>No messages</h2>
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
        messages: {
            type: Array,
            default: () => [],
        }
    },
}
</script>

<style scoped>
    h2  {
        text-align: center;
    }
    .messages-list  {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .messages-list li {
        border: 1px solid #333;
        padding: 16px;
    }
    .messages-list li p {
        margin-top: 0;
        font-size: 15px;
        font-weight: 600;
        color: #3d008d;
    }
    .messages-list li span {
        display: block;
        font-size: 20px;
    }
</style>