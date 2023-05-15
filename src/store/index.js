import { createStore } from 'vuex';

import coachesModule from './coaches'
import messagesModule from './messages'
import usersModule from './users';

const store = createStore({
    modules:{
        coaches:coachesModule,
        messages: messagesModule,
        users: usersModule,
    }
})
export default store;