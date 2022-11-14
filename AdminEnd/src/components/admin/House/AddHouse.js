import {
    FormControl,
    Input,
    FormLabel,
    Box,
    Heading,
    Flex,
    Stack,
    Text,
    Button,
    HStack
} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { storage } from "../../../firebase";
import {getDownloadURL, ref,uploadBytes}from"firebase/storage";
import {v4}from "uuid"
import { toast } from 'react-hot-toast'
import { addHouse } from '../../../actions/house'


const AddHouse = () => {
  
    const {details}=useSelector(state=>state.admindetails)
    const id=`${details._id}`
    const {token}=useSelector(state=>state.auth)
    const tk=`${token}`
    const [HouseName, setHouseName] = useState('')
    const [imageUrl, setimageUrl] = useState(null)
    const [Description, setDescription] = useState('')
    const [City, setCity] = useState('')
    const [Address, setAddress] = useState('')
    const [imgbt, setimgbt] = useState('Upload Image')
    const [contactNumber,setcontactNumber]=useState('')
    const [HouseOwnerName,setHouseOwnerName]=useState('')
    const [imageupload,setimageupload]=useState(null)
    // const [imagename,setimagename]=useState('')
    const dispatch = useDispatch()

    const uploadimage=async()=>{
        if(imageupload==null) return;
      const imageref=ref(storage,`house/${v4()+imageupload.name}`)
      await uploadBytes(imageref,imageupload).then((snapshot)=>{
        toast.success('Upload Success')
        setimgbt('Uploaded!')
    })
      const url = await getDownloadURL(imageref).catch((error) => { throw error });
       setimageUrl(url)
       setimageupload(null)
       
      }
      

    const handleAddHouse = () => {
       dispatch(addHouse(id,HouseName,HouseOwnerName,contactNumber,imageUrl,Description,City,Address,tk))
    }


    return (
        <Box m={4} marigin={'10'}>
            <Heading>Add House..</Heading>
            <FormControl>
                <FormLabel>House Name</FormLabel>
                <Input onChange={(e) => {
                    setHouseName(e.target.value) }} type="text" />
                <FormLabel>Upload House Image </FormLabel>
                <Input onChange={(e) => { setimageupload(e.target.files[0])}} type="file" />
                <Flex>
                    <Stack spacing={4}>
                        <HStack>
                                  <Box>
                                  <Button
                onClick={uploadimage}
                  loadingText="Uploading.."
                  bg={'green.600'}
                  color={'white'}
                  _hover={{
                    bg: 'green.400',
                  }}>
                  {imgbt}
                </Button>
                                  </Box>
                        </HStack>
                    </Stack>
                </Flex>


                <FormLabel>House Owner Name</FormLabel>
                <Input  onChange={(e) => { setHouseOwnerName(e.target.value) }} type="text" />
                <FormLabel>Contact Number</FormLabel>
                <Input onChange={(e) => { setcontactNumber(e.target.value) }} type="text" />
                <FormLabel>City</FormLabel>
                <Input onChange={(e) => { setCity(e.target.value) }} type="text" />
                <FormLabel>Address</FormLabel>
                <Input onChange={(e) => { setAddress(e.target.value) }} type="text" />
                <FormLabel>House Description </FormLabel>
                <Input onChange={(e) => { setDescription(e.target.value) }} type="text" />
                <Button onClick={handleAddHouse} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>
            </FormControl>
        </Box >
    );
}

export default AddHouse;