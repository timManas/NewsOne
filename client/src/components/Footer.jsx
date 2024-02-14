import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container as='footer' role='contentinfo' py={{ base: '12', md: '16' }}>
      <Stack spacing={{ base: '4', md: '5' }}>
        <Stack justify='space-between' direction='row' align='center'>
          <h1>NewsOne</h1>
          <ButtonGroup variant='tertiary'>
            <IconButton
              as='a'
              href='#'
              aria-label='LinkedIn'
              icon={<FaLinkedin />}
            />
            <IconButton
              as='a'
              href='#'
              aria-label='GitHub'
              icon={<FaGithub />}
            />
            <IconButton
              as='a'
              href='#'
              aria-label='Twitter'
              icon={<FaTwitter />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize='sm' color='fg.subtle'>
          &copy; {new Date().getFullYear()} NewsOne, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  )
}

export default Footer
