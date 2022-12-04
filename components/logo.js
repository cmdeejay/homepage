import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 15px;

  &:hover img {
    transform: rotate(27deg);
  }
`
const Logo = () => {
  const roosterHead = `/images/roosterhead${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={roosterHead} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={2}
          >
            Min Chen
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
