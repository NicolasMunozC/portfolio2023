import { Box, useColorMode, Input, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { FiGithub, FiInstagram } from 'react-icons/fi'

function FloatMenu({lang, toggleLang}) {
    const { toggleColorMode, colorMode } = useColorMode()
    const usaIcon = '/united-states.png'
    const spainIcon = '/spain.png'

  return (
    <Box pos='fixed' right='0' top='0' display='flex' flexDir='row-reverse' zIndex={9999} w='100%' bgGradient={`linear(to-b, ${colorMode === 'light' ? 'white' : '#1a202c'}, transparent)`} pt='0.5rem' pr='2.5rem'>
        <label className="switch">
            <Input onChange={toggleColorMode} type='checkbox' />
            <span className="slider" />
        </label>
        <Box mr='0.5rem'>
            <Box className="languageBox" variant='unstyled' pos='relative' zIndex={1}>
                <IconButton className="principalButton" display='flex' variant='solid' fontSize='3xl' size='md' icon={<BiWorld />} isRound zIndex={999} />
                <IconButton className="flag" 
                 pos='absolute' 
                 display='flex' 
                 variant='unstyled' 
                 inset='0' 
                 zIndex={-999} 
                 icon={<Image aria-label='language' src={lang === 'EN' ? spainIcon : usaIcon} w='22px' />} 
                 opacity={0}
                 onClick={toggleLang}
                />
            </Box>
        </Box>
        <IconButton mr='0.5rem' icon={<FiGithub/>} isRound fontSize='2xl' onClick={()=> window.location.href='https://github.com/nicolasmunozc'} />
        {/* <IconButton mr='0.5rem' icon={<FiInstagram/>} isRound fontSize='2xl' onClick={()=> window.location.href='https://instagram.com/nicholasniculas'} /> */}
        
    </Box>
  )
}

export default FloatMenu