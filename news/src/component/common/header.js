import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [navbar, setNavbar] = useState(false)

  return (
    <>
        <header>
        <div className='container paddingSmall'>
          <nav>
          <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
              <i class="fa fa-fw fa-home">
              </i><Link style={{"text-decoration":"none"}} to="/">Home</Link>              
              </li>
              <li>
              <Link style={{"text-decoration":"none"}} to="/tech">Technology</Link>
              </li>
              <li>
              <Link style={{"text-decoration":"none"}} to="/sport">Sport</Link>
              </li>
              <li>
              <Link style={{"text-decoration":"none"}} to="/gallery">Gallery</Link>
              </li>
              <li>
              <Link style={{"text-decoration":"none"}} to="#">Education</Link>
              </li>
              <li>
              <Link style={{"text-decoration":"none"}} to="#">Political</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header

