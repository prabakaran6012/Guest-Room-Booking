import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
    Button,
    HStack,
    VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from "axios"
import { DeleteBooking } from '../../../actions/booking';

export default function BookingDetails() {
    const {token}=useSelector(state=>state.auth)
    const {details}=useSelector(state=>state.userdetails)
    const {BookingId}=useParams()

const dispatch=useDispatch()
    
    const [selectedBooking,setSelectedBooking]=useState(null)
    const [todos,setTodos]=useState([])

   
     const fetchBooking = async(BookingId) => {
        if(token){
            const res = await axios.post(`http://localhost:8080/api/booking/bookingbyid`,{
                id:BookingId,
                token:token
            })
            const { booking } = res.data
            setSelectedBooking(booking)
            setTodos(booking.DateByPrice)
            console.log(booking)
        }else{
            console.log("Without Login Could not fetch Booking")
        }
    }

// UserId,AdminId,RoomId,ImageUrl,RoomNumber,SquareFeet,Floor,NumberOfBeds,MinStay,MaxStay,R_ContactNumber,NormalRent,DateByPrice,R_Description,HouseName,HouseOwnerName,HouseOwnerNumber,Address,City,H_Description,U_ContactNumber,U_Name,FromDate,TillDate,NumberOfPeoples
   
    console.log(selectedBooking)
    useEffect(() => {
          fetchBooking(BookingId)
    }, [])
   const DeleteBookings=()=>{
    dispatch(DeleteBooking(BookingId,token))
   }

    return (
        <Container maxW={'7xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            selectedBooking && selectedBooking.ImageUrl
                        }
                        objectFit={'fill'}
                    />
                </Flex>
                <Stack spacing={4}>
                  
                   
                    <Heading> Room Number : {selectedBooking && selectedBooking.RoomNumber}</Heading>
                  
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Square Feet : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.SquareFeet}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>In Floor : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.Floor}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Number Of Beds : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.NumberOfBeds}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Booking Date From : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.FromDate}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Booking Till Date : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.TillDate}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>MinStay : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.MinStay}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>MaxStay : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.MaxStay}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>ContactNumber : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.R_ContactNumber}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Normal Rent ( Per Day) : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.NormalRent}
                    </Text></Stack>
                    </Flex>
                    <VStack>
 {todos.map((todo) => (
     
     <HStack spacing="10px" w="320px">
           <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Date : </Text></Stack>
                        <Stack marginLeft={2}> <Text color={'gray.900'} fontSize={'lg'}>
                        {todo.Date}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Price : </Text></Stack>
                        <Stack marginLeft={2}> <Text color={'gray.900'} fontSize={'lg'}>
                        {todo.DateByPrice}
                    </Text></Stack>
                    </Flex>
         
     </HStack>))}
     </VStack>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Description :  </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.R_Description}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>House Name : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.HouseName}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>HouseOwner Name : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.HouseOwnerName}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>HouseOwner Number : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.HouseOwnerNumber}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Address : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.Address}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>City : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.City}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>House Description : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedBooking && selectedBooking.H_Description}
                    </Text></Stack>
                    </Flex>



                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>

                   
                    </Stack>
                    <Flex justifyContent={'space-between'} spacing={10} pt={2}>
                   
                        <Button
                         onClick={() => {
                            confirmAlert({
                                title: `Delete Booking`,
                                message: 'Are you sure to delete this.',
                                buttons: [
                                  {
                                    label: 'Yes',
                                    onClick: () =>  DeleteBookings()
                                  },
                                  {
                                    label: 'No',
                                    onClick: ()=>{}
                                  }
                                ]
                              });
                          
                        }}
                            
                            flexGrow={'4'}
                            marginLeft={'4'}
                            loadingText="Submitting"
                            size="lg"
                            bg={'pink.400'}
                            color={'white'}
                            _hover={{
                                bg: 'pink.400',
                            }}>
                           Delete Booking &nbsp; &nbsp;
                        </Button>
  
                    </Flex>
                </Stack>
            </SimpleGrid>
        </Container >
    );
}