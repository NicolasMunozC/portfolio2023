import { Avatar, Box, Heading, Text } from '@chakra-ui/react'
import translations from '@/public/translations'

function AboutMe({lang}) {

  return (
    <Box w='100%' h='100dvh' display='grid' placeContent='center' className='aboutMe sliderMandatoryStart'>
        <Box mx='30px' pb='5rem'>
            <Box display='flex' flexDir='row' mb='1rem' className='sliderMandatoryMobile' px={['0px', '0px', '10px', '100px']}>
                <Heading fontSize={['5xl', '5xl', '5xl', '7xl']} fontWeight='thin' className='fadeInUp'>Nicolas</Heading>
                <Heading fontSize={['5xl', '5xl', '5xl', '7xl']} className='fadeInUp' >Muñoz</Heading>
            </Box>
            <Box display='flex' flexDir={['column-reverse', 'row']} h='fit-content' className='sliderMandatoryMobile' >
              <Box maxW={['100%','70%']} my='auto' h='fit-content' px={['0px', '0px', '10px', '100px']}>
                <Text textAlign={['center', 'left']}>{translations[lang].about_me}</Text>
              </Box>
              <Box display='flex' textAlign='center' mb={['1rem', 0]} ml={[0, '1rem']} h='fit-content' className='sliderMandatoryMobile'>
                <Avatar m='auto' size={['lg', 'full']} name='Nicolas Munoz' src='/images/me-circle.png' />
              </Box>
            </Box>

        </Box>
    </Box>
  )
}

export default AboutMe