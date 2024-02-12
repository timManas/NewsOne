import express from 'express'
import {
  queryEverything,
  queryTopHeadlines,
} from '../controllers/queryControllers.js'

const router = express.Router()

router.get('/everything', queryEverything)
router.get('/top', queryTopHeadlines)

export default router
