import{ createSlice} from "@reduxjs/toolkit"

const  AppSlice= createSlice({
    name:"app",
    initialState:{
        open:false,
        emails:[],
        selectedEmail:null,
        searchText:"",
        user:null
    },
    reducers:{
        setOpen:(state,action)=>{
            state.open=action.payload;
        },
        setEmails:(state,action)=>{
            state.emails=action.payload;
        },
        setSelectedEmail:(state,action)=>{
            state.selectedEmail=action.payload;
        },
        setSearchText:(state,action)=>{
            state.searchText=action.payload;
        },
        setUser: (state,action)=>{
            state.user=action.payload;
        }

    }
});
export const { setOpen,setEmails,setSelectedEmail,setSearchText,setUser} = AppSlice.actions;
export default AppSlice.reducer;