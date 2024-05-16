import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: "movies",
    initialState: {
        movie: null,
        trailor:null,
        popular:null,
        upcoming:null,
        toprated:null,
        trending:null,
        topTvSeries:null,
        airingtodayTvSeries:null,
        ontheairTvSeries:null,
        popularTvSeries:null,
        mylist:[],
        video:null,
        ID:null,
    },
    reducers:{
        add:(state,action) =>{
            state.movie=action.payload;
        },
        addtrailor: (state, action)=> {
            state.trailor = action.payload
        },
        addpopular:(state,action) =>{
            state.popular =action.payload;
        },
        addupcoming:(state,action) =>{
            state.upcoming=action.payload;
        },
        addtoprated:(state,action) =>{
            state.toprated=action.payload;
        },
        addtrending:(state,action) =>{
            state.trending=action.payload;
        },
        addTopTvSeries:(state,action) =>{
            state.topTvSeries = action.payload;
        },
        addPopularTvSeries:(state,action)=>{
            state.popularTvSeries = action.payload
        },
        addvideo:(state,action)=>{
            state.video = action.payload
        },
        addTrailorID:(state,action)=>{
            state.ID = action.payload
        },
        addairingtodayTvSeries:(state,action)=>{
            state.airingtodayTvSeries = action.payload
        },
        addontheairTvSeries:(state,action)=>{
            state.ontheairTvSeries = action.payload
        },
        addmylist:(state,action)=>{
            state.mylist.push(action.payload)
        },
        deletemylist:(state,action)=>{
            state.mylist.length = 0;
        },
        deleteData:(state,action)=>{
            state.mylist.splice(action.payload,1)
        }
    }
})
export const {add,addtrailor,addpopular,addtoprated,addupcoming,addtrending,addTopTvSeries,addPopularTvSeries,addvideo,addTrailorID,addairingtodayTvSeries,addontheairTvSeries,addmylist,deletemylist,deleteData}=movieslice.actions;
export default  movieslice.reducer;