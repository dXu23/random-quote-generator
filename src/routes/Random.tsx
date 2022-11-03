import { useState, useEffect } from 'react';

import { API_URL } from '../constants';
import IQuote from '../shared/quote.interface';

import Quote from '../components/Quote';
import Author from '../components/Author';

export default function Random() {

    const [quoteObj, setQuoteObj] = useState<IQuote>({ quoteText: '', quoteAuthor: '', quoteGenre: '' });

    useEffect(() => {
        async function getQuoteData() {
          const quoteData = await fetch(API_URL);
          const quoteJson = await quoteData.json();

          setQuoteObj({ ...quoteJson.data[0] });
        }

        getQuoteData();
    }, []);

    return (
      <>
        <Quote>
          {quoteObj.quoteText}
        </Quote>
        <Author author={quoteObj.quoteAuthor} genre={quoteObj.quoteGenre} />
      </>
    );
}
