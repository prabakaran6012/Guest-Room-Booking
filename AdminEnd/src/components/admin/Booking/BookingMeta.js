import {
    Box,
    Image,
    Button,
    Stack,
    Text,
    useColorModeValue as mode,
    Flex,
} from '@chakra-ui/react'
import { Link as lee, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
export const BookingMeta = (props) => {
    const dispatch=useDispatch()

const navigate=useNavigate()
    const {  BookingId,
        HouseName,
        RoomNumber,
        Floor,
        U_Name,
        U_ContactNumber,
        FromDate,
        TillDate,
        ImageUrl } = props

   
    return (
        <Stack direction="row" spacing="5" width="full">
            <Image
                rounded="lg"
                width="220px"
                height="150px"
                fit="inherit"
                src={ImageUrl}
                alt={HouseName}
                draggable="false"
                loading="lazy"
            />
            <Box pt="4">
           <Flex>
                <Stack spacing="0.5">
                    <Button
                            onClick={() => {
                             
                                navigate(`/booking/details/${BookingId}`)
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
                <Text fontWeight="bold">House Name: {HouseName}</Text>
                <Text  color={mode('gray.600', 'gray.400')} fontSize="md">Room Number: {RoomNumber} Floor: {Floor}</Text>
                <Text  color={mode('gray.600', 'gray.400')} fontSize="md">BookedBy: {U_Name}</Text>
                    <Text color={mode('gray.600', 'gray.400')} fontSize="md">Contact Number: {U_ContactNumber}
                    </Text>
                    <Text color={mode('gray.600', 'gray.400')} fontSize="md">Date: {FromDate} to {TillDate}
                    </Text>
                </Stack>
                </Flex>
               
            </Box>
        </Stack>
    )
}