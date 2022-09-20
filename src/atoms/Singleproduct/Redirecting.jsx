import { Link } from 'react-router-dom';

function Redirecting({text,url}) {
  return (
    <Link to={url} className='text-sm px-2 capitalize'>
      {text} {">"}
    </Link>
  )
}

export default Redirecting;