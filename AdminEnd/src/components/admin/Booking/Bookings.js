import axios from "axios"
import { useEffect, useState } from "react"
import {BookingItems} from "./BookingItem"
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
import { useDispatch, useSelector } from "react-redux"

const Bookings=()=>{
    const Refresh=()=>{
 setz(z+1)
    }

const [Bookings,setBookings]=useState([])
const {token}=useSelector(state=>state.auth)
const {details}=useSelector(state=>state.admindetails)
const getBookings=async()=>{
   
    if(token){
        const res = await axios.post(`http://localhost:8080/api/booking/admin/bookings`,{
            id:details._id,
            token:token
        })
        const { booking } = res.data
        setBookings(booking)
        console.log(booking)
    }else{
        console.log("Without Login Could not fetch Booking")
    }
   
   
}
const dispatch=useDispatch()
dispatch({
    type: "GET_ALL_BOOKINGS",
    payload: { Bookings }
})
const [z,setz]=useState(0)
    useEffect(()=>{
        console.log(z)
        getBookings()
    },[z])
    return(
        <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
    >
        {Bookings?.length > 0 ? <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '16' }}
        >
            <Stack spacing={{ base: '8', md: '10' }} flex="2">
                <Heading fontSize="2xl" fontWeight="extrabold">
                    Bookings.. <Button  width="120px"
                            onClick={Refresh}
                            bg={'gray.900'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.400',
                            }}> Refresh </Button>
                </Heading>

                <Stack spacing="6">
                    {Bookings.map((item) => (
                        <BookingItems item={item} setBookings={setBookings} key={item._id} {...item} />
                    ))}
                </Stack>
            </Stack>

           
        </Stack> : <Box>
           <Text>"Bookings Not Found .."</Text>
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
export default Bookings