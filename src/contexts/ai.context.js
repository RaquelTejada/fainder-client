import { createContext, useState } from "react"
import aiService from '../services/ai.service'


const AiContext = createContext()

function AiProviderWrapper(props) {

    const [ai, setAi] = useState([])

    const resetAi = () => {
        setAi([])
    }

    const loadAi = () => {
        aiService
            .getAllAi()
            .then((response) => {
                setAi(response.data)
            })
            .catch(err => console.log(err))
    }

    const getAllAi = () => {
        aiService
            .getAllAi()
            .then((response) => {
                setAi(response.data)
            })
            .catch(err => console.log(err))
    }


    return (
        < AiContext.Provider value={{ ai, setAi, resetAi, loadAi, getAllAi }}>
            {props.children}
        </AiContext.Provider >

    )
}

export { AiContext, AiProviderWrapper }