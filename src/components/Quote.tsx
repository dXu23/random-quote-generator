import React from 'react';

interface quoteProps {
  children: string;
}

export default function Quote(props: quoteProps) {
    return <div className="quote">&ldquo;{props.children}&rdquo;</div>;
}
