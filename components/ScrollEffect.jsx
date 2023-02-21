import { Box, Divider, Text, Icon } from '@chakra-ui/react'
import { BsMouse } from 'react-icons/bs'
import { useEffect, useState} from 'react';

function ScrollEffect() {

  return (
    <Box position='sticky' w='fit-content' bottom='1rem' h='fit-content' right={0} left={0} ml={'auto'} mr={[0, '3rem']} display='flex' className='verticallScroll'>
        <Box display='flex' flexDir='row' w='fit-content'>
            <Text fontWeight='bold' textTransform='uppercase' fontSize='sm' letterSpacing='0.2rem'>Scroll</Text>
            <Icon ml='0.3rem' as={BsMouse} fontSize='xl' />
        </Box>
    </Box>
  )
}

export default ScrollEffect