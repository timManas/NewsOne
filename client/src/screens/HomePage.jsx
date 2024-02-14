import { useState, useEffect } from 'react'
import { SimpleGrid, Grid } from '@chakra-ui/react'
import NewsCard from '../components/NewsCard'

import axios from 'axios'

const HomePage = () => {
  const [articles, setArticles] = useState({})

  useEffect(() => {
    getArticles()
  }, [setArticles])

  const getArticles = async () => {
    await axios
      .get('http://localhost:5000/query/everything')
      .then((result) => {
        console.log(JSON.stringify(result.data))
        setArticles(result.data)
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
      })
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={4}>
        {articles.length > 0 ? (
          articles.map((article) => (
            <NewsCard {...article} key={Math.random()} />
          ))
        ) : (
          <h1>Loading ... </h1>
        )}
      </SimpleGrid>
    </>
  )
}

export default HomePage
