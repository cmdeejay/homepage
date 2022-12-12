import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbIDclass from '../public/images/works/cnidclass_01.png'
import thumbAOP from '../public/images/works/ninja_01.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid gap={5}>
        <Section>
          <WorkGridItem 
            id="ninja" 
            title="Ninja" 
            thumbnail={thumbAOP}
          >
             An automated onboarding tool for Multibank Group.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem 
            id="cnidclass" 
            title="Chinese Id Classifier" 
            thumbnail={thumbIDclass}
          >
            A convolutional neural network model to identify the Chinese National ID.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
