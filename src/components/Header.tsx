import { Link } from 'react-router-dom';
import CachedIcon from '@mui/icons-material/Cached';

export default function Header() {

    return (
      <header>
        <Link to='/' reloadDocument><div className="random">random <CachedIcon /></div></Link>
      </header>
    );
}
