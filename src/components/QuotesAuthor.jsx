import { useParams } from 'react-router-dom'
import { useApp } from '../hooks/useApp'
import QuoteCard from './QuoteCard'

const QuotesAuthor = () => {

  const params = useParams()
  console.log(params)
  const { quotesByAuthor } = useApp()
  const filteredQUotes = quotesByAuthor(params.author)

  return (
    <>
      <h1 className='text-4xl font-black my-4 text-center'>{params.author}</h1>
      <div className='flex flex-col gap-y-6 mt-6 max-w-xl mx-8'>
        {filteredQUotes.map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote}
          />
        ))}
      </div>
    </>
  )
}

export default QuotesAuthor
