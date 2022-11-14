import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={('gray.900')}
            color={('gray.50')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                        <Image hr borderRadius="full" boxSize="50px" objectFit='cover' src='https://firebasestorage.googleapis.com/v0/b/guestroombooking.appspot.com/o/house%2F988a29bc-6ff1-4b5b-aeb5-6c71db505b10WhatsApp%20Image%202022-11-14%20at%207.00.10%20AM%20(1).jpeg?alt=media&token=3160621c-923a-416c-be6c-ab2e9d91c858' />
                        </Box>
                        <Text fontSize={'sm'}>
                            © 2022 Developed By cartrabbit.io
                        </Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={'https://cartrabbit.io/'}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'https://cartrabbit.io/'}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'https://www.instagram.com/prabhu__10502/'}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'https://cartrabbit.io/'}>About us</Link>
                        <Link href={'https://cartrabbit.io/'}>Contact us</Link>
                        <Link href={'https://cartrabbit.io/'}>Testimonials</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={'https://cartrabbit.io/'}>Help Center</Link>
                        <Link href={'https://cartrabbit.io/'}>Terms of Service</Link>
                        <Link href={'https://cartrabbit.io/'}>Privacy Policy</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg={'whiteAlpha.100'}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.600',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}