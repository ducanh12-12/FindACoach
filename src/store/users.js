import axios from "axios";

const users = {
    namespaced: true,
    state:() => ({
        users:[],
    }),
    mutations: {
        getAll(state,payload) {
            state.users = payload
        },
    },
    actions:{
        async fetchAll (context) {
                const {data} = await axios.get(` http://localhost:3000/users`);
                const user = JSON.parse(localStorage.getItem('user'));
                const users = data.filter((item) => item.id !== user.id );
                context.commit('getAll', users);
        }
    }
}
export default users