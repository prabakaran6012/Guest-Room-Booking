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
import { Link as lee, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
export const HouseMeta = (props) => {
    const dispatch=useDispatch()

const navigate=useNavigate()
    const { name,
    description,
    image,
    HouseId,
    city,
    address,
    AdminId } = props

    const setHouseId=(HouseId)=>{
       
            localStorage.setItem("HouseId",HouseId)
        
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
                                setHouseId(HouseId)
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
