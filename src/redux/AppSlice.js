import{ createSlice} from "@reduxjs/toolkit"

const  AppSlice= createSlice({
    name:"app",
    initialState:{
        open:false,
        emails:[],
        
    },
    reducers:{
        setOpen:(state,action)=>{
            state.open=action.payload;
        },
        setEmails:(state,action)=>{
            state.emails=action.payload;
        }
    }
});
export const { setOpen,setEmails } = AppSlice.actions;
export default AppSlice.reducer;