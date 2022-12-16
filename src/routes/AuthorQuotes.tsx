import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Quote from '../components/Quote';

import IQuote from '../shared/quote.interface';
import { API_URL } from '../constants';

function unslugify(sluggedAuthorName: string): string {
    return sluggedAuthorName
        .split('-')
        .map((s: string) => s[0].toUpperCase() + s.slice(1))
        .join(' ');
}

export default function AuthorQuotes() {
    const { authorSlug } = useParams();
    const [authorQuotes, setAuthorQuotes] = useState<IQuote[]>([]);

    useEffect(() => {
        async function getAuthorQuotes() {
            const res = await fetch(`${API_URL}/quotes?author=${authorSlug}&limit=3&page=1`);
            const quotesJson = await res.json();

            setAuthorQuotes(quotesJson.results);
        }

        getAuthorQuotes();
    }, []);

    console.log(authorQuotes);

    return (
      <article>
        <h1>{authorQuotes[0]?.author}</h1>
          {authorQuotes.map((quoteObj: IQuote) => <Quote>{quoteObj.content}</Quote>)}
      </article>
    );
}
