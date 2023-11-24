import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'studentSlice',
    initialState:[],
    reducers:{
        addStudents: (state,action) =>{
            state.push(action.payload)
        },
        deleteStudents: (state,action) =>{
            return state.filter((item,index)=> index !== action.payload )
        },
        editStudent: (state, action) => {
            const { data, index } = action.payload;
            return state.map((item, i) => {
                return i === index ? data : item;
            });
        }
        
    }
})

export const {addStudents,deleteStudents,editStudent} = studentSlice.actions
export default studentSlice.reducer