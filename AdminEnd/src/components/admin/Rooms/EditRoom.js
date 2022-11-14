import { useParams } from "react-router"
import {
    FormControl,
    Input,
    FormHelperText,
    FormLabel,
    Box,
    Select,
    VStack,
    Heading,
    Flex,
    Stack,
    Text,
    Button,
    HStack,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Modal,
    ModalContent,
    useDisclosure
} from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { storage } from "../../../firebase";
import {getDownloadURL, ref,uploadBytes}from"firebase/storage";
import {v4}from "uuid"
import { toast } from 'react-hot-toast'
import { useNavigate} from 'react-router';
import axios from 'axios';
import { UpdateRoom } from "../../../actions/room"
import { uuidv4 } from '@firebase/util';
import { DeleteIcon } from '@chakra-ui/icons';

const EditRoom = () => {
    var item=[]
    const {RoomId}=useParams()
  
    const dispatch = useDispatch()

    const uploadimage=async()=>{
        if(imageupload==null) return;
      const imageref=ref(storage,`rooms/${v4()+imageupload.name}`)
      await uploadBytes(imageref,imageupload).then((snapshot)=>{
        toast.success('Upload Success')
        setimgbt('Uploaded!')
    })
      const url = await getDownloadURL(imageref).catch((error) => { throw error });
       setimageUrl(url)
       setimageupload(null)
       
      }
      

      const navigate=useNavigate()
      const Refresh=()=>{
         navigate('/')
      }

       const {rooms}=useSelector(state=>state.rooms)
       rooms.forEach(element => {
        if(element._id==RoomId){
          item[0]= element
        }
       });
const [Room,setRoom]=useState(item[0])

const [RoomNumber, setRoomNumber] = useState(Room.RoomNumber)
    const [imageUrl, setimageUrl] = useState(Room.photos)
    const [Description, setDescription] = useState(Room.Description)
    const [SquareFeet, setSquareFeet] = useState(Room.SquareFeet)
    const [Floor, setFloor] = useState(Room.Floor)
    const [MinStay, setMinStay] = useState(Room.MinStay)
    const [MaxStay, setMaxStay] = useState(Room.MaxStay)
    const [contactNumber,setcontactNumber]=useState(Room.ContactNumber)
    const [NormalRent,setNormalRent]=useState(Room.NormalRent)
    const [NumberOfBeds,setNumberOfBeds]=useState(Room.NumberOfBeds)



const [imgbt, setimgbt] = useState('Upload Image')
const [imageupload,setimageupload]=useState(null)
const tk=localStorage.getItem('token')
const id=Room._id

const handleUpdate=()=>{
    // console.log()
     dispatch(UpdateRoom(id,RoomNumber,imageUrl,Description,SquareFeet,Floor,MinStay,MaxStay,contactNumber,NormalRent,NumberOfBeds,todos,tk))
}




const { isOpen, onOpen, onClose } = useDisclosure()

const initialRef = React.useRef(null)
const finalRef = React.useRef(null)


// DatesByPrice
const [date,setDate]=useState('')
const [dateByPrice,setDateByPrice]=useState('')
const todosList = Room.DateByPrice
const [todos, setTodos] = useState(todosList);

const datesByPrice=()=>{
    if(date!='' && dateByPrice!=''){
        const x={id:uuidv4(),Date:date,DateByPrice:dateByPrice}
        console.log()
        setTodos([...todos,x])
        console.log(todos)
        toast.success("Added")
  setDate('')
  setDateByPrice('')
    }else{
        console.log("hai")
        toast.error("Enter Valid Details")
    }
}
function deleteTodo(id){
const newTodos = todos.filter((item)=> {
return item.id !== id 
})
setTodos(newTodos)
console.log(newTodos)
}



    return (
        <Box m={4} marigin={'10'}>
            <Heading>Add Room..</Heading>
            <FormControl>
                <FormLabel>Room Number</FormLabel>
                <Input value={RoomNumber} onChange={(e) => {
                    setRoomNumber(e.target.value) }} type="text" />
                <FormLabel>Upload Room Image </FormLabel>
                <Input onChange={(e) => { setimageupload(e.target.files[0])}} type="file" />
                <Flex>
                    <Stack spacing={4}>
                        <HStack>
                                  <Box>
                                  <Button
                onClick={uploadimage}
                  loadingText="Uploading.."
                  bg={'green.600'}
                  color={'white'}
                  _hover={{
                    bg: 'green.400',
                  }}>
                  {imgbt}
                </Button>
                                  </Box>
                        </HStack>
                    </Stack>
                </Flex>
                <FormLabel>Room's In which Floor?</FormLabel>
                <Input value={Floor} onChange={(e) => { setFloor(e.target.value) }} type="text" />
                <FormLabel>Room's Square Feet</FormLabel>
                <Input value={SquareFeet} onChange={(e) => { setSquareFeet(e.target.value) }} type="text" />
                <FormLabel>Number of Beds</FormLabel>
                <Input value={NumberOfBeds} onChange={(e) => { setNumberOfBeds(e.target.value) }} type="text" />
                <FormLabel>Contact Number</FormLabel>
                <Input value={contactNumber} onChange={(e) => { setcontactNumber(e.target.value) }} type="text" />
                <FormLabel>MinStay</FormLabel>
                <Input value={MinStay} onChange={(e) => { setMinStay(e.target.value) }} type="text" />
                <FormLabel>MaxStay</FormLabel>
                <Input value={MaxStay} onChange={(e) => { setMaxStay(e.target.value) }} type="text" />
                <FormLabel>Room's Description </FormLabel>
                <Input value={Description} onChange={(e) => { setDescription(e.target.value) }} type="text" />
                <FormLabel>Normal Rent ( per day )</FormLabel>
                <Input value={NormalRent} onChange={(e) => { setNormalRent(e.target.value) }} type="text" />
                <Box>
                <FormLabel>Specific Date With Price</FormLabel>
                <Button onClick={onOpen}>Set DateByPrice</Button>
   

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Date with Price</ModalHeader>
          <ModalCloseButton onClick={onClose}/>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input value={date} onChange={(e)=>{setDate(e.target.value)}} ref={initialRef} placeholder='Choose Your Date' type="date"/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Rent</FormLabel>
              <Input value={dateByPrice} onChange={(e)=>{setDateByPrice(e.target.value)}} placeholder='Rent For The date' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={
                     datesByPrice }        
            colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
             
                <VStack>
 {todos.map((todo) => (
     
     <HStack spacing="10px" w="320px">
         <Flex  w="250px"  justifyContent="space-between">
         <Text>{todo.Date}</Text>
          </Flex>
          <Flex  w="100px" justifyContent="space-between">
         <Text>{todo.DateByPrice}</Text>
          </Flex>
         <Flex w="10px" >
         
         <DeleteIcon color="red.500" mr="2" onClick={()=>deleteTodo(todo.id)}/>
          </Flex>
     </HStack>))}
     </VStack>
     </Box>
                <Button onClick={handleUpdate} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>
            </FormControl>
        </Box >

    );
}

export default EditRoom;