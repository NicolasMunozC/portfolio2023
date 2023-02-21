import { Box, Card, GridItem, Heading, Image, Text} from '@chakra-ui/react'
import React from 'react'
import IconsBox from './IconsBox'
import translations from '@/public/translations'

function ProjectCard({lang, data}) {
  return (
      <Box className='sliderMandatoryMobile'>
        <Card className='card' pos='relative' variant='outline' m='1rem' boxShadow='dark-lg' cursor='pointer' onClick={()=>window.location.href=data.url} border='none' >
            <Image className='cardBg' aria-label='project' src={data.image} borderRadius='5' zIndex={0}/>
            <Text className='goTo' pos='absolute' w='fit-content' h='fit-content' left='0' right='0' bottom='0' top='0' m='auto' color='white' fontSize='2xl' fontWeight='thin' textTransform='uppercase' zIndex={2} >{translations[lang].go_to_site}</Text>
            <Box className='cardContent' pos='absolute' bottom='1rem' left='1rem' zIndex={2}>
                <Heading fontSize='lg' fontWeight='bold' color='white' >{data.name}</Heading>
                <Text fontSize='sm' fontWeight='thin' color='white' mb='0.5rem'>{data.description[lang]}</Text>
                <IconsBox icons={data.icons} />
            </Box>
            <Box pos='absolute' w='100%' h='80%' bgGradient={'linear(to-t, black, transparent)' } bottom={0} zIndex={1}/>
        </Card>
      </Box>
  )
}

export default ProjectCard