import {Flex} from '@chakra-ui/react'
import { BookingMeta } from './BookingMeta'

export const BookingItems = (props) => {
    const {
        _id,
      HouseName,
      RoomNumber,
      Floor,
      U_Name,
      U_ContactNumber,
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
               RoomNumber={RoomNumber}
               Floor={Floor}
               U_Name={U_Name}
               FromDate={FromDate}
               TillDate={TillDate}
               U_ContactNumber={U_ContactNumber}
               ImageUrl={ImageUrl}
            />

           
         
        </Flex>)

}
