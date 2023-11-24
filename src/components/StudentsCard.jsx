import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteStudents } from '../Redux/Slices/studentSlice'
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardBody,  Text, Box, Heading, Stack, StackDivider, Button } from '@chakra-ui/react'
import { MdBuild,  MdDelete } from "react-icons/md"



function StudentsCard({ index, student }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const id = index + 1;
  return (
    <>
      <Card>
        <CardHeader className='flex items-center' >
          <Heading size='md'>{student?.name}</Heading>
          <p className='ml-auto'>#{index+1}</p>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Mail
              </Heading>
              <Text pt='2' fontSize='sm'>
                {student?.mail}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Address
              </Heading>
              <Text pt='2' fontSize='sm'>
                {student?.address}
              </Text>
            </Box>
            <Stack direction='row' spacing={4}>
              <Button onClick={() => navigate(`/editUser/${id}`)} leftIcon={<MdBuild />} colorScheme='blue' variant='solid'>
                Edit
              </Button>
              <Button onClick={() => dispatch(deleteStudents(index))} rightIcon={<MdDelete />} colorScheme='pink' variant='solid'>
                Delete
              </Button>
            </Stack>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}

export default StudentsCard