import React from "react"
import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav>
      <div>
          <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
          </ul>
      </div>
  </nav>
)

export default Navbar
