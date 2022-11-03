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
    genre: string;
}

export default function Author(props: AuthorProps) {
    /*
    const [isHovering, ref] = useHover();
    let styles = {
        backgroundColor: 'inherit',
        color: '4f4f4f'
    };

    if (isHovering) {
        styles = {
            backgroundColor: '#333',
            color: '#f2f2f2'
        };
    }
    */

    return (
      <Link to={'/' + props.author}>
        <div className="quote-info">
          <div>
            <div className="author">{props.author}</div>
            <div className="genre">{props.genre}</div>
          </div>
          <div className="rarr">&rarr;</div>
        </div>
      </Link>
    );
}
