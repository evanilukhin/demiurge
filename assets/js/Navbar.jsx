import React from "react"
import {Link} from 'react-router-dom'

export default function Navbar() {
  return(
    <nav>
        <div>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    </nav>
  );
}
