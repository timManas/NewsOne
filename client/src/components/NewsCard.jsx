import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
} from '@chakra-ui/react'

const NewsCard = (article) => {
  console.log(article)

  const onClickHandler = (url) => {
    window.open(url, '_blank', 'noreferrer')
  }

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={article.urlToImage}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{article.title}</Heading>
          <Text>{article.description}</Text>
          <Text color='blue.600' fontSize='2xl'>
            Article from: {article.source.name}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          variant='solid'
          colorScheme='blue'
          onClick={() => onClickHandler(article.url)}
        >
          Go to article
        </Button>
      </CardFooter>
    </Card>
  )
}

export default NewsCard
