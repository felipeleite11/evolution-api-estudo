import { Router } from 'express'
import { router as instanceRoutes } from './instance'
import { router as messageRoutes } from './message'
import { router as numberRoutes } from './number'
import { router as webhookRoutes } from './webhook'

export const router = Router()

router.use('/instance', instanceRoutes)
router.use('/message', messageRoutes)
router.use('/number', numberRoutes)
router.use('/webhook', webhookRoutes)
