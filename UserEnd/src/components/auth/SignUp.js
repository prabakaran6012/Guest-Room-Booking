import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { Link as lee,useNavigate} from 'react-router-dom'
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { signupUser } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
  
  export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [password,setpassword]=useState('')
    const dispatch = useDispatch()
    const handleSignUp=()=>{
console.log(username,email,phone,password)
      dispatch(signupUser(username,email,phone,password))
      toast.success("SIGNUP SUCCESS")
      localStorage.setItem("UserName",`${username}`)
    }
    const navigate = useNavigate()

    const { signup } = useSelector(state => state.auth)
   
    if (signup && signup === true) {
        navigate('/Login')
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
             
                  <FormControl id="username" isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input onChange={e=>{setusername(e.target.value)}} type="text" />
                  </FormControl>
             
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input onChange={e=>{setemail(e.target.value)}} type="email" />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input onChange={e=>{setphone(e.target.value)}} type="text" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={e=>{setpassword(e.target.value)}} type={ showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      { showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleSignUp}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link as={lee} to={"/login"} color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }


  