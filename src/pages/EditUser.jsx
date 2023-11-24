import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editStudent } from '../Redux/Slices/studentSlice'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from '@chakra-ui/react';

function EditUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const students = useSelector(state=>state.studentKey)
    const [editIndex, setEditIndex] = useState(-1); 
    const [student, setStudent] = useState({
        name: '',
        mail: '',
        address: '',
    });

    useEffect(() => {
        const studentIndex = Number(params.id) - 1; // Adjusting index
        setEditIndex(studentIndex);
        if (studentIndex >= 0 && students.length > studentIndex) {
            const selectedStudent = students[studentIndex];
            setStudent({
                name: selectedStudent.name,
                mail: selectedStudent.mail,
                address: selectedStudent.address,
            });
        }
    }, [params.id, students]);
    const handleEdit=()=>{
        if (editIndex !== -1) {
            dispatch(editStudent({
                data:student,
                index: editIndex,
            }))
        }
        
        setEditIndex(-1);
        navigate('/')
    }

  return (
    <>
         <div className="bg-slate-100 w-full h-full relative">
            <Button className='absolute top-8 left-10' onClick={() => navigate(`/`)} leftIcon={<IoMdArrowRoundBack />} >
                Back
              </Button>
                <div className='flex flex-col gap-3 w-full h-full  pt-36 items-center text-slate-500'>
                    <h2 className='text-3xl  text-slate-700 my-3'>Student Details</h2>
                    <input value={student.name} onChange={(e)=>setStudent({...student,name:e.target.value})}
                     placeholder='Enter Student Name' type="text" className='md:w-2/6 w-5/6 p-2 border-0 outline-none rounded bg-white  focus:outline-slate-300 hover:bg-slate-50' />
                    <input value={student.mail} onChange={(e)=>setStudent({...student,mail:e.target.value})}
                     placeholder='Enter Student Mail' type="text" className='md:w-2/6 w-5/6 p-2 border-0 outline-none rounded bg-white  focus:outline-slate-300 hover:bg-slate-50' />
                    <textarea value={student.address} onChange={(e)=>setStudent({...student,address:e.target.value})}
                     placeholder='Enter Student Address'  className='md:w-2/6 w-5/6 p-2 border-0 outline-none rounded  bg-white  focus:outline-slate-300 hover:bg-slate-50' />
                    <button onClick={handleEdit}
                     className="bg-blue-500 py-2 px-4 rounded text-white active:bg-blue-600">
                        Edit User</button>
                </div>
        </div>
    </>
  )
}

export default EditUser