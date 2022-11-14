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
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useDispatch } from 'react-redux';
import { Link as lee, useNavigate } from 'react-router-dom'
import { deleteRoom } from '../../../actions/room';
export const RoomMeta = (props) => {
const navigate=useNavigate()
    const { 
        AdminId, 
        RoomNumber,
        Description,
        Floor,
        NormalRent,
        ImageUrl,
        RoomId
    } = props
    
   
    const dispatch = useDispatch()


const DeleteRoom=(RoomId)=>{
    const tk=localStorage.getItem('token')
   
   const RoomID=`${RoomId}`
 dispatch(deleteRoom(RoomID,tk))
   
}


    
    
    return (
        <Stack direction="row" spacing="5" width="full">
            <Image
                rounded="lg"
                width="220px"
                height="150px"
                fit="inherit"
                src={ImageUrl}
                alt="Future"
                draggable="false"
                loading="lazy"
            />
            <Box pt="4">
           <Flex>
                <Stack spacing="0.5">
                        <Button
                            onClick={() => {
                                confirmAlert({
                                    title: `Edit Room ${RoomNumber}`,
                                    message: 'Are you sure to edit this.',
                                    buttons: [
                                      {
                                        label: 'Yes',
                                        onClick: () => navigate(`/editRoom/${RoomId}`)
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
                             EditRoom &nbsp; &nbsp;
                        </Button>
                        <Button
                            onClick={() => {
                                confirmAlert({
                                    title: `Delete Room ${RoomNumber}`,
                                    message: 'Are you sure to delete this.',
                                    buttons: [
                                      {
                                        label: 'Yes',
                                        onClick: () =>  DeleteRoom(RoomId)
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
                             DeleteRoom &nbsp; &nbsp;
                        </Button>
                   
                </Stack>
                <Stack spacing="1.5" direction="column" marginLeft="30">
                <Text fontWeight="bold">Room: {RoomNumber}</Text>
                <Text  color={mode('gray.600', 'gray.400')} fontSize="md">Floor: {Floor}</Text>
                <Text  color={mode('gray.600', 'gray.400')} fontSize="md">
                    NormalRent: {NormalRent}</Text>
                    <Text color={mode('gray.600', 'gray.400')} fontSize="md">
                        {Description}
                    </Text>
                </Stack>
                </Flex>
               
            </Box>
        </Stack>
    )
}
