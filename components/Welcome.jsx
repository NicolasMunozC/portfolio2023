import {useEffect, useRef, useState} from 'react';
import { Box, Heading } from '@chakra-ui/react'

function Welcome() {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true)
    const [opacity, setOpacity] = useState(1)
    const messages = ['Bienvenido', 'Welcome', 'accueillir', 'Benvenuto', 'Willkommen', 'いらっしゃいませ', 'Velkommen']

    useEffect(() => {
        const timeout2 = setTimeout(() => {
        setBlink((prev) => !prev);
        }, 1000);
        return () => clearTimeout(timeout2);
      }, [blink]);

      useEffect(() => {
        if (index === messages.length - 1 && subIndex === messages[index].length) {
          setTimeout(()=> {
            setOpacity(0)
            setIndex(0)
            setSubIndex(0)
          },1000)
          return;
        }
    
        if (
          subIndex === messages[index].length + 1 && 
          index !== messages.length - 1 && 
          !reverse 
        ) {
          setReverse(true);
          return;
        }
    
        if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prev) => prev + 1);
          return;
        }
    
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === messages[index].length ? 1000 :
                    150, parseInt(Math.random() * 350)));
    
        return () => clearTimeout(timeout);
      }, [subIndex, index, reverse, messages]);

      useEffect( () => {
        const maxLength = messages[index].length
        setOpacity((1/maxLength)* subIndex)
      }, [subIndex, index, messages])
    



  return (
    <Box w='100%' h='100vh' display='grid' placeContent='center' className='sliderMandatoryStart'>
        <Box display='flex' flexDir='row'>
            <Heading opacity={opacity}>{messages[index].substring(0, subIndex)}</Heading>
            <Heading fontWeight='thin' fontSize='xl' my='auto'>{blink && '|'}</Heading>
        </Box>
    </Box>
  )
}

export default Welcome