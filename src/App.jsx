import { Link } from 'react-router-dom'
import Modal from './components/Modal'
import { useApp } from './hooks/useApp'
import QuoteCard from './components/QuoteCard'

const App = () => {

  const { showModal, setShowModal, onClose, randomQuote } = useApp()

  return (
    <div className='mt-10 flex flex-col items-center gap-y-6 max-w-xl '>

      <QuoteCard
        quote={randomQuote}
        withAuthor
      />

      <Modal isOpen={showModal} onClose={onClose} />
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create a new quote
      </button>
      <Link
        to={'/quotes'}
        className='bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'>
        Go to see other quotes
      </Link>
    </div>
  )
}

export default App
