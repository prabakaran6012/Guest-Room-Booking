import axios from "axios"
import { useEffect, useState } from "react"
import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import { useNavigate, useParams } from "react-router"
import { useDispatch } from "react-redux"
import { RoomItems } from "./RoomItem"

const Rooms=()=>{
    const {HouseId}=useParams()
    const navigate=useNavigate()
    const Refresh=()=>{
 setz(z+1)
    }

const [Rooms,setRooms]=useState([])

const getRooms=async()=>{
    const Aid=localStorage.getItem('AdminId')
    const tk=localStorage.getItem('token')

   console.log(Aid,tk,HouseId)
    const res = await axios.post(`http://localhost:8080/api/room/user/all`,{
        id:HouseId
    })
    const { rooms } = res.data
    console.log(rooms)
    setRooms(rooms)
}
const dispatch=useDispatch()
dispatch({
    type: "GET_ALL_ROOMS",
    payload: { Rooms }
})
const [z,setz]=useState(0)
    useEffect(()=>{
        console.log(z)
        getRooms()
    },[z])
    return(
        <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
    >
        {Rooms?.length > 0 ? <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '16' }}
        >
            <Stack spacing={{ base: '8', md: '10' }} flex="2">
                <Heading fontSize="2xl" fontWeight="extrabold">
                    Rooms.. <Button  width="120px"
                            onClick={Refresh}
                            bg={'gray.900'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.400',
                            }}> Refresh </Button>
                </Heading>

                <Stack spacing="6">
                    {Rooms.map((item) => (
                        <RoomItems item={item} setRooms={setRooms} key={item._id} {...item} />
                    ))}
                </Stack>
            </Stack>

           
        </Stack> : <Box>
           <Text>"Rooms Not Found .. "</Text>
        <Button  width="120px"
                            onClick={Refresh}
                            bg={'gray.900'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.400',
                            }}> Refresh </Button>
            </Box>
            }
    </Box>
    )
}
export default Rooms