import axios from "axios";

const messages = {
    namespaced: true,
    state:() => ({
        messages:[],
    }),
    mutations: {
        getAll(state,payload) {
            state.messages = payload
        },
    },
    actions:{
        async fetchAll (context,payload) {
                const {data} = await axios.get(` http://localhost:3000/messages`);
                const user = JSON.parse(localStorage.getItem('user'));
                const messages = data.filter((message) => (message.receiverId === user.id && message.senderId === payload) || (message.receiverId === payload && message.senderId === user.id))
                context.commit('getAll', messages);
        },
    }
}
export default messages