import { newsApiQE } from '../queries/newsAPIQueries.js'
import axios from 'axios'

const queryEverything = async (req, res) => {
  console.log('api key: ' + process.env.NEWSAPI)
  let data = {}

  const headers = {
    Authorization: process.env.NEWSAPI,
  }

  console.log(headers)

  await axios
    .get(`https://newsapi.org/v2/everything?q=bitcoin`, { headers })
    .then((response) => {
      data = response.data.articles
      res.send(data)
    })
    .catch((error) => {
      console.log(error)
      res.send('Error Query')
    })
}

const queryTopHeadlines = async (req, res) => {
  let data = {}

  const headers = {
    Authorization: process.env.NEWSAPI,
  }

  console.log(headers)

  await axios
    .get(`https://newsapi.org/v2/top-headlines?country=us`, { headers })
    .then((response) => {
      data = response.data.articles
      res.send(data)
    })
    .catch((error) => {
      console.log(error)
      res.send('Error Query')
    })
}

export { queryEverything, queryTopHeadlines }
