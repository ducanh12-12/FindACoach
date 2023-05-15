import axios from "axios";

const coaches = {
    namespaced: true,
    state:() => ({
        coaches:[],
        coach:{},
    }),
    mutations: {
        getAll(state,payload) {
            state.coaches = payload;
        },
        getDetail(state,payload) {
            state.coach = payload;
        }
    },
    actions:{
        async fetchAll (context,payload) {
            try {
                const data = await axios.get(` http://localhost:3000/coaches`);
                let coaches = []
                if (payload) {
                    coaches = data.data.filter(coach => !!payload.find((item) => coach.areas.includes(item)))
                } else  {
                    coaches = data.data
                }
                context.commit('getAll', coaches);
            } catch {
                context.commit('getAll', []);
            }
        },
        fetchDetail(context,payload) {
            const coach = context.state.coaches.find((item) => item.id == payload);
            context.commit('getDetail', coach);
        },
    }
}
export default coaches