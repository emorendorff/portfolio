import { NavLink, useLocation } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {

    const location = useLocation().pathname

    return (
        <header>
          <h1 className='title'>Em Orendorff</h1>
          <nav className='nav'>
              <ul className='nav-links'>
                <li>
                  <NavLink to='/about' className={`${location === '/about'} && 'active'`}>
                      <HashLink smooth to='/about'>
                          <p className='navbtn'>About</p>
                      </HashLink>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/work' className={`${location === '/work'} && 'active'`}>
                      <p className='navbtn'>Work</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>
                      <p className={`navbtn : ${location === '/contact'} && 'active'`}>Contact</p>
                  </NavLink>
                </li>
              </ul> 
          </nav>
        </header>
    )
}