import { useState } from "react"

export const useLang = () => {
    const [lang, setLang] = useState('ES')

    function toggleLang(){
      if(lang === 'ES') setLang('EN')
      else setLang('ES')
    }

    return { lang, toggleLang}
}