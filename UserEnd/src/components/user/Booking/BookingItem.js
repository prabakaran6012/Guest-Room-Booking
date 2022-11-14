import { Flex} from '@chakra-ui/react'
import { BookingMeta } from './BookingMeta'


export const BookingItems = (props) => {
    const {
        _id,
      HouseName,
      HouseOwnerName,
      RoomNumber,
      HouseOwnerNumber,
      FromDate,
      TillDate,
      ImageUrl,
      item
    } = props


    return (
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <BookingMeta
               BookingId={_id}
               HouseName={HouseName}
               HouseOwnerName={HouseOwnerName}
               RoomNumber={RoomNumber}
               FromDate={FromDate}
               TillDate={TillDate}
               HouseOwnerNumber={HouseOwnerNumber}
               ImageUrl={ImageUrl}
            />

           
         
        </Flex>)

}
