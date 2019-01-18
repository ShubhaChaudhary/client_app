import React from 'react'
import {Link} from 'react-router-dom'
const Header=()=>(
    <div>
    <h2>Sortal App </h2>
    <Link to='/edit'>Edit </Link>
    <Link to='/create'> | Add photos</Link>
    <Link to='/'> | Home Page</Link>
    </div>
  )
  export default Header 