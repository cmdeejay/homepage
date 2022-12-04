import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Ninja">
      <Container>
        <Title>
          Ninja <Badge>2022</Badge>
        </Title>
        <P>
          An automated onboarding processing tool, cross-platform and support one click client KYC monitoring and processing for Multibank Group.
        </P>
        <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://github.com/cmdeejay/Ninja-AOP/'>
            https://github.com/cmdeejay/Ninja-AOP/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Selenium, Keras, BeautifulSoup, Tesseract, Heroku</span>
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
    </Layout>
  )
}

export default Work
