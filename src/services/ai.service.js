import axios from 'axios'

class AiService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/ai`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllAi() {
        return this.api.get('/getAllAi')
    }

    editAi(ai_id, body) {
        return this.api.put(`/edit/${ai_id}`, body)
    }

    deleteAi(ai_id) {
        return this.api.delete(`/delete/${ai_id}`)
    }

    saveAi(aiData) {
        return this.api.post('/saveAi', aiData)
    }

    getOneAi(ai_id) {
        return this.api.get(`/getOneAi/${ai_id}`)
    }

    filteredAi(name) {
        return this.api.get(`/filteredAi?name=${name}`)
    }

    getFindCategory(category) {
        return this.api.get(`/getFindCategory/${category}`)
    }

    getAlphabeticOrder(dir) {
        return this.api.get(`/getAiSorted?name=${dir}`)
    }

    getCategoryOrder(dir) {
        return this.api.get(`/getAiSorted?category=${dir}`)
    }

}

const aiService = new AiService()

export default aiService