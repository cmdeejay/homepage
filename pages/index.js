import NextLink from 'next/link'
import {
  Container,
  Box,
  Button,
  Link,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

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
          <p>Software Developer/ AI Engineer/ Quantitative Trading</p>
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
          Min Chen is a Software Engineer who is passionate about building
          optimize digital solution for the business unit. From planning and
          designing all the way to solving real-life problems with code
          particularly in finance industry. His expertise includes but is not
          limited to using deep learning techniques, convolutional neural
          networks(CNN), data ETL, REST APIs and browser automation.
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
          <BioYear>2022 to Present</BioYear>
          Developed Automated Onboarding Process(AOP) for Multibank Group.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          <Link href="">Art</Link>, <Link href="">Badminton</Link>,{' '}
          <Link href="">Machine Learning</Link>,{' '}
          <Link href="">Stock Trading</Link>
        </Paragraph>
      </Section>
    </Container>
  </Layout>
  )

}
export default Page
