<template>
  <form @submit.prevent="submit" class="card contact">
    <div>
        <label for="message">Message</label>
        <textarea  :class="requiedMessage ? 'requied' : ''"  type="text" name="message"  cols="40" rows="6" v-model="form.message"> </textarea>
        <p :class="requiedMessage ? 'requied-message' : 'hidden'">This field is requied</p>
    </div>
    <div class="action">
        <button type="submit">Send Message</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
// import axios from 'axios';
export default {
    props:{
        coach:{
            type: Object,
            default: () =>{}
        }
    },
    data() {
        return {
            form :{
                message: '',
            },
            requiedMessage: false,
            validEmail: false,
        }
    },
    watch:{
        'form.message' :{
            handler() {
                this.requiedMessage = false;
            }
        }
    },
    methods:{
        async submit() {
             if (this.form.message === '') {
                this.requiedMessage = true;
            } else {
                try {
                    const user = JSON.parse(localStorage.getItem('user'));
                    await axios.post('http://localhost:3000/messages',{
                        name: user.name,
                        senderId: user.id,
                        receiverId: this.coach.coachId,
                        messages: this.form.message
                    })
                    this.$router.push('/')
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
}
</script>

<style scoped>
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
label {
    font-weight: 600;
}
input {
    font-size: 16px;
}
.contact {
    padding-left: 24px;
    padding-right: 24px;
}
.contact div {
    display: flex;
    flex-direction: column;

    gap: 16px;
    margin-bottom: 16px;
}
.action {
    display: flex;
    align-items: center;
}
.contact button {
    width: max-content;

    color: white;
    background-color: #3a0061;
}
</style>