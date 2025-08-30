import { createSlice } from "@reduxjs/toolkit";


export const soundSlice = createSlice({
    name: 'sound',
    initialState:{
        text:'',
        volume: 30,
        power: true,
        bank:'Piano'
    },
    reducers:{
        setSound:(state, action)=>{
            state.text = action.payload;
        },
        setPower:(state)=>{
            state.power = !state.power;
        },
        setVolume:(state, action)=>{
            state.volume = action.payload;
        },
        setBank:(state, action)=>{
            state.bank = action.payload;
        }
    },
})

export const {setSound, setPower, setVolume, setBank} = soundSlice.actions;
export default soundSlice.reducer;