import express from 'express'
import {
  queryEverything,
  queryTopHeadlines,
  querySources,
} from '../controllers/queryControllers.js'

const router = express.Router()

router.get('/everything', queryEverything)
router.get('/topheadlines', queryTopHeadlines)
router.get('/sources', querySources)

export default router
