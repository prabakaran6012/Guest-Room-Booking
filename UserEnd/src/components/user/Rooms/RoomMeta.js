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
import 'react-confirm-alert/src/react-confirm-alert.css'
import { Link as lee, useNavigate } from 'react-router-dom'
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
                             
                                console.log(RoomId)
                                console.log(AdminId)
                                navigate(`/rooms/details/${RoomId}`)
                            }}
                            width="130px"
                            loadingText="Submitting"
                            
                            bg={'green.700'}
                            color={'white'}
                            _hover={{
                                bg: 'green.300',
                            }}>
                            View Details &nbsp; &nbsp;
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
