import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Section />
      <Text>The page you&apos;re looking for was not found.</Text>
    <Divider my={3} />
    <Box my={10} align="center">
      <NextLink href="/">
      <Button colorScheme="teal">Return to home</Button>
    </NextLink>
    </Box>
    </Container>
  )
}

export default NotFound
