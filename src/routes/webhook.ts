import { Router } from 'express'

export const router = Router()

router.post('/receive', async (req, res) => {
	console.log(req.body)
	
	res.sendStatus(200)
})

// MODELO DE RESPOSTA RECEBIDA

//{
// 	event: 'messages.upsert',
// 	instance: 'felipe-instance',
// 	data: {
// 	  key: {
// 		remoteJid: '559181293338@s.whatsapp.net',
// 		fromMe: false,
// 		id: '3AF047E4A148C8F2B3E47AA3A306C4C5'
// 	  },
// 	  pushName: 'Felipe Leite',
// 	  status: 'DELIVERY_ACK',
// 	  message: { conversation: 'Mandei', messageContextInfo: [Object] },
// 	  messageType: 'conversation',
// 	  messageTimestamp: 1742846280,
// 	  instanceId: '20819373-8986-4d95-bb4e-bd4566d2abb6',
// 	  source: 'android'
// 	},
// 	destination: 'https://outros-whatsapp-test.y0nyoi.easypanel.host/evolution/webhook/receive',
// 	date_time: '2025-03-24T16:58:01.087Z',
// 	sender: '559184790523@s.whatsapp.net',
// 	server_url: 'https://outros-evolution.y0nyoi.easypanel.host',
// 	apikey: 'f860c026-5565-4606-9c8b-95fbc8b30200'
//}