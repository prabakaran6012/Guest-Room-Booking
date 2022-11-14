import {Flex} from '@chakra-ui/react'
import { HouseMeta } from './HouseMeta'

export const HouseItems = (props) => {
    const {
        _id,
      adminId, 
      name, 
      city,
      address,
      photos,
      desc,
      item
    } = props

    return (
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <HouseMeta
                name={name}
                description={desc}
                image={photos}
                HouseId={_id}
                city={city}
                address={address}
                AdminId={adminId}
            />

         
        </Flex>)

}
