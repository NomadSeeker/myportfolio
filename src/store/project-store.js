import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        
    },
    reducers: {
        addProject(state, action) {
            state.projects.push(action.payload);
        },

        removeProject(state, action) {
            state.projects = state.projects.filter(project => project.id !== action.payload);
        },
    }
});

export default projectsSlice.reducer;

export const { addProject, removeProject } = projectsSlice.actions;