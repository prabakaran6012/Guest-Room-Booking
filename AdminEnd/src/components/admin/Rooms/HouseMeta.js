import {
    Box,
    Image,
    Button,
    Stack,
    Text,
    useColorModeValue as mode,
    Flex,
} from '@chakra-ui/react'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useDispatch } from 'react-redux';
import { Link as lee, useNavigate } from 'react-router-dom'
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


   const setHouseID=(HouseId)=>{
    dispatch({
        type:"ADD_HOUSEID",
        payload:{HouseId}
    })
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
                                navigate(`/addroom/${HouseId}`)
                                console.log(HouseId)
                                console.log(AdminId)
                                setHouseID(HouseId)
                            }}
                            width="130px"
                            loadingText="Submitting"
                            
                            bg={'green.700'}
                            color={'white'}
                            _hover={{
                                bg: 'green.300',
                            }}>
                            Add Rooms &nbsp; &nbsp;
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
