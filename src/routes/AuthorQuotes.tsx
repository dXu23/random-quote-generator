import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Quote from '../components/Quote';

import IQuote from '../shared/quote.interface';
import { API_URL } from '../constants';

export default function AuthorQuotes() {
    const { author } = useParams();
    const [authorQuotes, setAuthorQuotes] = useState<IQuote[]>([]);

    useEffect(() => {
        async function getAuthorQuotes() {
            const res = await fetch(`${API_URL}?author=${author}&count=3`);
            const quotesJson = await res.json();

            setAuthorQuotes(quotesJson.data);
        }

        getAuthorQuotes();
    }, []);

    console.log(authorQuotes);

    return (
      <article>
        <h1>{author}</h1>
          {authorQuotes.map((quoteObj: IQuote) => <Quote>{quoteObj.quoteText}</Quote>)}
      </article>
    );
}
