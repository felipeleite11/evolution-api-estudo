import { Router } from 'express'
import { evolutionAPI } from '../config/evolution-api'

export const router = Router()

router.post('/check', async (req, res) => {
	const { numbers } = req.body

	const { data } = await evolutionAPI.post(`/chat/whatsappNumbers/${process.env.EVOLUTION_INSTANCE_NAME}`, {
		numbers
	})

	res.json(data)
})
