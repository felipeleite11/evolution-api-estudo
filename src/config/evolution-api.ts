import axios from "axios"

export const evolutionAPI = axios.create({
	baseURL: process.env.EVOLUTION_API_BASE_URL,
	headers: {
		apikey: process.env.EVOLUTION_API_KEY
	}
})