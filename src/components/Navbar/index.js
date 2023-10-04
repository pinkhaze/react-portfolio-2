import React from 'react';
import { Link, useMatch, useResolvedPath} from 'react-router-dom';
import '../../styles/Heading.css'

const styles = {
    navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    },
    list: {
      listStyle: 'none',
      display: 'flex',
      gap: '1rem',
      fontSize: '30px',
    },
    link: {
      borderColor: 'white',
      padding: '.4rem',
    }
}

export default function Navbar () {
  return (
      <nav style={styles.navbar} className="ui container grid">
        <ul style={styles.list}>
          <li >
            <NavLink style={styles.link} className="link item" to="/">About </NavLink>
          </li>
          <li >
            <NavLink style={styles.link} className="link item" to="/portfolio">Portfolio </NavLink>
          </li>
          <li >
            <NavLink style={styles.link} className="link item" to="/resume">Resume </NavLink>
          </li>
          <li >
            <NavLink style={styles.link} className="link item" to="/contact">Contact </NavLink>
          </li>
        </ul>
      </nav>
  )

}
function NavLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end:true })

  return (
      <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
              {children}
          </Link>
      </li>
  )
}

