import { Router } from 'express'
import { evolutionAPI } from '../config/evolution-api'

export const router = Router()

router.post('/send_text', async (req, res) => {
	const { recipient, message } = req.body

	const { data } = await evolutionAPI.post(`/message/sendText/${process.env.EVOLUTION_INSTANCE_NAME}`, {
		number: recipient,
		text: message
	})

	res.json(data)
})

router.post('/send_typing', async (req, res) => {
	const { recipient, delay } = req.body

	const { data } = await evolutionAPI.post(`/chat/sendPresence/${process.env.EVOLUTION_INSTANCE_NAME}`, {
		presence: 'composing',
		number: recipient,
		delay
	})

	res.json(data)
})

router.post('/send_recording', async (req, res) => {
	const { recipient, delay } = req.body

	const { data } = await evolutionAPI.post(`/chat/sendPresence/${process.env.EVOLUTION_INSTANCE_NAME}`, {
		presence: 'recording',
		number: recipient,
		delay
	})

	res.json(data)
})

router.post('/send_media', async (req, res) => {
	const { recipient, media_url, type } = req.body

	const { data } = await evolutionAPI.post(`/message/sendMedia/${process.env.EVOLUTION_INSTANCE_NAME}`, {
		number: recipient,
		mediatype: type,
		media: media_url,
		delay: 2000
	})

	res.json(data)
})

router.post('/send_audio', async (req, res) => {
	const { recipient, media_url } = req.body

	const { data } = await evolutionAPI.post(`/message/sendWhatsAppAudio/${process.env.EVOLUTION_INSTANCE_NAME}`, {
		number: recipient,
		audio: media_url,
		delay: 2000
	})

	res.json(data)
})

router.post('/send_sticker', async (req, res) => {
	const { recipient, media_url } = req.body

	const { data } = await evolutionAPI.post(`/message/sendSticker/${process.env.EVOLUTION_INSTANCE_NAME}`, {
		number: recipient,
		sticker: media_url
	})

	res.json(data)
})

router.post('/send_list', async (req, res) => {
	const { recipient, delay, title } = req.body

	const { data } = await evolutionAPI.post(`/message/sendList/${process.env.EVOLUTION_INSTANCE_NAME}`, {
		number: recipient,
		title,
		buttonText: 'Ver opções',
		description: 'Selecione uma opção',
		footerText: '',
		delay,
		sections: [
			{
				title: 'Lista 1',
				rows: [
					{
						title: 'Opção 1',
						rowId: '1',
						description: 'Opção 1 descrição'
					},
					{
						title: 'Opção 2',
						rowId: '2',
						description: 'Opção 2 descrição'
					}
				]
			}
		]
	})

	res.json(data)
})

// Enquete
router.post('/send_poll', async (req, res) => {
	const { recipient, name, delay, selectableCount } = req.body

	const { data } = await evolutionAPI.post(`/message/sendPoll/${process.env.EVOLUTION_INSTANCE_NAME}`, {
		number: recipient,
		name,
		values: ['Opção 1', 'Opção 2'],
		delay,
		selectableCount
	})

	res.json(data)
})
