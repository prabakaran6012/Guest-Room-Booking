import {
    FormControl,
    Input,
    FormLabel,
    Box,
    Heading,
    Flex,
    Stack,
    Button,
    HStack
} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { storage } from "../../../firebase";
import {getDownloadURL, ref,uploadBytes}from"firebase/storage";
import {v4}from "uuid"
import { toast } from 'react-hot-toast'
import { UpdateHouse } from '../../../actions/house'
import { useParams } from 'react-router';

const EditHouse = () => {
    var item=[]
    const {HouseId}=useParams()
  
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
      
       const {houses}=useSelector(state=>state.houses)
       houses.forEach(element => {
        if(element._id==HouseId){
          item[0]= element
        }
       });
const [House,setHouse]=useState(item[0])
const [HouseName, setHouseName] = useState(House.name)
const [imageUrl, setimageUrl] = useState(House.photos)
const [Description, setDescription] = useState(House.desc)
const [City, setCity] = useState(House.city)
const [Address, setAddress] = useState(House.address)
const [HouseOwnerName,setHouseOwnerName]=useState(House.houseOwnerName)
const [contactNumber,setcontactNumber]=useState(House.contactNumber)

const [imgbt, setimgbt] = useState('Upload Image')
const [imageupload,setimageupload]=useState(null)
const tk=localStorage.getItem('token')
const id=House._id

const handleUpdate=()=>{
    // console.log()
     dispatch(UpdateHouse(id,HouseName,imageUrl,HouseOwnerName,contactNumber,Description,City,Address,tk))
}

    return (
        <Box m={4} marigin={'10'}>
            <Heading>Update {HouseName}..</Heading>
            <FormControl>
                <FormLabel>House Name</FormLabel>
                <Input value={HouseName} onChange={(e) => {
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
                <Input value={HouseOwnerName} onChange={(e) => { setHouseOwnerName(e.target.value) }} type="text" />
                <FormLabel>Contact Number</FormLabel>
                <Input value={contactNumber} onChange={(e) => { setcontactNumber(e.target.value) }} type="text" />
                <FormLabel>City</FormLabel>
                <Input value={City} onChange={(e) => { setCity(e.target.value) }} type="text" />
                <FormLabel>Address</FormLabel>
                <Input value={Address}onChange={(e) => { setAddress(e.target.value) }} type="text" />
                <FormLabel>House Description </FormLabel>
                <Input value={Description}onChange={(e) => { setDescription(e.target.value) }} type="text" />
                <Button onClick={handleUpdate} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>
            </FormControl>
        </Box >
    );
}

export default EditHouse;