import translations from '@/public/translations'
import { Box, Heading } from '@chakra-ui/react'

function Skills({lang}) {
  return (
    <Box w='100%' h='100dvh' display='grid' placeContent='center' className='aboutMe sliderMandatoryStart' hidden={true}>
    <Box mx='30px' pb='5rem'>
        <Box display='flex' flexDir='row' mb='1rem' className='sliderMandatoryMobile'>
            <Heading fontSize={['5xl', '5xl', '5xl', '7xl']} fontWeight='thin'>{translations[lang].skills_title}</Heading>
        </Box>
        <Box>
            
        </Box>
        </Box>
    </Box>
  )
}

export default Skills