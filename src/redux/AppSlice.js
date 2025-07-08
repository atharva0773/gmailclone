import{ createSlice} from "@reduxjs/toolkit"

const  AppSlice= createSlice({
    name:"app",
    initialState:{
        open:false,
        emails:[],
        SelectedEmail:null
    },
    reducers:{
        setOpen:(state,action)=>{
            state.open=action.payload;
        },
        setEmails:(state,action)=>{
            state.emails=action.payload;
        },
        // setSelectedEmail:(state,action)=>

    }
});
export const { setOpen,setEmails } = AppSlice.actions;
export default AppSlice.reducer;