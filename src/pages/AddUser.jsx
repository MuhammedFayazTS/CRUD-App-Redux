import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudents } from '../Redux/Slices/studentSlice'
import { useNavigate } from 'react-router-dom'
import { Button,Header } from '@chakra-ui/react'
import { IoMdArrowRoundBack } from "react-icons/io";

function AddUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [student,setStudent] = useState({
        name:'',
        mail:'',
        address:'',
    })
    const handleAdd = () =>{
        if(student.name === "" && student.mail === "" && student.address ==="") return
        dispatch(addStudents(student))
        navigate('/')
    }

  return (
    <>
        <div className="bg-slate-100 w-full h-full">
        <Button className='absolute top-8 left-10' onClick={() => navigate(`/`)} leftIcon={<IoMdArrowRoundBack />} >
                Back
              </Button>
                <div className='flex flex-col gap-3 w-full h-full  pt-36 items-center text-slate-500'>
                    <h2 className='my-3 text-3xl font-semibold text-slate-600'>Student Details</h2>
                    <input onChange={(e)=>setStudent({...student,name:e.target.value})}
                     placeholder='Enter Student Name' type="text" className='md:w-2/6 w-5/6 shadow p-2 border-0 outline-none rounded bg-white  focus:outline-slate-300 hover:bg-slate-50' />
                    <input onChange={(e)=>setStudent({...student,mail:e.target.value})}
                     placeholder='Enter Student Mail' type="text" className='md:w-2/6 w-5/6 shadow p-2 border-0 outline-none rounded bg-white  focus:outline-slate-300 hover:bg-slate-50' />
                    <textarea onChange={(e)=>setStudent({...student,address:e.target.value})}
                     placeholder='Enter Student Address'  className='md:w-2/6 w-5/6 shadow p-2 border-0 outline-none rounded bg-white  focus:outline-slate-300 hover:bg-slate-50' />
                    <button onClick={handleAdd}
                     className="bg-blue-500 py-2 px-4 rounded text-white active:bg-blue-600 my-2">
                        Add User</button>
                </div>
        </div>
    </>
  )
}

export default AddUser