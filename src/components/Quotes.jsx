import { useApp } from '../hooks/useApp'
import QuoteCard from './QuoteCard'

const Quotes = () => {

  const { initialQuotes } = useApp()

  return (
    /* card */
    <>
      <h1 className='text-4xl font-black my-4'>Quotes App</h1>
      <div className='flex flex-col gap-y-6 mt-6 max-w-2xl mx-8'>
        {initialQuotes.map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote}
            withAuthor
          />
        ))}
      </div>
    </>
  )
}

export default Quotes
