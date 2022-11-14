import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link as lee,useNavigate} from 'react-router-dom'

  import {loginUser} from '../../actions/auth';
  import {useDispatch} from 'react-redux'
  
  export default function Login() {
    const navigate = useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
  
    const handleLogin=async()=>{
   await dispatch(loginUser(email,password))
  
   navigate('/')

      }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
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
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={e=>{setEmail(e.target.value)}} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={e=>{setPassword(e.target.value)}} type="password" />
              </FormControl>
              <Stack spacing={10}>
               
                <Button
                onClick={handleLogin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
                <Stack pt={3}>
                <Text align={'center'}>
                  Dont Have an Acount ?<Link as={lee} to={"/SignUp"} color={'blue.400'}> SignUp</Link>
                </Text>
              </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  