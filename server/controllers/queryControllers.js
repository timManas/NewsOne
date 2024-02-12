import { newsApiQE } from '../queries/newsAPIQueries.js'
import axios from 'axios'

const headers = {
  Authorization: 'a5a60aacd8b747feb07a5de92975b0e2',
}

const queryEverything = async (req, res) => {
  //   const data = await newsApiQE()
  //   console.log('Send data: ' + JSON.stringify(data))
  //   res.send(data)

  console.log('api key: ' + process.env.NEWSAPI)
  let data = {}

  await axios
    .get(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=${process.env.NEWSAPI}`
    )
    .then((response) => {
      data = response.data.articles
      res.send(data)
    })
    .catch((error) => {
      console.log(error)
      res.send('Error Query')
    })
}

const queryTopHeadlines = (req, res) => {
  res.send('Top Headlines')
  res.send(newsApiTop())
}

const querySources = (req, res) => {
  res.send('Sources')
  res.send(newsApiSources())
}

export { queryEverything, queryTopHeadlines, querySources }
