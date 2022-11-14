import {
    Box,
    HStack,
    Icon,
    Image,
    Button,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
    Flex,
} from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link as lee, useNavigate } from 'react-router-dom'
import { deleteHouse } from '../../../actions/house';

export const HouseMeta = (props) => {
const navigate=useNavigate()
    const { name,
    description,
    image,
    HouseId,
    city,
    address,
    AdminId } = props
    
    const dispatch = useDispatch()

    const getRooms=async(HouseId,tk)=>{
        console.log(tk,HouseId)
         const res = await axios.post(`http://localhost:8080/api/room/all`,{
             id:HouseId,
             token:tk
         })
         const { rooms } = res.data
         console.log(rooms)
         if(rooms.length >0){
            rooms.forEach(element => {
                deleteRoom(element._id,tk)
            });
           }
        
     }
     


     const deleteRoom= async(RoomId,tk) => {
        console.log(RoomId,tk)
    try {
        const res = await axios.put("http://localhost:8080/api/room/delete",{
            id:RoomId,
            token:tk
        })
        const message=res.data
        if(message){
            console.log("Room Deleted")
        }else{
            toast.error(message)   
        }
    } catch (error) {
        console.log(error)
    }
    }
    

const DeleteHouse=(HouseId)=>{
    const tk=localStorage.getItem('token')
    const Aid=localStorage.getItem('AdminId')
    const Refresh=()=>{
       navigate('/')
    }
   const HouseID=`${HouseId}`
 dispatch(deleteHouse(HouseID,tk))
   

 getRooms(HouseID,tk)
  
    Refresh()
}

const setHouseID=(HouseId)=>{
    if(localStorage.getItem('HouseID')){
        localStorage.removeItem("HouseID")
    }else{
        localStorage.setItem("HouseID",HouseId)
    }
   }

    
    
    return (
        <Stack direction="row" spacing="5" width="full">
            <Image
                rounded="lg"
                width="220px"
                height="150px"
                fit="inherit"
                src={image}
                alt={name}
                draggable="false"
                loading="lazy"
            />
            <Box pt="4">
           <Flex>
                <Stack spacing="0.5">
                    <Button
                            onClick={() => {
                                setHouseID(HouseId)
                                console.log(HouseId)
                                console.log(AdminId)
                                navigate(`/rooms/${HouseId}`)
                            }}
                            width="130px"
                            loadingText="Submitting"
                            
                            bg={'green.700'}
                            color={'white'}
                            _hover={{
                                bg: 'green.300',
                            }}>
                            ViewRooms &nbsp; &nbsp;
                        </Button>
                        <Button
                            onClick={() => {
                                confirmAlert({
                                    title: `Edit ${name}`,
                                    message: 'Are you sure to edit this.',
                                    buttons: [
                                      {
                                        label: 'Yes',
                                        onClick: () => navigate(`/editHouse/${HouseId}`)
                                      },
                                      {
                                        label: 'No',
                                        onClick: ()=>{}
                                      }
                                    ]
                                  });
                                
                            }}
                            width="130px"
                            loadingText="Submitting"
                            
                            bg={'yellow.700'}
                            color={'white'}
                            _hover={{
                                bg: 'yellow.300',
                            }}>
                             EditHouse &nbsp; &nbsp;
                        </Button>
                        <Button
                            onClick={() => {
                                confirmAlert({
                                    title: `Delete ${name}`,
                                    message: 'Are you sure to delete this.',
                                    buttons: [
                                      {
                                        label: 'Yes',
                                        onClick: () =>  DeleteHouse(HouseId)
                                      },
                                      {
                                        label: 'No',
                                        onClick: ()=>{}
                                      }
                                    ]
                                  });
                              
                            }}
                            width="130px"
                            loadingText="Submitting"
                            
                            bg={'red.700'}
                            color={'white'}
                            _hover={{
                                bg: 'red.300',
                            }}>
                             DeleteHouse &nbsp; &nbsp;
                        </Button>
                   
                </Stack>
                <Stack spacing="1.5" direction="column" marginLeft="30">
                <Text fontWeight="bold">{name}</Text>
                <Text  color={mode('gray.600', 'gray.400')} fontSize="md">{city}</Text>
                <Text  color={mode('gray.600', 'gray.400')} fontSize="md">{address}</Text>
                    <Text color={mode('gray.600', 'gray.400')} fontSize="md">
                        {description}
                    </Text>
                </Stack>
                </Flex>
               
            </Box>
        </Stack>
    )
}
