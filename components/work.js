import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" >
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={25} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="10" w="full" src={src} alt={alt} mb={14} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={3}>
    {children}
  </Badge>
)
