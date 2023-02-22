import { Box, Grid, Heading, SimpleGrid } from '@chakra-ui/react'
import translations from '@/public/translations'
import projects from '@/public/projects'
import ProjectCard from './ProjectCard'

function Projects({lang}) {

    const allProjects = Object.keys(projects)


  return (
    <Box minH='100dvh' w='100%' display='grid' placeContent='center' px='30px' className='sliderMandatoryStart' mb='5rem'>
        <Box>
            <Heading>{translations[lang].projects_title}</Heading>
        </Box>
        <SimpleGrid spacing='10px' minChildWidth='300px'>
            {allProjects.map( project => <ProjectCard key={project} lang={lang} data={projects[project]} />)}
        </SimpleGrid>
    </Box>
  )
}

export default Projects