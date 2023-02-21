import { Box, Text } from '@chakra-ui/react'
import translations from '@/public/translations'

function Footer({lang}) {
  return (
    <Box pos='sticky' bottom={0} textAlign='center' h='fit-content' pb='1rem'>
        <Text>{translations[lang].footerMessage}</Text>
    </Box>
  )
}

export default Footer