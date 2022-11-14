import { Flex } from '@chakra-ui/react'
import { RoomMeta } from './RoomMeta'

export const RoomItems = (props) => {
    const {
        _id,
      AdminId, 
      RoomNumber,
      Description,
      Floor,
      NormalRent,
      photos,
      item
    } = props

    return (
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <RoomMeta
               RoomId={_id}
               AdminId={AdminId} 
               RoomNumber={RoomNumber}
               Description={Description}
               Floor={Floor}
               NormalRent={NormalRent}
               ImageUrl={photos}
            />

           
         
        </Flex>)

}
