import NextLink from 'next/link'
import {
  Container,
  Box,
  Button,
  Link,
  List,
  ListItem,
  Icon,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub
} from 'react-icons/io5'




const Page = () => {
  return (
    <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={5}
        align="center"
      >
        Hello, I&apos;m a developer based in Dubai!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Min Chen
          </Heading>
          <p>Work Automation/ AI Engineer/ Data Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            boaderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/chen.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Min Chen is a Data Engineer who is passionate about building
          optimized digital solution for the business unit. From planning and
          designing all the way to solving real-life problems with code
          particularly in finance industry. His expertise includes but is not
          limited to Browser Automation, Convolutional Neural
          Networks(CNN), Transfer Learning, Data ETL, REST APIs and Relational Database.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1993</BioYear>
          Born in Sichuan, China ( 四川, 中国 )
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked at Louis Vuitton, Dubai.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Graduacted from MSc. Investment Management from Heriot-Watt University
          Dubai with Merit.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed the IBM AI Engineering Professional Certificate.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Developed Automated Onboarding Process(AOP) for Multibank Group.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Badminton, {' '}
          <Link href="">Machine Learning</Link>,{' '}
          Stock Trading
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/cmdeejay" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@cmdeejay</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/min--chen/" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>Min Chen</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/cmdeejay" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>@cmdeejay</Button>
            </Link>
          </ListItem>
        </List>
      </Section>
        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" >
              Popular posts
            </Button>
          </NextLink>
        </Box>
      <Section />
    </Container>
  </Layout>
  )

}
export default Page
export { getServerSideProps} from '../components/chakra'
