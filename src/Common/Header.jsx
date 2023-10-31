import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <Link to={'/'} >App | </Link>
        <Link to={'/coderDostReact'} >CoderDostReact</Link>
    </div>
  )
}

export default Header