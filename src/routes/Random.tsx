import { useState, useEffect } from 'react';

import { API_URL } from '../constants';
import IQuote from '../shared/quote.interface';

import Quote from '../components/Quote';
import Author from '../components/Author';

export default function Random() {

    const [quoteObj, setQuoteObj] = useState<IQuote>({ content: '', author: '', authorSlug: '', tags: [] });

    useEffect(() => {
        async function getQuoteData() {
          const quoteData = await fetch(`${API_URL}/random`);
          const quoteJson = await quoteData.json();

          setQuoteObj(quoteJson);
        }

        getQuoteData();
    }, []);

    return (
      <>
        <Quote>
          {quoteObj.content}
        </Quote>
        <Author {...quoteObj}/>
      </>
    );
}
