import translations from '@/public/translations'
import { sendMessage } from '@/services'
import { Box, Button, Heading, Image, Input, InputGroup, Text, Textarea, useToast } from '@chakra-ui/react'
import { useRef, useState } from 'react'

function Contact({lang}) {
    const [formHidden, setFormHidden] = useState(false)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const toast = useToast()
    const form = useRef()

    async function submit(e){
        e.preventDefault()
        setLoading(true)
        const response = await sendMessage(form)
        if(response.status===200) {
            toast({
                title: translations[lang].email_success,
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'bottom'
            })
            setLoading(false)
            setFormHidden(true)

        }
        else{
            toast({
                title: `Ops! ${translations[lang].email_error}`,
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'bottom'
            })
            setLoading(false)
        }
    }

  return (
    <form ref={form} onSubmit={submit}>
        <Box minH='100vh' w='100%' display='flex' flexDir='column' placeContent='center' className='sliderMandatoryStart' mb='5rem'>
            <Box w='100%' maxW={['300px', '700px']} mx='auto' display='flex' flexDir='column' hidden={formHidden}>
                <Heading mb='3rem'>{translations[lang].contact_title}</Heading>
                <Input mb='2rem' w='100%' placeholder={translations[lang].placeholder_name} variant='flushed' type='text' required value={name} name='user_name' onChange={(e)=>{setName(e.target.value)}} />
                <Input mb='2rem' placeholder={translations[lang].placeholder_lastname} variant='flushed' type='text' required value={lastname} name='user_lastname' onChange={(e)=>{setLastname(e.target.value)}} />
                <Input mb='2rem' placeholder={translations[lang].placeholder_email} variant='flushed' type='email' required value={email} name='user_email' onChange={(e)=>{setEmail(e.target.value)}} />
                <Textarea mb='2rem' placeholder={translations[lang].placeholder_message} variant='flushed' type='text' required value={message} name='message' onChange={(e)=>{setMessage(e.target.value)}} />
                <Button mx='auto' w='100%' maxW='300px' isLoading={loading} onClick={submit} >{translations[lang].button_send}</Button>
            </Box>
            <Box w='100%' maxW={['300px', '700px']} mx='auto' display='flex' flexDir='column' hidden={!formHidden} textAlign='center'>
                <Image mx='auto' mb='1rem' w='100px' alt='coffee' src='/images/latte.png'/>
                <Heading mb='1rem' fontSize='5xl' fontWeight='bold'>{translations[lang].form_thanks_title}</Heading>
                <Text fontSize='2xl' fontWeight='light'>{translations[lang].form_thanks_message}</Text>
                <Text fontWeight='thin'>Yeeep Yeeep</Text>
            </Box>
        </Box>
    </form>
  )
}

export default Contact