import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.json({ its_working: true })
})

app.use('/evolution', router)

app.listen(8030, () => {
	console.log('Running on http://localhost:8030')
})