import {
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex
      minWidth='max-content'
      alignItems='center'
      gap='0'
      bg='black'
      py={{ base: '5', md: '2' }}
    >
      <Box p='2'>
        <Heading size='md' color='white' ml='5'>
          NewsOne
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Button colorScheme='blue'>Sign Up</Button>
        <Button colorScheme='blue' mr='5'>
          Log in
        </Button>
      </ButtonGroup>
    </Flex>
  )
}

export default Header
