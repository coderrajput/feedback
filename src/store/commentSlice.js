import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState={
    comments:[],
    currentUser:{},
    error:null
}

const commentSlice= createSlice({
    name:'comments',
    initialState,
    reducers:{
        addComment(state,action){
            console.log(action);
            state.comments.push(action.payload);
        },
        addUser(state,action){
            console.log(action);
            state.currentUser=action.payload;
        }
    }
});

const fetchComments=(state)=>state.comments.comments;

export const fetchCommentsMemoized=createSelector(
    [fetchComments],
    (comments)=>comments
);


export const {addComment, addUser} = commentSlice.actions
export default commentSlice.reducer;