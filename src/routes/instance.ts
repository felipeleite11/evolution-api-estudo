import { Router } from 'express'
import { evolutionAPI } from '../config/evolution-api'

export const router = Router()

router.get('/info', async (req, res) => {
	const { data: statusData } = await evolutionAPI.get(`/instance/connectionState/${process.env.EVOLUTION_INSTANCE_NAME}`)
	const { data: webhookData } = await evolutionAPI.get(`/webhook/find/${process.env.EVOLUTION_INSTANCE_NAME}`)

	const { instanceName, state } = statusData.instance

	res.json({
		instance_name: instanceName,
		state,
		webhook: webhookData.url
	})
})
