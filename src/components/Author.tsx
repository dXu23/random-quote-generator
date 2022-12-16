import React, {useEffect, useState, useRef} from 'react';
// import { ArrowRightAlt } from '@mui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';

function useHover() {
    const [isHovering, setIsHovering] = useState(false);
    const ref = useRef<HTMLElement>();

    function enter() {
        setIsHovering(true);
    }

    function leave() {
        setIsHovering(false);
    }

    useEffect(() => {
        ref.current?.addEventListener('mouseenter', enter);
        ref.current?.addEventListener('mouseleave', leave);

        return () => {
            ref.current?.removeEventListener('mouseenter', enter);
            ref.current?.removeEventListener('mouseleave', leave);
        };
    }, []);

    return [isHovering, ref];
}

interface AuthorProps {
    author: string;
    authorSlug: string;
    tags: string[];
}

export default function Author(props: AuthorProps) {
    return (
      <Link to={'/' + props.authorSlug}>
        <div className="quote-info">
          <div>
            <div className="author">{props.author}</div>
            <div className="tags">{props.tags.join(', ')}</div>
          </div>
          <div className="rarr">&rarr;</div>
        </div>
      </Link>
    );
}
