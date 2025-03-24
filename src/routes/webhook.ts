import { Router } from 'express'

export const router = Router()

router.post('/receive', async (req, res) => {
	console.log(req.body)
	
	res.sendStatus(200)
})
