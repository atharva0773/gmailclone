import{ createSlice} from "@reduxjs/toolkit"

const  AppSlice= createSlice({
    name:"app",
    initialState:{
        open:false
    },
    reducers:{
        setOpen:(state,action)=>{
            state.open=action.payload;
        }
    }
});
export const { setOpen } = AppSlice.actions;
export default AppSlice.reducer;