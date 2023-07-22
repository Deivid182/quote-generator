/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const QuoteCard = ({ quote, withAuthor }) => {
  return (
    <div className='border-l-2 border-amber-500 p-4 space-y-8'>
      <p className='text-xl text-neutral-900 font-medium'>
        {quote.quote}
      </p>
      {
        withAuthor && (
          <>
            <div className='flex flex-col justify-end gap-y-2 group'>
              <div className='group-hover:text-white group-hover:bg-black p-4 transition'>
                <h1 className='text-xl font-black group-hover:text-white'>{quote.author}</h1>
                <p className='text-medium font-semilbold'>Business</p>
                <div className='mt-4 flex justify-end'>
                  <Link
                    className='opacity-0 group-hover:opacity-100 group-hover:text-white cursor-pointer'
                    to={`/quotes/${quote.author}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  )
}

export default QuoteCard
