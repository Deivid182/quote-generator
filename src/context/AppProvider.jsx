/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { quotes } from '../data/quotes';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {

  //generate a random quote from our array
  const [initialQuotes, setInitialQuotes] = useState(quotes);
  const [showModal, setShowModal] = useState(false);


  const [randomQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)])

  const addQuote = (quote) => {
    const newQuote = { ...quote, id: initialQuotes.length + 1 }
    const updatedQuotes = [...initialQuotes, newQuote];
    setInitialQuotes(updatedQuotes);
  }

  const quotesByAuthor = (author) => {
    return initialQuotes.filter((quote) => quote.author === author);
  }

  const onClose = () => {
    setShowModal(false);
  }

  return (
    <AppContext.Provider value={{
      randomQuote,
      initialQuotes,
      addQuote,
      showModal,
      setShowModal,
      onClose,
      quotesByAuthor
    }}>
      {children}
    </AppContext.Provider>
  )
}