import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Button,
    HStack,
    VStack,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Modal,
    ModalContent,
    useDisclosure,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
    IoAnalyticsSharp,
    IoColorFilterOutline,
    IoLogoBitcoin,
    IoScanOutline,
    IoSearchSharp,
    IoShieldCheckmarkOutline,
    IoCartOutline
} from 'react-icons/io5';
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { durationInMonths } from '@progress/kendo-date-math';
import { useDispatch } from 'react-redux';
import axios from "axios"

export default function RoomDetails() {
    const {token}=useSelector(state=>state.auth)
    const {details}=useSelector(state=>state.userdetails)
    

const dispatch=useDispatch()
    const [selectedRoom, setSelectedRoom] = useState(null)
    const [selectedHouse,setSelectedHouse]=useState(null)
    const [selectedBooking,setSelectedBooking]=useState(null)
    const [NumberOfPeoples,setNumberOfPeoples]=useState('')
    const [FromDate,setFromDate]=useState('')
    const [TillDate,setTillDate]=useState('')
    const [todos, setTodos] = useState([]);
    const { rooms } = useSelector(state => state.rooms)
    const { houses } = useSelector(state => state.houses)
    const { RoomId } = useParams()

    const fetchRoom = (RoomId) => {
        const room = rooms.find(rooms => rooms._id == RoomId)
        setSelectedRoom(room)
        setTodos(room.DateByPrice)
    }
     const fetchBooking = async(RoomId) => {
        if(token){
            const res = await axios.post(`http://localhost:8080/api/booking/find`,{
                id:RoomId,
                token:token
            })
            const { booking } = res.data
            setSelectedBooking(booking)
            console.log(booking)
        }else{
            console.log("Without Login Could not fetch Booking")
        }
       
        
    }
    const fetchHouse = (HouseId) => {
        const house = houses.find(houses => houses._id == HouseId)
        setSelectedHouse(house)
       console.log(house)
    }
const [book,setbook]=useState(0)
// UserId,AdminId,RoomId,ImageUrl,RoomNumber,SquareFeet,Floor,NumberOfBeds,MinStay,MaxStay,R_ContactNumber,NormalRent,DateByPrice,R_Description,HouseName,HouseOwnerName,HouseOwnerNumber,Address,City,H_Description,U_ContactNumber,U_Name,FromDate,TillDate,NumberOfPeoples
    const addBooking=async()=>{
        try {
            const res = await axios.post('http://localhost:8080/api/booking/',{
                details:{
                    UserId:details._id,
                    AdminId:selectedRoom.AdminId,
                    RoomId:selectedRoom._id,
                    ImageUrl:selectedRoom.photos,
                    RoomNumber:selectedRoom.RoomNumber,
                    SquareFeet:selectedRoom.SquareFeet,
                    Floor:selectedRoom.Floor,
                    NumberOfBeds:selectedRoom.NumberOfBeds,
                    MinStay:selectedRoom.MinStay,
                    MaxStay:selectedRoom.MaxStay,
                    R_ContactNumber:selectedRoom.ContactNumber,
                    NormalRent:selectedRoom.NormalRent,
                    DateByPrice:selectedRoom.DateByPrice,
                    R_Description:selectedRoom.Description,
                    HouseName:selectedHouse.name,
                    HouseOwnerName:selectedHouse.houseOwnerName,
                    HouseOwnerNumber:selectedHouse.contactNumber,
                    Address:selectedHouse.address,
                    City:selectedHouse.city,
                    H_Description:selectedHouse.desc,
                    U_ContactNumber:details.phone,
                    U_Name:details.username,
                    FromDate:FromDate,
                    TillDate:TillDate,
                    NumberOfPeoples:NumberOfPeoples
                },
                token:token
             
            })
            const {savedBooking}=res.data
            console.log(savedBooking)
            if(savedBooking){
               
                toast.success('Booking Added Successfully!')
                dispatch({
                    type: "ADD_BOOKING",
                    payload:{savedBooking}
                })
                
               
            }else{
                toast.error("ACTION FAILED")
                dispatch({
                    type: "ADD_BOOKING_FAILED",
                })
            }
        } catch (error) {
            console.log(error)
           
        }
    }
    console.log(selectedBooking)
    useEffect(() => {
        fetchRoom(RoomId)
          const HouseId= localStorage.getItem("HouseId")
          fetchHouse(HouseId)

          fetchBooking(RoomId)
       
    }, [])
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
const Booking=()=>{
   if(!token){
    toast.error("Login Your Account")
   }else{
    if(FromDate!='' && TillDate!='' && NumberOfPeoples!=''){
    var date1 = new Date(FromDate);
    var date2 = new Date(TillDate);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    const minstay =parseInt(selectedRoom.MinStay)
    const maxstay=parseInt(selectedRoom.MaxStay)
    if(Difference_In_Days>=minstay && Difference_In_Days <=maxstay){
        if(parseInt(NumberOfPeoples) <= parseInt(selectedRoom.NumberOfBeds)){
            if(selectedBooking.length>0){
                var counter=0
                selectedBooking.forEach(element => {
                    var Date1 = new Date(element.FromDate);
                    var Date2 = new Date(element.TillDate);
                    if(Date1.getTime()>=date1.getTime() && Date2.getTime()<=date2.getTime()){
                              counter+=1
                    }
                   
                });
                if(counter>0){
                    toast.error("Room Not Available on this Range!")
                }
                if(counter==0){
                    addBooking()
                    counter=0
                }
            }else{
                addBooking()
            }
       
            console.log(Difference_In_Days)
            console.log(details)
        }else{
            toast.error("Too Many Peoples Beds Not Available!")
        }
    }else{
        toast.error("Not in Range!")
    }
   
    }else{
        toast.error("Enter valid details!")
    }
   }
}
    
    return (
        <Container maxW={'7xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            selectedRoom && selectedRoom.photos
                        }
                        objectFit={'fill'}
                    />
                </Flex>
                <Stack spacing={4}>
                  
                   
                    <Heading> Room Number : {selectedRoom && selectedRoom.RoomNumber}</Heading>
                  
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Square Feet : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedRoom && selectedRoom.SquareFeet}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>In Floor : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedRoom && selectedRoom.Floor}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Number Of Beds : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedRoom && selectedRoom.NumberOfBeds}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>MinStay : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedRoom && selectedRoom.MinStay}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>MaxStay : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedRoom && selectedRoom.MaxStay}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>ContactNumber : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedRoom && selectedRoom.ContactNumber}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Normal Rent ( Per Day) : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedRoom && selectedRoom.NormalRent}
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
                       {selectedRoom && selectedRoom.Description}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>House Name : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedHouse && selectedHouse.name}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>HouseOwner Name : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedHouse && selectedHouse.houseOwnerName}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>HouseOwner Number : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedHouse && selectedHouse.contactNumber}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>Address : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedHouse && selectedHouse.address}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>City : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedHouse && selectedHouse.city}
                    </Text></Stack>
                    </Flex>
                    <Flex>
                        <Stack spacing={4}><Text fontWeight='bold' fontSize={'lg'}>House Description : </Text></Stack>
                        <Stack marginLeft={5}> <Text color={'gray.900'} fontSize={'lg'}>
                       {selectedHouse && selectedHouse.desc}
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
                            onClick={onOpen}
                            flexGrow={'4'}
                            marginLeft={'4'}
                            loadingText="Submitting"
                            size="lg"
                            bg={'gray.900'}
                            color={'white'}
                            _hover={{
                                bg: 'pink.400',
                            }}>
                            Book Now &nbsp; &nbsp;
                        </Button>
   <Modal
     initialFocusRef={initialRef}
     finalFocusRef={finalRef}
     isOpen={isOpen}
     onClose={onClose}
   >
     <ModalOverlay />
     <ModalContent>
       <ModalHeader>Make Booking</ModalHeader>
       <ModalCloseButton onClick={onClose}/>
       <ModalBody pb={6}>
         <FormControl>
           <FormLabel>From Date</FormLabel>
           <Input value={FromDate} onChange={(e)=>{setFromDate(e.target.value)}} ref={initialRef} placeholder='Choose Your From Date' type="date"/>
         </FormControl>
         <FormControl>
           <FormLabel>Till Date</FormLabel>
           <Input value={TillDate} onChange={(e)=>{setTillDate(e.target.value)}} ref={initialRef} placeholder='Choose Your Till Date' type="date"/>
         </FormControl>
         <FormControl mt={4}>
           <FormLabel>Number Of Peopels</FormLabel>
           <Input value={NumberOfPeoples} onChange={(e)=>{setNumberOfPeoples(e.target.value)}} placeholder='Number Of Heads' />
         </FormControl>
       </ModalBody>
       <ModalFooter>
         <Button onClick={
                  Booking }        
         colorScheme='blue' mr={3}>
           Book
         </Button>
         <Button onClick={onClose}>Cancel</Button>
       </ModalFooter>
     </ModalContent>
   </Modal>
                    </Flex>
                </Stack>
            </SimpleGrid>
        </Container >
    );
}