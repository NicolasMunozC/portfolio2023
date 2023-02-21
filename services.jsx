import emailjs from '@emailjs/browser'

export const sendMessage = (form) => {
    const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
    const template_id = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
    const user_id = process.env.NEXT_PUBLIC_EMAIL_USER_ID

    return emailjs.sendForm(service_id,template_id,form.current, user_id)

}