import { Box, Icon } from '@chakra-ui/react'
import React from 'react'
import * as ImportedIcons from 'react-icons/si'

function IconBox({icons}) {

  return (
    <Box>
      {icons.map( icon => <Icon key={icon} color='white' as={ImportedIcons[icon]} mr='0.4rem' />)}
    </Box>
  )
}

export default IconBox