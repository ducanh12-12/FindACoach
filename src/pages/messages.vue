<template>
  <div>
    <ReveiverList :reveivers="users" @chooseReceiver="chooseReceiver"/>
    <MessageList :loading="loading" :messages="messages" />
    <div class="card message-bar">
      <input @keyup.enter="handleSendMessage" v-model="message" placeholder="Type message here .... ">
      <button @click="handleSendMessage">
        Send Messages
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MessageList from '@/components/message/MessageList.vue';
import ReveiverList from '@/components/message/ReceiverList.vue'
import axios from 'axios';
export default {
    components: {MessageList,ReveiverList},
    async created () {
      await this.$store.dispatch('users/fetchAll'); 
      this.fetchData();
    },
    data() {
      return {
        loading: false,
        message: '',
        reveiverId: this.$store.state.users.users[0]?.id,
      }
    },
    computed:{
        ...mapState('messages', ['messages']),
        ...mapState('users',['users'])
    },
    methods:{
      async fetchData(reveiver) {
        try {
          this.reveiverId = reveiver?.id || this.users[0].id;
          this.loading = true;
          await this.$store.dispatch('messages/fetchAll',this.reveiverId);
        } catch( err) {
          console.log(err)
        } finally {
          this.loading = false;
        }
      },
      async chooseReceiver(user) {
        await this.fetchData(user);
      },
      async handleSendMessage() {
        if (this.message !== '') {
          try {
            const user = JSON.parse(localStorage.getItem('user'));
            await axios.post("http://localhost:3000/messages", {
              messages: this.message,
              name: user.name,
              senderId: user.id,
              receiverId: this.reveiverId    
            })
            this.message = '';
            this.fetchData(this.reveiverId);
          } catch (err) {
            console.log(err)
          }
        }
      }
    }

}
</script>

<style scoped>
  button {
  }
  .message-bar {
    display: flex;
    flex-wrap: wrap;
    gap:10px;
  }
  .message-bar input {
    border-radius: 10px;
    font-size: 20px;
    padding: 10px;
    flex-grow: 1;
  }

</style>