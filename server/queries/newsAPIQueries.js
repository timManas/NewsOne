// import NewsAPI from 'newsapi'

const newsApiQE = async () => {
  let data = {}
  let key = String(process.env.NEWSAPI)
  console.log('NEWSAPI: ' + key)

  const newsapi = new NewsAPI("'" + key + "'")

  // Solution #1 - Keep return at the very end. Dont place inside then()
  await newsapi.v2
    .everything({
      q: 'stock',
      sources: 'bbc-news,the-verge',
      domains: 'bbc.co.uk,techcrunch.com',
      language: 'en',
      sortBy: 'relevancy',
      from: '2024-02-11',
      to: '2024-02-12',
      page: 1,
    })
    .then((response) => {
      console.log(response)
      data = response
    })
    .catch((err) => {
      console.log(err)
      return 'Error Fetching Data'
    })

  return data

  // Solution #2 - Create variable to hold the result
  //   const data = await newsapi.v2.everything({
  //     q: 'stock',
  //     sources: 'bbc-news,the-verge',
  //     domains: 'bbc.co.uk,techcrunch.com',
  //     language: 'en',
  //     sortBy: 'relevancy',
  //     from: '2024-02-11',
  //     to: '2024-02-12',
  //     page: 1,
  //   })
  //   console.log(data)
  //   return data
}

const newsApiTop = () => {}

const newsApiSources = () => {}

export { newsApiQE, newsApiTop, newsApiSources }
