import {configureStore} from '@reduxjs/toolkit';

import projecsReducer from './project-store';

const store = configureStore({
    reducer: {
        projects: projecsReducer
    },
});

export default store;