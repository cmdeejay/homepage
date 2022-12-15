import { Heading, Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Work = () => {
  return (
    <Layout title="Ninja">
      <Container>
        <Title>
          Ninja <Badge>2022</Badge>
        </Title>
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <P>
          An automated onboarding processing tool, cross-platform and support one-click client KYC monitoring and processing for Multibank Group.
        </P>
        <Section />
        <Heading as="h3" variant="section-title">
          Background
        </Heading>
        <P>
          As an Account Application team leader in Multibank Group, the main task is leading the team to process client KYC documents. The initial purpose of the tool is to generate the translation of a Chinese ID card for creating the confirmation of translation. Since the most time-consuming part of processing accounts is ID translation, I find that certain technology can be linked together to solve the problem, namely, Tesseract (image to text) and googletrans (translation).
        </P>
        <P>
          It was about two weeks the automated translator or so called COT generator has been created, the machine will take three parts of the ID card as input, and output a formatted COT word document.(See details from below Blogpost.) The translation process has been replaced by machine and it is really start getting interesting.
        </P>
        <P>
          Auto-translation is never the end of the development, new account monitor, browser automation, file-upload with API, ID classifier and MS Teams webhook...
        </P>
        <Section />
        <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://github.com/cmdeejay/Ninja-AOP/'>
            https://github.com/cmdeejay/Ninja-AOP/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows.</span>
        </ListItem>
        <ListItem>
           <Meta>Stack</Meta>
           <span>Python, Selenium, Keras, Tesseract.</span>
        </ListItem>
        <ListItem>
            <Meta>Blogpost</Meta>
            <Link href='https://www.linkedin.com/pulse/construction-chinese-national-id-translator-tesseract-min-chen/'>
              Construction of Chinese National ID Translator (Tesseract/ OCR) <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src='/images/works/ninja_01.png' alt='Ninja' />
      </Container>
      <Section />
    </Layout>
  )
}

export default Work
