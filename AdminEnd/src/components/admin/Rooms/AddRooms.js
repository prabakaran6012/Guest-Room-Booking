import axios from "axios"
import { useEffect, useState } from "react"
import {HouseItems} from "./HouseItems"
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
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"

const AddRooms=()=>{
    const navigate=useNavigate()
    const Refresh=()=>{
 setz(z+1)
    }

const [Houses,setHouses]=useState([])

const getHouses=async()=>{
    const Aid=localStorage.getItem('AdminId')
    const tk=localStorage.getItem('token')
   console.log(Aid,tk)
    const res = await axios.post(`http://localhost:8080/api/house/all`,{
        id:Aid,
        token:tk
    })
    const { houses } = res.data
    setHouses(houses)
}
const dispatch=useDispatch()
dispatch({
    type: "GET_ALL_HOUSES",
    payload: { Houses }
})
const [z,setz]=useState(0)
    useEffect(()=>{
        console.log(z)
        getHouses()
    },[z])
    return(
        <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
    >
        {Houses?.length > 0 ? <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '16' }}
        >
            <Stack spacing={{ base: '8', md: '10' }} flex="2">
                <Heading fontSize="2xl" fontWeight="extrabold">
                    Choose House & Add Rooms.. <Button  width="120px"
                            onClick={Refresh}
                            bg={'gray.900'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.400',
                            }}> Refresh </Button>
                </Heading>

                <Stack spacing="6">
                    {Houses.map((item) => (
                        <HouseItems item={item} setHouses={setHouses} key={item._id} {...item} />
                    ))}
                </Stack>
            </Stack>

           
        </Stack> : <Box>
           <Text>"House Not Found .. Add House"</Text>
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
export default AddRooms